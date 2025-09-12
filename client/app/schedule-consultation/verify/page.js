"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyPayment } from "@/utils/api"; // your existing wrapper
import LoadingSpinner from "@/_components/loadingSpinner";

export default function VerifyConsultationPayment() {
  const router = useRouter();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const runCheck = async () => {
      try {
        // 1) fetch the most recent consultation from your backend
        const latest = await verifyPayment("/consultation/latest"); // assumes your util adds base URL
        if (!latest || !latest.id) {
          setStatus("error");
          setMessage("No recent consultation found. Please try scheduling again.");
          return;
        }

        // If no reference saved yet we can't verify
        if (!latest.reference) {
          setStatus("error");
          setMessage("Payment reference not yet available for the latest consultation. Try again in a few seconds.");
          return;
        }

        // 2) call verify endpoint with the consultation id
        const verifyRes = await verifyPayment(`/consultation/verify?id=${latest.id}`);

        if (verifyRes && (verifyRes.status === "success" || verifyRes.status === 200 || verifyRes.status === 201)) {
          setStatus("success");
          setMessage(verifyRes.message || "Payment verified successfully.");
          setTimeout(() => router.push("/"), 3000);
        } else {
          setStatus("error");
          setMessage(verifyRes.error || verifyRes.message || "Payment verification failed.");
        }
      } catch (err) {
        console.error("Verify page error:", err);
        setStatus("error");
        setMessage("Network or server error while verifying payment.");
      }
    };

    runCheck();
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {status === 'verifying' && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-center space-y-4">
              <LoadingSpinner />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Processing Payment</h1>
              <p className="text-gray-600">Confirming your payment. One moment...</p>
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-bold text-gray-800">Consultation Booked!</h1>
              <p className="text-gray-600">{message}</p>
              <button onClick={() => router.push("/")} className="w-full bg-green-600 text-white py-3 rounded-lg">Back to Home</button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-bold text-gray-800">Payment Issue</h1>
              <p className="text-gray-600">{message}</p>
              <div className="space-y-3">
                <button onClick={() => router.push("/schedule-consultation")} className="w-full bg-blue-600 text-white py-3 rounded-lg">Try Again</button>
                <button onClick={() => router.push("/")} className="w-full border border-gray-300 py-3 rounded-lg">Home</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}