import pg from 'pg'
import './dotenv.js'

const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export { pool }
export default pool