import { useState } from "react";
import { Link } from "react-router-dom";

const FindBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const donors = [
    { name: "Rahul Sharma", bloodGroup: "O+", location: "Delhi", contact: "9876543210" },
    { name: "Priya Verma", bloodGroup: "A+", location: "Mumbai", contact: "9876543211" },
    { name: "Amit Singh", bloodGroup: "B-", location: "Bangalore", contact: "9876543212" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <div className="bg-red-100 rounded-xl p-10 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Find Blood</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Search for blood donors in your area and save lives in emergencies.
        </p>
      </div>

      {/* Search Section */}
      <div className="mt-10 bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-4 justify-center">
        <select 
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <input 
          type="text" 
          placeholder="Enter Location"
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button 
          className="w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Available Donors */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Available Donors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donors.map((donor, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gray-800">{donor.name}</h3>
              <p className="text-lg text-gray-600">Blood Group: <span className="text-red-600 font-semibold">{donor.bloodGroup}</span></p>
              <p className="text-lg text-gray-600">Location: {donor.location}</p>
              <a 
                href={`tel:${donor.contact}`} 
                className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Become a Donor</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Help save lives by registering as a blood donor. Your donation can make a difference!
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

export default FindBlood;
