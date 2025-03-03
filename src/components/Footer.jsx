import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/logos.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-10 h-10 mb-4" />
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 rounded px-3 py-2 flex-1"
              />
              <button className="bg-gray-700 px-3 py-2 rounded hover:bg-gray-600">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <div className="grid gap-2">
            <Link to="/find-matching" className="text-gray-400 hover:text-white">Find Matching</Link>
            <Link to="/campaigns" className="text-gray-400 hover:text-white">Campaigns</Link>
            <Link to="/branding" className="text-gray-400 hover:text-white">Branding</Link>
            <Link to="/offline" className="text-gray-400 hover:text-white">Offline</Link>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <div className="grid gap-2">
            <Link to="/our-story" className="text-gray-400 hover:text-white">Our Story</Link>
            <Link to="/benefits" className="text-gray-400 hover:text-white">Benefits</Link>
            <Link to="/team" className="text-gray-400 hover:text-white">Team</Link>
            <Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <div className="grid gap-2">
            <Link to="/faqs" className="text-gray-400 hover:text-white">FAQs</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to="https://x.com/" className="text-gray-400 hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link to="https://www.instagram.com/" className="text-gray-400 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
