import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import { FiUser, FiPhone, FiMail, FiHome, FiCalendar } from "react-icons/fi";
import { FaQrcode } from "react-icons/fa";

const Register = () => {
  const [userData, setUserData] = useState({
    id: "",
    fullName: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: ""
  });

  const [qrCodeData, setQrCodeData] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserData(parsedUser);
      setQrCodeData(parsedUser.id);
    }
  }, []);

  const handleRegister = () => {
    const newUser = { ...userData, id: uuidv4() };
    localStorage.setItem("userData", JSON.stringify(newUser));
    setUserData(newUser);
    setQrCodeData(newUser.id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-lg p-8 backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Blood Donation Registration</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border p-3 rounded-lg shadow-sm">
            <FiUser className="text-blue-500 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none"
              value={userData.fullName}
              onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
            />
          </div>

          <div className="flex items-center border p-3 rounded-lg shadow-sm">
            <FiCalendar className="text-blue-500 mr-3" />
            <input
              type="date"
              className="w-full outline-none"
              value={userData.dob}
              onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
            />
          </div>

          <div className="flex items-center border p-3 rounded-lg shadow-sm">
            <FiHome className="text-blue-500 mr-3" />
            <input
              type="text"
              placeholder="Address"
              className="w-full outline-none"
              value={userData.address}
              onChange={(e) => setUserData({ ...userData, address: e.target.value })}
            />
          </div>

          <div className="flex items-center border p-3 rounded-lg shadow-sm">
            <FiPhone className="text-blue-500 mr-3" />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full outline-none"
              value={userData.phone}
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            />
          </div>

          <div className="flex items-center border p-3 rounded-lg shadow-sm">
            <FiMail className="text-blue-500 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
          </div>
        </div>

        {!qrCodeData && (
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition"
          >
            Generate QR Code
          </button>
        )}

        {qrCodeData && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex justify-center items-center gap-2">
              <FaQrcode className="text-blue-500" /> Your QR Code
            </h2>
            <div className="flex justify-center">
              <QRCodeCanvas value={qrCodeData} size={200} className="shadow-lg rounded-lg p-2 border border-gray-300" />
            </div>
            <p className="mt-2 text-sm text-gray-500">Show this QR code to verify your identity.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register; 
