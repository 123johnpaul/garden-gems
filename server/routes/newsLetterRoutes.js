import express from "express"
import {subscribeNewsletter} from "../Controller/newsLetterController.js"
import {body} from "express-validator"

const router = express.Router();

router.post("/",
    [
    body("email")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail()
    ]
    ,subscribeNewsletter);

export default router;
