import { useState } from "react";
import { Link } from "react-router-dom";

const FindBlood = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const donors = [
    { name: "Rahul Sharma", bloodGroup: "O+", location: "Delhi", contact: "9876543210" },
    { name: "Priya Verma", bloodGroup: "A+", location: "Mumbai", contact: "9876543211" },
    { name: "Amit Singh", bloodGroup: "B-", location: "Bangalore", contact: "9876543212" },
    { name: "Neha Patel", bloodGroup: "AB+", location: "Pune", contact: "9876543213" },
    { name: "Ravi Kumar", bloodGroup: "O-", location: "Chennai", contact: "9876543214" },
    { name: "Sanya Mehta", bloodGroup: "B+", location: "Kolkata", contact: "9876543215" },
    { name: "Anil Joshi", bloodGroup: "A-", location: "Delhi", contact: "9876543216" },
    { name: "Pooja Reddy", bloodGroup: "AB-", location: "Hyderabad", contact: "9876543217" },
    { name: "Vikram Singh", bloodGroup: "O+", location: "Bangalore", contact: "9876543218" },
    { name: "Arjun Mehra", bloodGroup: "A+", location: "Delhi", contact: "9876543219" },
  { name: "Kavya Sharma", bloodGroup: "O-", location: "Mumbai", contact: "9876543220" },
  { name: "Rohan Gupta", bloodGroup: "B+", location: "Bangalore", contact: "9876543221" },
  { name: "Simran Kaur", bloodGroup: "AB+", location: "Pune", contact: "9876543222" },
  { name: "Manish Verma", bloodGroup: "A-", location: "Chennai", contact: "9876543223" },
  { name: "Tanya Singh", bloodGroup: "O+", location: "Kolkata", contact: "9876543224" },
  { name: "Vikas Joshi", bloodGroup: "B-", location: "Hyderabad", contact: "9876543225" },
  { name: "Neha Kapoor", bloodGroup: "AB-", location: "Delhi", contact: "9876543226" },
  { name: "Ankit Reddy", bloodGroup: "O+", location: "Mumbai", contact: "9876543227" },
  { name: "Pooja Sharma", bloodGroup: "A+", location: "Bangalore", contact: "9876543228" },
  { name: "Rahul Verma", bloodGroup: "B+", location: "Pune", contact: "9876543229" },
  { name: "Sakshi Mehta", bloodGroup: "AB+", location: "Chennai", contact: "9876543230" },
  { name: "Aditya Singh", bloodGroup: "A-", location: "Kolkata", contact: "9876543231" },
  { name: "Isha Patel", bloodGroup: "O-", location: "Hyderabad", contact: "9876543232" },
  { name: "Ritesh Kumar", bloodGroup: "B+", location: "Delhi", contact: "9876543233" },
  { name: "Shreya Reddy", bloodGroup: "AB-", location: "Mumbai", contact: "9876543234" },
  { name: "Karan Mehra", bloodGroup: "O+", location: "Bangalore", contact: "9876543235" },
  { name: "Mansi Sharma", bloodGroup: "A+", location: "Pune", contact: "9876543236" },
  { name: "Vivek Gupta", bloodGroup: "B-", location: "Chennai", contact: "9876543237" },
  { name: "Priyanka Kaur", bloodGroup: "AB+", location: "Kolkata", contact: "9876543238" },
  { name: "Siddharth Joshi", bloodGroup: "A-", location: "Hyderabad", contact: "9876543239" },
  { name: "Radhika Patel", bloodGroup: "O+", location: "Delhi", contact: "9876543240" },
  { name: "Aman Verma", bloodGroup: "B+", location: "Mumbai", contact: "9876543241" },
  { name: "Sneha Singh", bloodGroup: "AB-", location: "Bangalore", contact: "9876543242" },
  { name: "Raghav Sharma", bloodGroup: "O-", location: "Pune", contact: "9876543243" },
  { name: "Divya Mehta", bloodGroup: "A+", location: "Chennai", contact: "9876543244" },
  { name: "Harsh Gupta", bloodGroup: "B+", location: "Kolkata", contact: "9876543245" },
  { name: "Ananya Reddy", bloodGroup: "AB+", location: "Hyderabad", contact: "9876543246" },
  { name: "Kunal Joshi", bloodGroup: "A-", location: "Delhi", contact: "9876543247" },
  { name: "Megha Sharma", bloodGroup: "O+", location: "Mumbai", contact: "9876543248" },
  { name: "Rohit Verma", bloodGroup: "B-", location: "Bangalore", contact: "9876543249" },
  { name: "Tanvi Singh", bloodGroup: "AB-", location: "Pune", contact: "9876543250" },
  ];

  // Filter donors based on search criteria
  const filteredDonors = donors.filter(
    (donor) =>
      (bloodGroup ? donor.bloodGroup === bloodGroup : true) &&
      (location ? donor.location.toLowerCase().includes(location.toLowerCase()) : true)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-200 to-red-100 rounded-2xl p-10 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4 animate-fadeIn">
          Find Blood
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Search for blood donors in your area and save lives in emergencies.
        </p>
      </div>

      {/* Search Section */}
      <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-4 justify-center items-center transition-all duration-300">
        <select 
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
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
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button 
          className="w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-md"
        >
          Search
        </button>
      </div>

      {/* Available Donors */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Available Donors</h2>
        {filteredDonors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredDonors.map((donor, index) => (
              <div 
                key={index} 
                className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-gray-800">{donor.name}</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Blood Group: <span className="text-red-600 font-semibold">{donor.bloodGroup}</span>
                </p>
                <p className="text-lg text-gray-600 mt-1">Location: {donor.location}</p>
                <a 
                  href={`tel:${donor.contact}`} 
                  className="mt-4 inline-block px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
                >
                  Contact
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6 text-lg">
            No donors found for the selected criteria.
          </p>
        )}
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
