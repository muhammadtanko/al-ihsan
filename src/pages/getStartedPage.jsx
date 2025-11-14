import React, { useState } from "react";
import { ArrowRight, User, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetStartedPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { userData: form } });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-[#2E324D] mb-6 text-center">
          Get Started With Your Health Plan
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Enter your details below to begin your enrollment
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="font-semibold text-[#2E324D]">Full Name</label>
            <div className="flex items-center gap-3 mt-2 bg-gray-100 rounded-lg p-3">
              <User className="text-[#A8D235]" />
              <input
                type="text"
                name="fullName"
                className="bg-transparent w-full outline-none"
                placeholder="Enter your full name"
                required
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold text-[#2E324D]">Phone Number</label>
            <div className="flex items-center gap-3 mt-2 bg-gray-100 rounded-lg p-3">
              <Phone className="text-[#A8D235]" />
              <input
                type="tel"
                name="phone"
                className="bg-transparent w-full outline-none"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-[#2E324D]">Email Address</label>
            <div className="flex items-center gap-3 mt-2 bg-gray-100 rounded-lg p-3">
              <Mail className="text-[#A8D235]" />
              <input
                type="email"
                name="email"
                className="bg-transparent w-full outline-none"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#A8D235] text-[#2E324D] w-full py-4 mt-4 rounded-lg font-bold text-lg hover:bg-[#92bb2d] transition-all flex items-center justify-center gap-2"
          >
            Proceed to Payment <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedPage;
