import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-red-100 rounded-xl p-10 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">About Karn</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Karn is a lifesaving platform that connects blood and organ donors with those in urgent need. 
          Our mission is to ensure no request for help goes unheard. 
        </p>
      </div>

      {/* Our Mission */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We strive to bridge the gap between donors and recipients by providing a seamless, 
          secure, and fast platform for life-saving connections. Every drop counts, every organ matters.
        </p>
      </div>

      {/* Impact Statistics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-4xl font-bold text-red-600">10,000+</h3>
          <p className="text-gray-600">Successful Donations</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-4xl font-bold text-red-600">50,000+</h3>
          <p className="text-gray-600">Registered Donors</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-4xl font-bold text-red-600">24/7</h3>
          <p className="text-gray-600">Emergency Support</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Be a Lifesaver</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Join our community and make a difference. Your generosity can save lives. 
        </p>
        <Link 
          to="/register" 
          className="px-6 py-3 text-lg font-semibold bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default About;
