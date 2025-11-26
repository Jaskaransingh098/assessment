export default function Table({ columns, rows }) {
    const colMap = {
        name: "Name",
        category: "Category",
        calories: "Calories",
        protein: "Protein",
        carbs: "Carbs",
        fats: "Fats",
        image_url: "Image",
    };

    return (
        <div className="overflow-x-auto border rounded">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((col) => (
                            <th key={col} className="p-3 font-medium">
                                {colMap[col] || col}
                            </th>
                        ))}
                        <th className="p-3 font-medium">View</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((r) => (
                        <tr key={r.id} className="border-t">
                            {columns.map((c) => (
                                <td key={c} className="p-3">
                                    {c === "image_url" ? (
                                        <img src={r.image_url} className="w-20 rounded" />
                                    ) : (
                                        r[c]
                                    )}
                                </td>
                            ))}

                            <td className="p-3">
                                <a
                                    href={`/recipes/${r.id}`}
                                    className="text-blue-600 underline"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
