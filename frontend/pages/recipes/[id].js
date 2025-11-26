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

    if (!recipe) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
            <img
                src={recipe.image_url}
                alt={recipe.name}
                className="rounded mb-4 w-full"
            />

            <p className="mb-4">{recipe.description}</p>

            <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
            <p className="whitespace-pre-line mb-4">{recipe.ingredients}</p>

            <h2 className="text-xl font-semibold mt-4">Steps</h2>
            <p className="whitespace-pre-line">{recipe.steps}</p>

            <h2 className="text-xl font-semibold mt-4">Macros</h2>
            <p>
                Protein: {recipe.protein}g | Carbs: {recipe.carbs}g | Fats:{" "}
                {recipe.fats}g | Calories: {recipe.calories}
            </p>
            <p>Category: {recipe.category}</p>
        </div>
    );
}
