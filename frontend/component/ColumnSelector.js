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
        <div className="flex flex-wrap gap-4">
            {available.map((col) => (
                <label key={col.key} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={columns.includes(col.key)}
                        onChange={() => toggle(col.key)}
                    />
                    {col.label}
                </label>
            ))}
        </div>
    );
}
