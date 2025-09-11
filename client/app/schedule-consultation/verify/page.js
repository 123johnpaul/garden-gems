"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyPayment } from "@/utils/api";
import LoadingSpinner from "@/_components/loadingSpinner";

export default function VerifyConsultationPayment({searchParams}) {
  const router = useRouter();
  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // 1. Flatten params (extract JSON inside ?value=...)
    const flattenParams = () => {
      let flat = { ...searchParams };

      // value holds encoded JSON: %7B"firstname":"Test",...%7D
      if (flat.value) {
        try {
          const decoded = decodeURIComponent(flat.value);
          // decoded now => {"firstname":"Test",...}
          const parsed = JSON.parse(decoded);
          flat = { ...flat, ...parsed };
        } catch (e) {
          console.warn("Could not parse value param", e);
        }
        delete flat.value;
      }

      // reason often becomes "[object Object]" - discard
      delete flat.reason;
      delete flat._debugInfo;
      delete flat.status;

      // Normalize reference
      if (!flat.reference && flat.trxref) flat.reference = flat.trxref;
      // Keep trxref only if you want; otherwise drop
      delete flat.trxref;

      return flat;
    };

    const flatParams = flattenParams();
    const requiredKeys = [
      "firstname",
      "middlename",
      "surname",
      "phone",
      "email",
      "reservation_date",
      "reference",
    ];

    if (!flatParams.reference) {
      setStatus("error");
      setMessage("No payment reference found");
      return;
    }

    // 2. Build clean query string only with expected keys
    const buildQueryString = (obj) => {
      const qs = new URLSearchParams();
      Object.entries(obj).forEach(([k, v]) => {
        if (v != null && requiredKeys.includes(k)) qs.append(k, v);
      });
      return qs.toString();
    };

    const handlePaymentVerification = async () => {
      try {
        const qs = buildQueryString(flatParams);
        const data = await verifyPayment(`/consultation/verify?${qs}`);

        if (
          (data.status === 201 || data.status === "success") &&
          data.message
        ) {
          setStatus("success");
          setMessage(data.message);
          setTimeout(() => router.push("/"), 3000);
        } else {
          setStatus("error");
          setMessage(data.error || "Payment verification failed");
        }
      } catch {
        setStatus("error");
        setMessage("Network error occurred");
      }
    };

    handlePaymentVerification();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {status === "verifying" && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-center space-y-4">
              <LoadingSpinner />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Processing Payment
              </h1>
              <p className="text-gray-600">
                Confirming your payment. One moment...
              </p>
            </div>
          </div>
        )}
        {status === "success" && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Consultation Booked!
              </h1>
              <p className="text-gray-600">{message}</p>
              <p className="text-sm text-gray-500">Redirecting...</p>
              <button
                onClick={() => router.push("/")}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Payment Issue
              </h1>
              <p className="text-gray-600">{message}</p>
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/schedule-consultation")}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Try Again
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
