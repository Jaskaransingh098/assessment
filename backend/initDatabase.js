require("dotenv").config();
const database = require("./database");

const schema = `
CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  ingredients TEXT,
  steps TEXT,
  image_url TEXT,
  protein INTEGER,
  carbs INTEGER,
  fats INTEGER,
  calories INTEGER,
  category TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
`;

async function run() {
    try{
        console.log("Creating table...");
        await database.query(schema);
        console.log("Recipes table created successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Error creating table:", err);
        process.exit(1);
    }
}

run();