import { FaPalette, FaHeart, FaGlobe, FaUsers } from "react-icons/fa";

const Branding = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Our Branding Identity</h1>
        <p className="text-gray-600 mt-3">
          "Karn" is more than just a platform—it's a movement. Our branding reflects our mission to 
          **save lives and connect donors with those in need**.
        </p>
      </div>

      {/* Branding Values */}
      <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHeart className="text-red-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Compassion & Care</h2>
          <p className="text-gray-600 mt-2">
            We believe in **empathy, kindness, and community-driven support** to make a difference.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-blue-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Trust & Transparency</h2>
          <p className="text-gray-600 mt-2">
            We ensure **secure and authentic** donor-patient connections through verified processes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaGlobe className="text-green-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Global Impact</h2>
          <p className="text-gray-600 mt-2">
            Expanding the reach of **blood and organ donations** worldwide through technology.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaPalette className="text-purple-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Visual Identity</h2>
          <p className="text-gray-600 mt-2">
            Our design reflects **hope, life, and commitment to humanity**.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold flex justify-center items-center">
          Join Our Movement & Save Lives
        </h2>
        <p className="mt-2">Be a part of "Karn" and help build a better future.</p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Branding;
