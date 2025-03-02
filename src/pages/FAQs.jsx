import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { question: "How can I become a blood donor?", answer: "To become a donor, you must be healthy and above 18 years old. Sign up on our platform." },
  { question: "Is organ donation safe?", answer: "Yes, organ donation is a regulated process ensuring the donor’s safety." },
  { question: "Can I track my donation impact?", answer: "Yes, you can view how your donation has helped through our tracking system." },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Find answers to **common queries**.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
            <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
