import express from "express";
import { submitContactUs } from "../controller/contactUsController.js";
import {body} from "express-validator"

const router = express.Router();


// POST /contactus
router.post("/",[
  body("firstname")
    .isString()
    .withMessage("Firstname must be a string")
    .trim()
    .notEmpty()
    .withMessage("Firstname is required"),

  body("surname")
    .isString()
    .withMessage("Surname must be a string")
    .trim()
    .notEmpty()
    .withMessage("Surname is required"),

  body("middlename")
    .optional()
    .isString()
    .withMessage("Middlename must be a string")
    .trim(),

  body("email")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("phone")
    .isMobilePhone("any") 
    .withMessage("Phone number must be valid"),

  body("subject")
    .isString()
    .withMessage("Subject must be a string")
    .trim()
    .notEmpty()
    .withMessage("Subject is required"),

  body("message")
    .isString()
    .withMessage("Message must be a string")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters long"),
], submitContactUs);

export default router;
