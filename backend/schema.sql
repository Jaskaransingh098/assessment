CREATE TABLE IF NOT EXISTS recipes(
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
    category Text,
    created_at TIMESTAMP DEFAULT NOW()
);