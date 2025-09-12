// scripts/fixDB.js
import initDB from "./database/db.js";

async function dropStatusColumn() {
  const db = await initDB();

  try {
    await db.query(`ALTER TABLE consultation DROP COLUMN IF EXISTS status;`);
    console.log("✅ Column 'status' dropped successfully.");
  } catch (err) {
    console.error("❌ Failed to drop column:", err.message);
  } finally {
    process.exit(0); // Exit script
  }
}

dropStatusColumn();
