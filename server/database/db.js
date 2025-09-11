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
    await db.exec(`
      CREATE TABLE IF NOT EXISTS consultation (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
        firstname TEXT NOT NULL,
        surname TEXT NOT NULL,
        middlename TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        reservation_date TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
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
    // services table
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
