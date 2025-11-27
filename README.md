Food Recipes Dashboard — Assessment(Machanx)

A full-stack Food Recipes Dashboard built using:

Next.js (Frontend)

Express.js + PostgreSQL (Backend)

TailwindCSS (Styling)

🔗 Live Links:

Frontend (Vercel): https://assessment-zeta-one.vercel.app

Backend (Railway): https://assessment-backend-production-0f5f.up.railway.app

GitHub Repository: https://github.com/Jaskaransingh098/assessment

📌 Features
✅ Recipe Listing:

Paginated table

Server-side filtering

Search by recipe name

Category filter

Filter by min protein

Filter by max calories

Column selector (toggle macros & image)

✅ Recipe Detail Page:

Recipe title & description

Banner image

Ingredients

Steps

Macros (protein, carbs, fats, calories)

✅ UI Enhancements:

Fade / slide animations

Custom dropdown selector

Smooth transitions

Fully responsive layout

📁 Project Structure:
final/
│── backend/      → Express API + PostgreSQL
│── frontend/     → Next.js front-end

🛠️ Setup Instructions:
1️⃣ Backend Setup (Express + PostgreSQL)
Install dependencies
cd backend
npm install

Environment setup

Create backend/.env:

PGHOST=******
PGUSER=***********
PGDATABASE=*********
PGPASSWORD=*****
PGPORT=******
PORT=4000

Run server
npm start

2️⃣ SQL Schema :
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
    category TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

3️⃣ Frontend Setup (Next.js):
Install dependencies
cd frontend
npm install

Environment setup

Create frontend/.env.local:

NEXT_PUBLIC_API_URL=https://assessment-backend-production-0f5f.up.railway.app

Run frontend
npm run dev

🚀 Deployment

Backend deployed on Railway

Frontend deployed on Vercel

Communication handled through NEXT_PUBLIC_API_URL

🧪 How to Access

👉 https://assessment-zeta-one.vercel.app/recipes
