// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [userId, setUserId] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const storedUser = localStorage.getItem("userData");

//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       if (userId === parsedUser.id) {
//         navigate("/dashboard"); // Redirect to dashboard
//       } else {
//         setError("Invalid QR Code or User ID.");
//       }
//     } else {
//       setError("No registered user found. Please register first.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-500 to-teal-600">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-300">
//         <h1 className="text-3xl font-extrabold text-red-600 text-center mb-4">Welcome to Karn</h1>
//         <p className="text-gray-600 text-sm text-center mb-6">
//           Enter your **User ID** or scan your **QR Code** to continue.
//         </p>

//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter your User ID"
//             className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
//           >
//             Login
//           </button>
//         </div>

//         <p className="text-center text-gray-600 text-sm mt-6">
//           Don't have an account?{" "}
//           <a href="/register" className="text-teal-700 font-semibold underline hover:text-teal-800">
//             Register Now
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (userId === parsedUser.id) {
        localStorage.setItem("loggedInUser", JSON.stringify(parsedUser)); // Store user details
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid QR Code or User ID.");
      }
    } else {
      setError("No registered user found. Please register first.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-500 to-teal-600">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-300">
        <h1 className="text-3xl font-extrabold text-red-600 text-center mb-4">Welcome to Karn</h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          Enter your **User ID** or scan your **QR Code** to continue.
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your User ID"
            className="w-full p-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-teal-700 font-semibold underline hover:text-teal-800">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

