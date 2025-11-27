import { useRouter } from "next/router";

export default function Table({ columns, rows }) {

    const router = useRouter();
    const columnMap = {
        name: "Name",
        category: "Category",
        calories: "Calories",
        protein: "Protein",
        carbs: "Carbs",
        fats: "Fats",
        image_url: "Image",
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border fade-in">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col}
                                    className="text-left px-5 py-3 text-gray-500 font-medium text-sm"
                                >
                                    {columnMap[col]}
                                </th>
                            ))}
                        </tr>
                    </thead>


                    <tbody>
                        {rows.map((r) => (
                            <tr
                                key={r.id}
                                onClick={() => router.push(`/recipes/${r.id}`)}
                                className="transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-[1.01] cursor-pointer border-b"
                            >
                                {columns.includes("image_url") && (
                                    <td className="px-5 py-4">
                                        <img src={r.image_url} className="h-12 w-12 object-cover rounded-md shadow" />
                                    </td>
                                )}

                                {columns.includes("name") && (
                                    <td className="px-5 py-4 text-sm text-black/80 font-medium">
                                        {r.name}
                                        <div className="text-xs text-gray-500">{r.description}</div>
                                    </td>
                                )}

                                {columns.includes("category") && (
                                    <td className="px-5 py-4 text-black/50">{r.category}</td>
                                )}

                                {columns.includes("calories") && (
                                    <td className="px-5 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-600">
                                            {r.calories} kcal
                                        </span>
                                    </td>
                                )}

                                {columns.includes("protein") && (
                                    <td className="px-5 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                                            {r.protein} g
                                        </span>
                                    </td>
                                )}

                                {columns.includes("carbs") && (
                                    <td className="px-5 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                            {r.carbs} g
                                        </span>
                                    </td>
                                )}

                                {columns.includes("fats") && (
                                    <td className="px-5 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                                            {r.fats} g
                                        </span>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
