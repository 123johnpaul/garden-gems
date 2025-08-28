"use client";
import { useState, useEffect, useRef, useActionState } from "react";

import { submitNewsletterForm } from "@/utils/actions";
import LoadingSpinner from "./loadingSpinner";

const initialState = { ok: false, error: null };
export default function Newsletter() {
  const formRef = useRef(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [state, formAction, pending] = useActionState(
    submitNewsletterForm,
    initialState
  );

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
      setShowSuccessMessage(true);
    }
  }, [state.ok]);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 text-center border-b border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Newsletter</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Be the first one to know about discounts, offers and events weekly in
        your mailbox. Unsubscribe whenever you like with one click.
      </p>

      {state.error && !pending && !showSuccessMessage && (
        <p className="text-red-400 mb-4" role="alert">
          {state.error}
        </p>
      )}
      {showSuccessMessage ? (
        <p className="text-lg mb-4" role="status">
          Thank you for subscribing!
        </p>
      ) : (
        <form
          action={formAction}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          ref={formRef}
        >
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="bg-black border border-gray-600 text-white p-3 rounded-md w-full sm:w-auto flex-grow focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button className="bg-[#0C7769] hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto transition duration-300">
            {pending ? (
              <div className="flex items-center gap-2">
                <span>Sending</span>
                <LoadingSpinner size="sm" />
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
