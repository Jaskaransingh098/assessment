const available = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "calories", label: "Calories" },
    { key: "protein", label: "Protein" },
    { key: "carbs", label: "Carbs" },
    { key: "fats", label: "Fats" },
    { key: "image_url", label: "Image" },
];

export default function ColumnSelector({ columns, setColumns }) {
    const toggle = (key) => {
        if (columns.includes(key))
            setColumns(columns.filter((c) => c !== key));
        else setColumns([...columns, key]);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border mb-6 fade-in">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Columns</h2>

            <div className="flex flex-wrap gap-4">
                {available.map((col) => (
                    <label
                        key={col.key}
                        className=" text-black/60 flex items-center gap-2 cursor-pointer transition-all hover:text-blue-600 hover:scale-[1.02]"
                    >
                        <input
                            type="checkbox"
                            checked={columns.includes(col.key)}
                            onChange={() => toggle(col.key)}
                        />
                        {col.label}
                    </label>
                ))}
            </div>
        </div>
    );
}
