// test-connection.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

async function testConnection() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('Testing connection...');
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful!');
    console.log('Current time from DB:', result.rows[0].now);
    await pool.end();
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();