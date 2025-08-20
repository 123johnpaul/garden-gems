import express from "express";
import {subscribeNewsletter} from "../Controller/newsLetterController.js";

const router = express.Router();

// POST /newsletter
router.post("/", subscribeNewsletter);

export default router;
