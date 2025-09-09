"use server";

import { postData } from "@/utils/api";

export async function submitContactForm(prevState, formData) {
  try {
    const contactForm = {
      firstname: formData.get("firstname")?.toString().trim() || "",
      surname: formData.get("surname")?.toString().trim() || "",
      middlename: formData.get("middlename")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      subject: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    if (!contactForm.email) {
      return { ok: false, error: "Email is required" };
    }
    if (!contactForm.firstname || !contactForm.surname) {
      return { ok: false, error: "First and last name required" };
    }

    await postData("contactus", contactForm);
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: err.message || "Failed to send message" };
  }
}

export const submitNewsletterForm = async (prevState, formData) => {
  try {
    const newsletterForm = {
      email: formData.get("email")?.toString().trim() || "",
    };

    if (!newsletterForm.email) {
      return { ok: false, error: "Email is required" };
    }

    await postData("newsletter", newsletterForm);
    return { ok: true, error: null };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Failed to register for newsletter",
    };
  }
};

export const submitConsultationForm = async (prevState, formData) => {
  try {
    const consultationForm = {
      firstname: formData.get("firstname")?.toString().trim() || "",
      surname: formData.get("surname")?.toString().trim() || "",
      middlename: formData.get("middlename")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      reservation_date: formData.get("reservation_date")?.toString().trim() || "",
    };

    // Basic validations (extend as needed)
    if (!consultationForm.email) {
      return { ok: false, error: "Email is required" };
    }
    if (!consultationForm.firstname || !consultationForm.surname) {
      return { ok: false, error: "First and last name required" };
    }
    if (!consultationForm.reservation_date) {
      return { ok: false, error: "Reservation date/time required" };
    }

    await postData("consultation", consultationForm);
    return { ok: true, error: null };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Failed to schedule consultation",
    };
  }
};
