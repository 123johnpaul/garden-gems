import initDB from "../database/db.js";

const db = await initDB();

export async function postservices(req,res) {
    const { name, image_path, description } = req.body;

  try {
    if (
      !name ||
      !image_path ||
      !description
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await db.run(
      `INSERT OR IGNORE INTO services (name, image_path, description) 
       VALUES (?, ?, ?)`,
      [name, image_path, description]
    );

    res.status(201).json({ message: "Service inserted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getservices(req,res){
    try {
    const services = await db.all("SELECT * FROM services");
    res.status(200).json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
}

export async function getservice(req,res){
   const { id } = req.params;

  try {
    const service = await db.get("SELECT * FROM services WHERE id = ?", [id]);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch service" });
  }
}