import Skeleton from "@/component/skeleton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, [id]);

    if (!recipe)
        return <Skeleton />

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto fade-in">


                <button
                    onClick={() => router.back()}
                    className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 active:scale-95 transition-all"
                >
                    ← Back
                </button>


                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow">
                    <img
                        src={recipe.image_url}
                        alt={recipe.name}
                        className="w-full h-full object-cover scale-100 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                        <h1 className="text-3xl font-bold text-white">{recipe.name}</h1>
                    </div>
                </div>


                <p className="mt-4 text-gray-700 text-lg">{recipe.description}</p>


                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-red-100 text-red-600 rounded-lg p-3 text-center font-semibold shadow transition-all hover:scale-105 hover:shadow-md">
                        {recipe.calories} kcal
                    </div>
                    <div className="bg-red-100 text-red-600 rounded-lg p-3 text-center font-semibold shadow transition-all hover:scale-105 hover:shadow-md">
                        {recipe.protein}g Protein
                    </div>
                    <div className="bg-red-100 text-red-600 rounded-lg p-3 text-center font-semibold shadow transition-all hover:scale-105 hover:shadow-md">
                        {recipe.carbs}g Carbs
                    </div>
                    <div className="bg-red-100 text-red-600 rounded-lg p-3 text-center font-semibold shadow transition-all hover:scale-105 hover:shadow-md">
                        {recipe.fats}g Fats
                    </div>
                </div>


                <p className="mt-6 text-sm text-gray-600 font-medium">
                    Category:{" "}
                    <span className="px-3 py-1 bg-gray-200 rounded-md text-gray-700">
                        {recipe.category}
                    </span>
                </p>


                <h2 className="text-xl text-black/70 font-semibold mt-8">Ingredients</h2>
                <pre className="bg-gray-100 rounded-lg p-4 whitespace-pre-line mt-2 shadow text-gray-700">
                    {recipe.ingredients}
                </pre>


                <h2 className="text-xl text-black/60 font-semibold mt-8">Steps</h2>
                <pre className="bg-gray-100 rounded-lg p-4 whitespace-pre-line mt-2 shadow text-gray-700">
                    {recipe.steps}
                </pre>
            </div>
        </div>
    );
}
