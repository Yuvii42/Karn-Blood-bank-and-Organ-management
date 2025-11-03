// // import { useState, useEffect } from "react";
// // import { QRCodeCanvas } from "qrcode.react";
// // import { v4 as uuidv4 } from "uuid";
// // import { FiUser, FiPhone, FiMail, FiHome, FiCalendar } from "react-icons/fi";
// // import { FaQrcode } from "react-icons/fa";

// // const Register = () => {
// //   const [userData, setUserData] = useState({
// //     id: "",
// //     fullName: "",
// //     dob: "",
// //     address: "",
// //     phone: "",
// //     email: "",
// //   });

// //   const [qrCodeData, setQrCodeData] = useState("");

// //   useEffect(() => {
// //     const savedUser = localStorage.getItem("userData");
// //     if (savedUser) {
// //       const parsedUser = JSON.parse(savedUser);
// //       setUserData(parsedUser);
// //       setQrCodeData(parsedUser.id);
// //     }
// //   }, []);

// //   const handleRegister = () => {
// //     if (!userData.fullName || !userData.dob || !userData.phone || !userData.email || !userData.address) {
// //       alert("Please fill in all the fields.");
// //       return;
// //     }

// //     const newUser = { ...userData, id: uuidv4() };
// //     localStorage.setItem("userData", JSON.stringify(newUser));
// //     setUserData(newUser);
// //     setQrCodeData(newUser.id);
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
// //       <div className="w-full max-w-2xl bg-white shadow-2xl rounded-lg p-8 backdrop-blur-lg">
// //         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Blood Donation Registration</h1>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="flex items-center border p-3 rounded-lg shadow-sm bg-gray-50">
// //             <FiUser className="text-blue-500 mr-3" />
// //             <input
// //               type="text"
// //               placeholder="Full Name"
// //               className="w-full outline-none bg-transparent"
// //               value={userData.fullName}
// //               onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
// //             />
// //           </div>

// //           <div className="flex items-center border p-3 rounded-lg shadow-sm bg-gray-50">
// //             <FiCalendar className="text-blue-500 mr-3" />
// //             <input
// //               type="date"
// //               className="w-full outline-none bg-transparent"
// //               value={userData.dob}
// //               onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
// //             />
// //           </div>

// //           <div className="flex items-center border p-3 rounded-lg shadow-sm bg-gray-50">
// //             <FiHome className="text-blue-500 mr-3" />
// //             <input
// //               type="text"
// //               placeholder="Address"
// //               className="w-full outline-none bg-transparent"
// //               value={userData.address}
// //               onChange={(e) => setUserData({ ...userData, address: e.target.value })}
// //             />
// //           </div>

// //           <div className="flex items-center border p-3 rounded-lg shadow-sm bg-gray-50">
// //             <FiPhone className="text-blue-500 mr-3" />
// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               className="w-full outline-none bg-transparent"
// //               value={userData.phone}
// //               onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
// //             />
// //           </div>

// //           <div className="flex items-center border p-3 rounded-lg shadow-sm bg-gray-50">
// //             <FiMail className="text-blue-500 mr-3" />
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full outline-none bg-transparent"
// //               value={userData.email}
// //               onChange={(e) => setUserData({ ...userData, email: e.target.value })}
// //             />
// //           </div>
// //         </div>

// //         {!qrCodeData && (
// //           <button
// //             onClick={handleRegister}
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition"
// //           >
// //             Generate QR Code
// //           </button>
// //         )}

// //         {qrCodeData && (
// //           <div className="mt-6 text-center">
// //             <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex justify-center items-center gap-2">
// //               <FaQrcode className="text-blue-500" /> Your QR Code
// //             </h2>
// //             <div className="flex justify-center">
// //               <QRCodeCanvas value={qrCodeData} size={200} className="shadow-lg rounded-lg p-2 border border-gray-300" />
// //             </div>
// //             <p className="mt-2 text-sm text-gray-500">Show this QR code to verify your identity.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FiUser, FiPhone, FiMail, FiHome, FiCalendar } from "react-icons/fi";
import { FaQrcode } from "react-icons/fa";

const Register = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const [qrCodeData, setQrCodeData] = useState("");

  // Load saved user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserData(parsedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));
    // Generate QR code
    setQrCodeData(JSON.stringify(userData));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-white p-6">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 transition-all duration-500">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-10">
          Blood & Organ Donation Registration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FiUser className="text-red-500 mr-3 text-2xl" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 transition"
              value={userData.fullName}
              onChange={handleInputChange}
            />
          </div>

          {/* Date of Birth */}
          <div className="flex items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FiCalendar className="text-red-500 mr-3 text-2xl" />
            <input
              type="date"
              name="dob"
              className="w-full outline-none text-gray-700 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 transition"
              value={userData.dob}
              onChange={handleInputChange}
            />
          </div>

          {/* Address */}
          <div className="flex items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FiHome className="text-red-500 mr-3 text-2xl" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 transition"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <FiPhone className="text-red-500 mr-3 text-2xl" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 transition"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 md:col-span-2">
            <FiMail className="text-red-500 mr-3 text-2xl" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-red-200 rounded-lg px-3 py-2 transition"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Generate QR Code Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold mt-8 hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          Generate QR Code
        </button>

        {/* Display QR Code only after registration */}
        {qrCodeData && (
          <div className="mt-10 text-center animate-fadeIn">
            <h2 className="text-2xl font-semibold text-gray-700 mb-5 flex justify-center items-center gap-2">
              <FaQrcode className="text-red-500" /> Your QR Code
            </h2>
            <div className="flex justify-center">
              <QRCodeCanvas
                value={qrCodeData}
                size={220}
                className="shadow-xl rounded-xl p-2 border border-gray-300"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Show this QR code to verify your identity.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
