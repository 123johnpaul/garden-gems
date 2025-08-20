import express from "express";
import {scheduleConsultation} from "../Controller/scheduleConsultationController.js";

const router = express.Router();

// POST /consultation
router.post("/", scheduleConsultation);

export default router;
