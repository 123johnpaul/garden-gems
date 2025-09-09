// services/paystackService.js
import axios from "axios";

const PAYSTACK_SECRET_KEY = 'sk_test_97771d956273614a978a0a57fb94f0b610c5db12'

const paystack = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
});


export async function initializePayment({ email, amount, callback_url }) {
  try {
    const response = await paystack.post("/transaction/initialize", {
      email,
      amount: amount * 100,
      callback_url,
    });
    return response.data;
  } catch (err) {
    throw new Error(
      err.response?.data?.message || "Payment initialization failed"
    );
  }
}


export async function verifyPayment(reference) {
  try {
    const response = await paystack.get(`/transaction/verify/${reference}`);
    return response.data;
  } catch (err) {
    throw new Error(
      err.response?.data?.message || "Payment verification failed"
    );
  }
}
