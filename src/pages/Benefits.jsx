import { FaHeartbeat, FaHandsHelping, FaSmile, FaUsers, FaShieldAlt, FaGift } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Benefits of Donating</h1>
        <p className="text-gray-600 mt-3 text-lg">
          By donating blood or organs, you **not only save lives** but also **experience personal, social, and health benefits**.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Health Benefits */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-red-500 text-4xl mb-3">
            <FaHeartbeat />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Health Improvement</h3>
          <p className="text-gray-600 mt-2">
            Donating **stimulates blood cell production**, improves heart health, and reduces harmful iron stores.
          </p>
        </div>

        {/* Emotional Benefits */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-yellow-500 text-4xl mb-3">
            <FaSmile />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Emotional Satisfaction</h3>
          <p className="text-gray-600 mt-2">
            Helping others gives a sense of **fulfillment, happiness, and purpose**.
          </p>
        </div>

        {/* Social Impact */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-blue-500 text-4xl mb-3">
            <FaUsers />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Community Support</h3>
          <p className="text-gray-600 mt-2">
            Your donation **strengthens society, builds trust, and inspires more people to contribute**.
          </p>
        </div>

        {/* Lifesaving Gift */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-green-500 text-4xl mb-3">
            <FaGift />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">The Gift of Life</h3>
          <p className="text-gray-600 mt-2">
            One donation **can save multiple lives** and create a lasting impact.
          </p>
        </div>

        {/* Immunity Boost */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-purple-500 text-4xl mb-3">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Immunity Boost</h3>
          <p className="text-gray-600 mt-2">
            Regular donation **keeps blood flow healthy and may lower cancer risks**.
          </p>
        </div>

        {/* Humanity & Kindness */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-orange-500 text-4xl mb-3">
            <FaHandsHelping />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Acts of Kindness</h3>
          <p className="text-gray-600 mt-2">
            You inspire kindness and **bring hope to patients and families in need**.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-red-600">Every Drop Counts</h2>
        <p className="text-gray-600 mt-3">
          Every **2 seconds**, someone needs blood. **1 organ donor** can save **up to 8 lives**.  
          Your **contribution makes a real difference**.
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Be a Hero – Donate Today</h2>
        <p className="mt-2">
          Join our mission to **save lives, inspire others, and make a lasting impact**.
        </p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Become a Donor
        </button>
      </div>
    </div>
  );
};

export default Benefits;
