import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, CreditCard } from "lucide-react";

const PaymentPage = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#2E324D] text-center mb-4">
          Complete Your Payment
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Hello <span className="font-semibold">{userData?.fullName}</span>, you're one step away from activating your plan.
        </p>

        <div className="bg-[#A8D235] bg-opacity-10 border-l-4 border-[#A8D235] p-4 rounded-lg mb-6">
          <h3 className="font-bold text-[#2E324D]">Enrollment Summary</h3>
          <p className="text-gray-700 mt-2">Plan: Basic Health Coverage</p>
          <p className="text-gray-700">Amount: ₦25,000 / year</p>
        </div>

        <button className="w-full bg-[#EC3338] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#d62d32] transition-all">
          <CreditCard /> Pay Now
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Secured Payment • Encrypted • Instant Activation
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
