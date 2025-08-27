"use client";
import { useRef, useState, useEffect } from "react";
import { useActionState } from "react";

import { submitConsultationForm } from "@/utils/actions";
import LoadingSpinner from "../loadingSpinner";

const initialState = { ok: false, error: null };

export default function ConsultationForm() {
  const formRef = useRef(null);
  const [state, formAction, pending] = useActionState(
    submitConsultationForm,
    initialState
  );
  const [showSuccess, setShowSuccess] = useState(false);

  // When state.ok becomes true show modal and reset form
  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
      setShowSuccess(true);
    }
  }, [state.ok]);

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
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor="firstname"
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              First Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="middlename"
              name="middlename"
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor=""
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Middle Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="surname"
              name="surname"
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
              placeholder="" // Required for the floating label effect
            />
            <label
              htmlFor="surname"
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Last Name/ Surname
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              E-mail address
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Phone
            </label>
          </div>
          <div className="relative">
            <input
              type="datetime-local"
              id="reservation_date"
              name="reservation_date"
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
            />
            <label
              htmlFor="reservation_date"
              className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
            >
              Reservation Date & Time
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="subject"
            className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
          >
            Subject
          </label>
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none py-2 transition-colors"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-gray-200"
          >
            Message
          </label>
        </div>
        {/* Submit Button */}
        <div>
          <button
            className="flex h-14 w-64 items-center justify-center rounded-lg text-[#0C7769] text-center font-bold leading-9 tracking-[-0.01em] bg-white"
            disabled={pending}
            type="submit"
          >
            {pending ? (
              <div className="flex items-center gap-2">
                <span>Sending</span>
                <LoadingSpinner size="sm" />
              </div>
            ) : (
              "Schedule Consultation"
            )}
          </button>
          {state.error && (
            <p className="text-sm text-red-400" role="alert">
              {state.error}
            </p>
          )}
        </div>
      </form>
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl animate-[fadeIn_.25s_ease] relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="mb-2 text-xl font-semibold text-[#141414]">
              Consultation Scheduled
            </h2>
            <p className="mb-4 text-sm text-[#141414]">
              We look forward to meeting you soon.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowSuccess(false)}
                className="rounded-lg bg-[#0C7769] px-4 py-2 text-sm font-medium text-white hover:bg-[#0a5e54] focus:outline-none focus:ring-2 focus:ring-[#0C7769]/50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
