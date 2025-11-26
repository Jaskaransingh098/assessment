const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PFUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
};