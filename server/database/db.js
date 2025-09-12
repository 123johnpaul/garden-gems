import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db;

async function initDB() {
  if (!db) {
    db = await open({
      filename: "./database/gardengem-db.sqlite",
      driver: sqlite3.Database,
    });

      // Create consultation table
      await pool.query(`
        CREATE TABLE IF NOT EXISTS consultation (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          firstname VARCHAR(255) NOT NULL,
          surname VARCHAR(255) NOT NULL,
          middlename VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20) NOT NULL,
          reservation_date TIMESTAMP NOT NULL,
          reference TEXT UNIQUE,
          status VARCHAR(20) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

    // Create Contact us table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contactus (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
        firstname TEXT NOT NULL,
        surname TEXT NOT NULL,
        middlename TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create Newsletter table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS newsletter (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
        email TEXT UNIQUE NOT NULL
      )
    `);

    await db.exec(`
    CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    name TEXT UNIQUE,
    image_path TEXT NOT NULL,
    description TEXT
  )
`)


    console.log("✅ Database initialized with all tables");
  }
  return db;
}

export default initDB;
