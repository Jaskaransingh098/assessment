import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Table from "../../component/Table";
// import ColumnSelector from "@/component/ColumnSelector";
// import FilterBar from "@/component/FilterBar";
// import Pagination from "@/component/Pagination";
import ColumnSelector from "../../component/ColumnSelector"
import FilterBar from "../../component/FilterBar"
import Pagination from "../../component/Pagination";

export default function RecipesPage({ initialData }) {
    const router = useRouter();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("columns");
        if (saved) setColumns(JSON.parse(saved));
        else setColumns(["name", "category", "calories", "protein"]);
    }, []);

    useEffect(() => {
        if (columns.length)
            localStorage.setItem("columns", JSON.stringify(columns));
    }, [columns]);

    const onFilterChange = (params) => {
        router.push({
            pathname: "/recipes",
            query: { ...router.query, ...params, page: 1 },
        });
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Food Recipes</h1>

            <FilterBar query={router.query} onChange={onFilterChange} />

            <div className="my-4">
                <ColumnSelector columns={columns} setColumns={setColumns} />
            </div>

            <Table columns={columns} rows={initialData.recipes} />

            <Pagination
                page={initialData.page}
                onPage={(p) => onFilterChange({ page: p })}
            />
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const qs = new URLSearchParams(query).toString();
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/recipes?${qs}`
    );
    const data = await res.json();

    return { props: { initialData: data } };
}
