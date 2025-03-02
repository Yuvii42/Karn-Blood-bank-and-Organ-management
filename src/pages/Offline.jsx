import { FaMapMarkedAlt, FaUsers, FaHandshake, FaCalendarAlt } from "react-icons/fa";

const Offline = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Offline Donor Network</h1>
        <p className="text-gray-600 mt-3">
          "Karn" is committed to **helping people connect** even when online access is limited.  
          Find **offline donation camps, local volunteers, and emergency blood requests**.
        </p>
      </div>

      {/* Offline Impact Sections */}
      <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaMapMarkedAlt className="text-blue-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Local Donation Camps</h2>
          <p className="text-gray-600 mt-2">
            Find **verified blood donation drives** in your city and contribute **without the need for the internet**.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUsers className="text-green-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Community Support</h2>
          <p className="text-gray-600 mt-2">
            Connect with **nearby volunteers, hospitals, and NGOs** to assist in urgent medical needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaHandshake className="text-yellow-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Emergency Assistance</h2>
          <p className="text-gray-600 mt-2">
            Get real-time **SMS alerts for urgent blood requirements** and offline coordination.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaCalendarAlt className="text-red-500 text-4xl mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Offline Events</h2>
          <p className="text-gray-600 mt-2">
            Register for **blood donation camps, organ donation drives**, and awareness programs.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold flex justify-center items-center">
          Find a Nearby Donation Event
        </h2>
        <p className="mt-2">Join "Karn's" offline network and save lives in your local community.</p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Search Now
        </button>
      </div>
    </div>
  );
};

export default Offline;
