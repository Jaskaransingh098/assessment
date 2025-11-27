require("dotenv").config();
const database = require("./database");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const categories = ['Veg', 'Non-veg', "Dessert", "Main Course", "Snack", "Breakfast"];

const sampleDescriptions = [
    "A delicious homemade dish packed with flavor.",
    "A quick and easy recipe perfect for busy days.",
    "A hearty meal that everyone will love.",
    "A light and refreshing dish for any time.",
    "A spicy and flavorful recipe inspired by traditional cooking.",
];

const sampleIngredients = [
    "Tomatoes, Onions, Garlic, Salt, Oil",
    "Chicken, Ginger, Garlic, Butter, Spices",
    "Potatoes, Peas, Carrots, Cream, Pepper",
    "Flour, Sugar, Eggs, Milk, Baking Powder",
    "Rice, Vegetables, Soy Sauce, Egg, Chili",
];

const sampleSteps = [
    "1. Prep ingredients.\n2. Cook well.\n3. Serve hot.",
    "1. Chop everything.\n2. Mix and cook.\n3. Garnish and serve.",
    "1. Heat pan.\n2. Add ingredients.\n3. Simmer until done.",
    "1. Marinate.\n2. Fry or bake.\n3. Enjoy your meal.",
    "1. Boil.\n2. Season.\n3. Plate and serve.",
];



async function seed() {
    try {
        console.log("Seeding databse...");

        for (let i = 0; i < 50; i++) {
            const name = `Recipe ${i}`;
            const description = sampleDescriptions[random(0, sampleDescriptions.length - 1)];
            const ingredients = sampleIngredients[random(0, sampleIngredients.length - 1)];
            const steps = sampleSteps[random(0, sampleSteps.length - 1)];
            const image_url = `https://picsum.photos/seed/recipe${i}/600/400`;

            const protein = random(5, 40);
            const carbs = random(10, 120);
            const fats = random(5, 50);
            const calories = protein * 4 + carbs * 4 + fats * 9;

            const category = categories[random(0, categories.length - 1)];

            await database.query(
                `INSERT INTO recipes (name, description, ingredients, steps, image_url, protein, carbs, fats, calories, category)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
                [name, description, ingredients, steps, image_url, protein, carbs, fats, calories, category]
            );

            console.log(`Inserted recipe ${i}`);
        }

        console.log("✅ Seeding complete!");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding:", err);
        process.exit(1);
    }
}

seed();