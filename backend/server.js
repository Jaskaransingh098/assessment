const express = require('express');
const cors = require('cors');
require('dotenv').config();
const database = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/recipes", async (req, res) => {
    try {
        let { search, category, page = 1, limit = 10, minProtein, maxCalories } = req.query;

        page = Number(page);
        limit = Number(limit);

        let query = `SELECT * FROM recipes WHERE 1=1`;
        let params = [];


        if (search) {
            params.push(`%${search}%`);
            query += ` AND (name ILIKE $${params.length} OR description ILIKE $${params.length})`;
        }


        if (category) {
            params.push(category);
            query += ` AND category = $${params.length}`;
        }


        if (minProtein) {
            params.push(Number(minProtein));
            query += ` AND protein >= $${params.length}`;
        }


        if (maxCalories) {
            params.push(Number(maxCalories));
            query += ` AND calories <= $${params.length}`;
        }


        params.push(limit);
        params.push((page - 1) * limit);
        query += ` LIMIT $${params.length - 1} OFFSET $${params.length}`;

        const recipes = await db.query(query, params);
        res.json({ page, limit, recipes: recipes.rows });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get("/api/recipes/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await database.query("SELECT * FROM recipes WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        res.json(result.rows[0]);

    } catch (err) {
        console.error("Error fetching recipe:", err);
        res.status(500).json({ error: "Server error" });
    }
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});