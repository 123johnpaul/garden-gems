import initDB from "../database/db.js";

export async function postservices(req, res) {
  const { name, image_path, description, price } = req.body;

  try {
    if (!name || !image_path || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const db = await initDB();
    await db.query(
      `INSERT INTO services (name, image_path, description, price) 
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (name) DO NOTHING`,
      [name, image_path, description, price || 10000]
    );

    res.status(201).json({ message: "Service inserted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getservices(req, res) {
  try {
    const db = await initDB();
    const result = await db.query("SELECT * FROM services ORDER BY created_at DESC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
}

export async function getservice(req, res) {
  const { id } = req.params;

  try {
    const db = await initDB();
    const result = await db.query("SELECT * FROM services WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch service" });
  }
}