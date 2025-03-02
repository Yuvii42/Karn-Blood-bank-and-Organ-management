// import { useState, useEffect } from "react";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       setUser(JSON.parse(loggedInUser));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full border border-gray-300">
//         <h1 className="text-3xl font-bold text-red-600 text-center mb-4">Your Profile</h1>

//         {user ? (
//           <div className="space-y-4 text-gray-700">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Phone:</strong> {user.phone}</p>
//             <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
//             <p><strong>City:</strong> {user.city}</p>
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">No user data found. Please log in.</p>
//         )}

//         <button
//           className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
//           onClick={() => {
//             localStorage.removeItem("loggedInUser");
//             window.location.href = "/login";
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaTint, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full border border-gray-300 transform hover:scale-105 transition duration-300">
        
        {/* Profile Avatar */}
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-red-500 text-6xl mb-4" />
          <h1 className="text-3xl font-bold text-red-600 text-center">Your Profile</h1>
        </div>

        {/* User Info */}
        {user ? (
          <div className="space-y-4 text-gray-700 mt-6">
            <p className="flex items-center"><FaUserCircle className="text-red-500 mr-2" /><strong>Name:</strong> {user.name}</p>
            <p className="flex items-center"><FaEnvelope className="text-blue-500 mr-2" /><strong>Email:</strong> {user.email}</p>
            <p className="flex items-center"><FaPhone className="text-green-500 mr-2" /><strong>Phone:</strong> {user.phone}</p>
            <p className="flex items-center"><FaTint className="text-red-400 mr-2" /><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p className="flex items-center"><FaMapMarkerAlt className="text-purple-500 mr-2" /><strong>City:</strong> {user.city}</p>
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">No user data found. Please log in.</p>
        )}

        {/* Logout Button */}
        <button
          className="mt-6 w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/login";
          }}
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

