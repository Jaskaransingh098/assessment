const express = require('express');
const cors = require('cors');
require('dotenv').config();
const database = require('./database');

const app = express();
app.use(cors());
app.use(express.json());


app.get("/api/recipes", async (req, res) => {
    try {
        const {
            search = "",
            category = "",
            page = 1,
            limit = 10
        } = req.query;

        const offset = (page - 1) * limit;
        const values = [];
        let where = "WHERE 1=1";

        // Search
        if (search) {
            values.push(`%${search}%`);
            where += ` AND (name ILIKE $${values.length} OR description ILIKE $${values.length})`;
        }


        if (category) {
            values.push(category.toLowerCase());
            where += ` AND LOWER(category) = $${values.length}`;
        }


        // Fetch
        const query = `
      SELECT *
      FROM recipes
      ${where}
      ORDER BY id ASC
      LIMIT ${limit} OFFSET ${offset};
    `;

        const result = await database.query(query, values);

        res.json({
            page: Number(page),
            limit: Number(limit),
            total: result.rowCount,
            recipes: result.rows
        });

    } catch (err) {
        console.error("Error fetching recipes:", err);
        res.status(500).json({ error: "Server error" });
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