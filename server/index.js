import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import bodyParser from "body-parser";

import initDB from "./database/db.js";

import newsletterRoutes from "./routes/newsLetterRoutes.js";
import consultationRoutes from "./routes/scheduleConsultationRoutes.js";
import contactusRoutes from "./routes/contactusRoutes.js";
import servicesroutes from "./routes/servicesRoutes.js"
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use("/newsletter", newsletterRoutes);
app.use("/consultation", consultationRoutes);
app.use("/contactus", contactusRoutes);
app.use("/services",servicesroutes)

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Add this before app.listen() - TEMPORARY DEBUG ENDPOINT
app.get("/debug/data", async (req, res) => {
  try {
    const db = await initDB();
    
    const newsletter = await db.query("SELECT * FROM newsletter");
    const contactus = await db.query("SELECT * FROM contactus");
    const services = await db.query("SELECT * FROM services");
    const consultation = await db.query("SELECT * FROM consultation");
    
    res.json({
      newsletter: newsletter.rows,
      contactus: contactus.rows,
      services: services.rows,
      consultation: consultation.rows,
      total_records: {
        newsletter: newsletter.rows.length,
        contactus: contactus.rows.length,
        services: services.rows.length,
        consultation: consultation.rows.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
