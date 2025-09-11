"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { verifyPayment } from '@/utils/api';
import LoadingSpinner from '@/_components/loadingSpinner';



export default function VerifyConsultationPayment() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handlePaymentVerification = async () => {
      try {
        // Create URLSearchParams from Next.js searchParams
        const params = new URLSearchParams();
        searchParams.forEach((value, key) => {
          params.append(key, value);
        });
        
        const data = await verifyPayment(`/consultation/verify?${params.toString()}`);
        console.log(data)
        
        if (data.status === 201 && data.message) {
          setStatus('success');
          setMessage(data.message);
          // Redirect to home page after 3 seconds
          setTimeout(() => router.push('/'), 3000);
        } else {
          setStatus('error');
          setMessage(data.error || 'Payment verification failed');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setStatus('error');
        setMessage('Network error occurred');
      }
    };

    // Only run if we have search params (means we came from payment)
    if (searchParams.toString()) {
      handlePaymentVerification();
    } else {
      setStatus('error');
      setMessage('No payment reference found');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {status === 'verifying' && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-center space-y-4">
              <LoadingSpinner />
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Processing Payment
                </h1>
                <p className="text-gray-600">
                  We&apos;re confirming your payment with Paystack. This usually takes a few seconds.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {status === 'success' && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Consultation Booked!
                </h1>
                <p className="text-gray-600 mb-4">
                  Your payment was successful and we&apos;ve sent you a confirmation email with all the details.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                  What&apos;s next? We&apos;ll contact you within 24 hours to confirm your consultation time.
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => router.push('/')}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-all duration-200"
                >
                  Back to Garden Gems
                </button>
                <p className="text-sm text-gray-500">
                  Automatically redirecting in 3 seconds...
                </p>
              </div>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Payment Issue
                </h1>
                <p className="text-gray-600 mb-4">
                  {message === 'No payment reference found' 
                    ? "It looks like you didn't complete the payment process. No worries, you can try booking again."
                    : "There was a problem confirming your payment at our end. Don't worry. If money was deducted, it will be refunded within 24 hours."
                  }
                </p>
                {message !== 'No payment reference found' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-800">
                    <strong>Error:</strong> {message}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => router.push('/schedule-consultation')}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
                >
                  Book Consultation Again
                </button>
                <button 
                  onClick={() => router.push('/')}
                  className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}