import pg from 'pg';
const { Pool } = pg;

let pool;

async function initDB() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    try {
      // Test connection
      await pool.query('SELECT NOW()');
      console.log('✅ PostgreSQL connected successfully');

      // Create consultation table
      await pool.query(`
        CREATE TABLE IF NOT EXISTS consultation (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          firstname VARCHAR(255) NOT NULL,
          surname VARCHAR(255) NOT NULL,
          middlename VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20) NOT NULL,
          reservation_date DATE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create contactus table
      await pool.query(`
        CREATE TABLE IF NOT EXISTS contactus (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          firstname VARCHAR(255) NOT NULL,
          surname VARCHAR(255) NOT NULL,
          middlename VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20) NOT NULL,
          subject VARCHAR(500) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create newsletter table
      await pool.query(`
        CREATE TABLE IF NOT EXISTS newsletter (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create services table
      await pool.query(`
        CREATE TABLE IF NOT EXISTS services (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) UNIQUE NOT NULL,
          image_path TEXT NOT NULL,
          description TEXT,
          price INTEGER DEFAULT 10000,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log("✅ Database initialized with all tables");
    } catch (error) {
      console.error("❌ Database initialization failed:", error);
      throw error;
    }
  }
  return pool;
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (pool) {
    await pool.end();
    console.log('📊 Database connection closed.');
  }
  process.exit(0);
});

export default initDB;