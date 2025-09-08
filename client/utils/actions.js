"use server";

import { postData } from "@/utils/api";

const validateFormField = (field, formData) => {
  return formData.get(field)?.toString().trim() || "";
};

export async function submitContactForm(prevState, formData) {
  try {
    const contactForm = {
      firstname: validateFormField("firstname", formData),
      surname: validateFormField("surname", formData),
      middlename: validateFormField("middlename", formData),
      email: validateFormField("email", formData),
      phone: validateFormField("phone", formData),
      subject: validateFormField("subject", formData),
      message: validateFormField("message", formData),
    };

    if (!contactForm.email) {
      return { ok: false, error: "Email is required" };
    }
    if (
      !contactForm.firstname ||
      !contactForm.surname ||
      !contactForm.middlename
    ) {
      return { ok: false, error: "First, middle and last name required" };
    }
     if (!contactForm.phone || isNaN(contactForm.phone) ) {
      return { ok: false, error: "Phone number is required and must be a valid number" };
    }
    if (!contactForm.subject || !contactForm.message) {
      return { ok: false, error: "Subject and message are required" };
    }

    await postData("/contactus", contactForm);
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: err.message || "Failed to send message" };
  }
}

export const submitNewsletterForm = async (prevState, formData) => {
  try {
    const newsletterForm = {
      email: validateFormField("email", formData),
    };

    if (!newsletterForm.email) {
      return { ok: false, error: "Email is required" };
    }

    await postData("/newsletter", newsletterForm);
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
      firstname: validateFormField("firstname", formData),
      surname: validateFormField("surname", formData),
      middlename: validateFormField("middlename", formData),
      email: validateFormField("email", formData),
      phone: validateFormField("phone", formData),
      reservation_date: validateFormField("reservation_date", formData),
    };

    // Basic validations (extend as needed)
    if (!consultationForm.email) {
      return { ok: false, error: "Email is required" };
    }
    if (
      !consultationForm.firstname ||
      !consultationForm.surname ||
      !consultationForm.middlename
    ) {
      return { ok: false, error: "First, middle and last name required" };
    }
    if (!consultationForm.reservation_date) {
      return { ok: false, error: "Reservation date/time required" };
    }
    if (!consultationForm.phone || isNaN(consultationForm.phone)) {
      return { ok: false, error: "Phone number is required and must be a valid number" };
    }

    await postData("/consultation", consultationForm);
    return { ok: true, error: null };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Failed to schedule consultation",
    };
  }
};
