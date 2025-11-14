import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What does Al-Ihsan Integrated Health Services offer?",
    answer:
      "We provide affordable and accessible health insurance plans for individuals, families, organizations, and communities."
  },
  {
    question: "How can I enroll?",
    answer:
      "You can enroll by filling out the Get Started form and completing your payment online. After payment, your plan will be activated immediately."
  },
  {
    question: "Do you provide emergency support?",
    answer:
      "Yes, we offer 24/7 emergency support services and claims assistance."
  },
  {
    question: "Can organizations register staff members?",
    answer:
      "Yes, corporate bodies can register teams and get custom health plans designed to fit organizational needs."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E324D] text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-[#A8D235] mx-auto mb-12"></div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="font-semibold text-lg text-[#2E324D]">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-[#A8D235]" />
                ) : (
                  <ChevronDown className="text-[#A8D235]" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
