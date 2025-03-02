import { FaHeartbeat, FaUsers, FaGlobe, FaHandHoldingHeart } from "react-icons/fa";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Our Story</h1>
        <p className="text-gray-600 mt-3 text-lg">
          "Karn" was founded with a simple yet powerful mission –  
          **to bridge the gap between donors and those in need of life-saving blood and organs**.
        </p>
      </div>

      {/* Timeline / Journey */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Journey</h2>
        <div className="mt-6 space-y-8">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full">
              <FaHeartbeat />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Founded in 2024</h3>
              <p className="text-gray-600">
                A small idea transformed into a movement to **connect donors with recipients**.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full">
              <FaUsers />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">10,000+ Donors Registered</h3>
              <p className="text-gray-600">
                With the support of volunteers and hospitals, we **built a strong donor network**.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <FaGlobe />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Expanded Nationwide</h3>
              <p className="text-gray-600">
                "Karn" is now active **across multiple cities, impacting thousands of lives**.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-full">
              <FaHandHoldingHeart />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">Future Vision</h3>
              <p className="text-gray-600">
                We aim to **reach more people, leverage AI-driven donor matching**,  
                and **expand globally to save even more lives**.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-red-600">Our Mission & Vision</h2>
        <p className="text-gray-600 mt-3">
          "Karn" envisions a **world where no life is lost due to a lack of donors**.  
          We strive to **build an efficient, transparent, and compassionate donation system**.
        </p>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold flex justify-center items-center">
          Join Us & Save Lives
        </h2>
        <p className="mt-2">Be a part of our story by **registering as a donor or volunteering today**.</p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Become a Donor
        </button>
      </div>
    </div>
  );
};

export default OurStory;
