import { useState } from "react";


export default function FilterBar({ query, onChange }) {
    const [search, setSearch] = useState(query.search || "");
    const [category, setCategory] = useState(query.category || "");
    const [minProtein, setMinProtein] = useState(query.minProtein || "");
    const [maxCalories, setMaxCalories] = useState(query.maxCalories || "");

    return (
        <div className="bg-gray-700 p-4 rounded-xl sadow-sm border mb-6 fade-in flex flex-wrap gap-4 items-center">
            <input
                className="text-white border rounded-lg px-4 py-2 w-56 bg-gray-500 focus:ring-2 ring-blue-300 outline-none transition"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                className="border px-4 py-2 rounded-lg bg-gray-500 focus:ring-2 ring-blue-300 transition"
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

            <input
                type="number"
                className="border rounded-lg px-4 py-2 w-40 bg-gray-500 focus:ring-2  ring-blue-300 transition"
                placeholder="Min Protein"
                value={minProtein}
                onChange={(e) => setMinProtein(e.target.value)}
            />

            <input
                type="number"
                className="border rounded-lg px-4 py-2 w-40 bg-gray-500 focus:ring-2 ring-blue-300 transition"
                placeholder="Max Calories"
                value={maxCalories}
                onChange={(e) => setMaxCalories(e.target.value)}
            />

            <button
                onClick={() =>
                    onChange({ search, category, minProtein, maxCalories })
                }
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 actve:scale-95 transition shadow"
            >
                Apply
            </button>
        </div>
    );
}