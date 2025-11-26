require("dotenv").config();
const database = require("./database");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const categories = ['Veg', 'Non-veg', "Dessert", "Main Course", "Snack", "Breakfast"];


async function seed() {
    try {
        console.log("Seeding databse...");

        for (let i = 0; i < 50; i++) {
            const name = `Recipe ${i}`;
            const description = `This is a sample description for Recipe ${i}.`;
            const steps = `1. Do something.\n2. Cook it.\n3. Serve it.`;
            const ingredients = `Ingredient1, Ingredient2, Ingredient3`;
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