import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Have questions? **We're here to help**.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-500 transition w-full">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="max-w-3xl mx-auto mt-10 flex flex-col items-center space-y-4 text-center">
        <p className="flex items-center space-x-2">
          <FaPhone className="text-red-600" /> <span>+91 98765 43210</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaEnvelope className="text-red-600" /> <span>support@karn.com</span>
        </p>
        <p className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-600" /> <span>Mumbai, India</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
