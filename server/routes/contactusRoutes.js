import express from "express";
import { submitContactUs } from "../controller/contactUsController.js";

const router = express.Router();

// POST /contactus
router.post("/", submitContactUs);

export default router;
