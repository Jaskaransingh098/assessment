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
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden fade-in">
            <table className="w-full">
                <thead className="bg-gray-50 border-b">
                    <tr>

                        {columns.includes("image_url") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Image
                            </th>
                        )}

                        {columns.includes("name") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Recipe
                            </th>
                        )}

                        {columns.includes("category") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Category
                            </th>
                        )}

                        {columns.includes("calories") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Calories
                            </th>
                        )}

                        {columns.includes("protein") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Protein
                            </th>
                        )}

                        {columns.includes("carbs") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Carbs
                            </th>
                        )}

                        {columns.includes("fats") && (
                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-sm">
                                Fats
                            </th>
                        )}

                    </tr>
                </thead>

                <tbody>
                    {rows.map((r) => (
                        <tr
                            key={r.id}
                            className="transition-all hover:bg-gray-50 hover:scale-[1.01] cursor-pointer border-b"
                        >
                            {/* Image */}
                            {columns.includes("image_url") && (
                                <td className="px-5 py-4">
                                    <img
                                        src={r.image_url}
                                        alt={r.name}
                                        className="h-12 w-12 rounded-md object-cover shadow"
                                    />
                                </td>
                            )}

                            {/* Name + description */}
                            {columns.includes("name") && (
                                <td className="px-5 py-4 text-sm text-gray-700 font-medium">
                                    {r.name}
                                    <div className="text-xs text-gray-400">{r.description}</div>
                                </td>
                            )}

                            {/* Category */}
                            {columns.includes("category") && (
                                <td className="px-5 py-4 text-sm text-gray-600">{r.category}</td>
                            )}

                            {/* Calories */}
                            {columns.includes("calories") && (
                                <td className="px-5 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-600 font-medium">
                                        {r.calories} kcal
                                    </span>
                                </td>
                            )}

                            {/* Protein */}
                            {columns.includes("protein") && (
                                <td className="px-5 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600 font-medium">
                                        {r.protein} g
                                    </span>
                                </td>
                            )}

                            {/* Carbs */}
                            {columns.includes("carbs") && (
                                <td className="px-5 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium">
                                        {r.carbs} g
                                    </span>
                                </td>
                            )}

                            {/* Fats */}
                            {columns.includes("fats") && (
                                <td className="px-5 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700 font-medium">
                                        {r.fats} g
                                    </span>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
