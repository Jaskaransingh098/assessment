import { useState } from "react";

export default function FilterBar({ query, onChange }) {
    const [search, setSearch] = useState(query.search || "");
    const [category, setCategory] = useState(query.category || "");

    return (
        <div className="flex gap-4 mb-4">
            <input
                className="border p-2 rounded w-60"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className="border p-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">All</option>
                <option>Veg</option>
                <option>Non-Veg</option>
                <option>Dessert</option>
                <option>Main Course</option>
                <option>Snack</option>
                <option>Breakfast</option>
            </select>

            <button
                onClick={() => onChange({ search, category })}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Apply
            </button>
        </div>
    );
}
