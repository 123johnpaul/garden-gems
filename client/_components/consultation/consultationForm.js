"use client";
import { useRef, useEffect, useState } from "react";
import { useActionState } from "react";

import { submitConsultationForm } from "@/utils/actions";
import LoadingSpinner from "../loadingSpinner";
import Button from "../button";

const initialState = { ok: false, error: null, paystackDetails: null };

export default function ConsultationForm() {
  const formRef = useRef(null);
  const [state, formAction, pending] = useActionState(
    submitConsultationForm,
    initialState
  );
    const [redirecting, setRedirecting] = useState(false);


  // When state.ok becomes true show modal and reset form
  useEffect(() => {
    if (state.ok && state.paystackDetails?.authorization_url) {
      formRef.current?.reset();
      setRedirecting(true);
      // tiny delay to paint the overlay before navigation
      const url = state.paystackDetails.authorization_url;
      const t = setTimeout(() => {
        window.location.assign(url); // keeps history
      }, 100);
      return () => clearTimeout(t);
    }
  }, [state.ok, state.paystackDetails?.authorization_url]);

  return (
    <>
      <form action={formAction} className="space-y-8" ref={formRef}>
        {/* Top row of inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor="firstname"
              className="absolute left-0 -top-5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="middlename"
              name="middlename"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor=""
              className="absolute left-0 -top-5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown: peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              Middle Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="surname"
              name="surname"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2 transition-colors"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor="surname"
              className="absolute left-0 -top-5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              Last Name/ Surname
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2 transition-colors"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              E-mail address
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2 transition-colors"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              Phone
            </label>
          </div>
          <div className="relative">
            <input
              type="datetime-local"
              id="reservation_date"
              name="reservation_date"
              className="peer w-full bg-transparent border-b-2 focus:outline-none py-2 transition-colors"
            />
            <label
              htmlFor="reservation_date"
              className="absolute left-0 -top-5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#141414]"
            >
              Reservation Date & Time
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <Button
            className="flex h-14 w-64 items-center justify-center rounded-lg text-white text-center font-bold leading-9 tracking-[-0.01em] bg-[#0C7769]"
            disabled={pending}
            type="submit"
          >
            {pending ? (
              <div className="flex items-center gap-2">
                <span>Processing</span>
                <LoadingSpinner size="sm" />
              </div>
            ) : (
              "Proceed to Payment Page"
            )}
          </Button>
          {state.error && (
            <p className="text-sm text-red-400" role="alert">
              {state.error}
            </p>
          )}
        </div>
      </form>
      {redirecting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
            <span
              className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-[#0C7769]/30 border-t-[#0C7769]"
              aria-hidden="true"
            />
            <span className="text-sm text-[#0C7769] font-medium">
              Redirecting to Paystack...
            </span>
          </div>
        </div>
      )}
    </>
  );
}
