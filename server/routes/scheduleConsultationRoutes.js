import express from "express";
import {scheduleConsultation,verifyConsultationPayment,getLatestConsultation} from "../Controller/scheduleConsultationController.js";
import {body} from "express-validator"

const router = express.Router();

// POST /consultation
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
    .optional() // in case middlename is not compulsory
    .isString()
    .withMessage("Middlename must be a string")
    .trim(),

  body("phone")
    .isMobilePhone("any") // or use a region e.g. 'en-NG'
    .withMessage("Phone number must be valid"),

  body("email")
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("reservation_date")
    .isISO8601()
    .withMessage("Reservation date must be a valid date (YYYY-MM-DD)")
    .toDate(),
], scheduleConsultation);

router.get("/verify",verifyConsultationPayment)
router.get("/latest", getLatestConsultation);     // NEW

export default router;
