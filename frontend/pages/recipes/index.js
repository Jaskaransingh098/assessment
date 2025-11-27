import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import Table from "../../component/Table";
import ColumnSelector from "../../component/ColumnSelector";
import FilterBar from "../../component/FilterBar";
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


    const onPageChange = (page) => {
        router.push({
            pathname: "/recipes",
            query: { ...router.query, page },
        });
    };

    return (
        <Layout>
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Recipes</h1>

            <FilterBar query={router.query} onChange={onFilterChange} />

            <ColumnSelector columns={columns} setColumns={setColumns} />

            <Table columns={columns} rows={initialData.recipes} />

            <Pagination page={initialData.page} onPage={onPageChange} />
        </Layout>
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
