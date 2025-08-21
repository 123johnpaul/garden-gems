import express from "express";
import bodyParser from "body-parser";

import newsletterRoutes from "./routes/newsLetterRoutes.js";
import consultationRoutes from "./routes/scheduleConsultationRoutes.js";
import contactusRoutes from "./routes/contactusRoutes.js";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use("/newsletter", newsletterRoutes);
app.use("/consultation", consultationRoutes);
app.use("/contactus", contactusRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
