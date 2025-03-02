// import { useState } from "react";
// import QrScanner from "react-qr-scanner";
// import { QRCodeCanvas } from "qrcode.react";

// const Scanner = () => {
//   const [scannedData, setScannedData] = useState(null);

//   const handleScan = (data) => {
//     if (data) {
//       setScannedData(JSON.parse(data.text)); // Convert QR data back to object
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold text-red-600 mb-6">Scan QR Code</h1>
//       <p className="text-lg text-gray-700 mb-4">Scan your QR Code for instant verification.</p>
      
//       <div className="bg-white shadow-lg rounded-lg p-6 inline-block">
//         <QRCodeCanvas
//           delay={300}
//           onError={handleError}
//           onScan={handleScan}
//           style={{ width: "100%" }}
//         />
//       </div>

//       {scannedData && (
//         <div className="mt-6 bg-green-100 p-4 rounded-lg">
//           <h2 className="text-2xl font-bold text-green-600">Verification Successful!</h2>
//           <p className="text-gray-800">Name: {scannedData.name}</p>
//           <p className="text-gray-800">Email: {scannedData.email}</p>
//           <p className="text-gray-800">Phone: {scannedData.phone}</p>
//           <p className="text-gray-800">Blood Group: {scannedData.bloodGroup}</p>
//           <p className="text-gray-800">Location: {scannedData.location}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Scanner;


import { useState } from "react";
import QrScanner from "react-qr-scanner";

const ScanQR = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  const handleScan = (data) => {
    if (data) {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser.id === data.text) {
          setUserDetails(parsedUser);
        } else {
          setError("Invalid QR Code. User not found.");
        }
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError("Error scanning QR code.");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Scan QR Code</h1>

      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex justify-center items-center">
        <QrScanner delay={300} onScan={handleScan} onError={handleError} className="w-full h-64" />
      </div>

      {userDetails ? (
        <div className="mt-6 p-4 bg-gray-100 shadow rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">User Details</h2>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Blood Group:</strong> {userDetails.bloodGroup}</p>
          <p><strong>City:</strong> {userDetails.city}</p>
        </div>
      ) : (
        <p className="mt-4 text-red-500 text-center">{error}</p>
      )}
    </div>
  );
};

export default ScanQR;
