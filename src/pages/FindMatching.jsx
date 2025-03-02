import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaTint, FaUserMd } from "react-icons/fa";

const FindMatching = () => {
  const [search, setSearch] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  // Sample Donor Data
  const donors = [
    { id: 1, name: "Rahul Sharma", bloodGroup: "O+", organ: "Kidney", location: "Mumbai, India" },
    { id: 2, name: "Ananya Singh", bloodGroup: "A+", organ: "Liver", location: "Delhi, India" },
    { id: 3, name: "Vikram Patel", bloodGroup: "B-", organ: "Heart", location: "Ahmedabad, India" },
  ];

  // Filter donors based on search input
  const filteredDonors = donors.filter((donor) =>
    donor.name.toLowerCase().includes(search.toLowerCase()) ||
    donor.bloodGroup.includes(bloodGroup) ||
    donor.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-600">Find a Matching Donor</h1>

        {/* Search & Filters */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Blood Group Filter */}
          <div className="relative">
            <FaTint className="absolute top-3 left-3 text-gray-500" />
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        </div>

        {/* Donor List */}
        <div className="mt-6">
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor) => (
              <div key={donor.id} className="bg-gray-50 p-4 rounded-lg shadow mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{donor.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <FaTint className="text-red-500 mr-2" /> {donor.bloodGroup} | <FaUserMd className="text-blue-500 ml-2 mr-2" /> {donor.organ}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="text-green-500 mr-2" /> {donor.location}
                  </p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Contact
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">No matching donors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindMatching;
