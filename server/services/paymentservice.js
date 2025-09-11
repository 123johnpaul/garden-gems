// services/paystackService.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const paystack = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
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
