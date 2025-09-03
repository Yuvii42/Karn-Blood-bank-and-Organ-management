// import { Link } from 'react-router-dom'
// import Logo from '../assets/logos.png'

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
//       <div className="flex items-center gap-2">
//         <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-10 h-10" />
//       </div>
//       <div className="hidden md:flex items-center gap-8">
//         <Link to="/" className="text-primary border-b-2 border-primary">
//           Home
//         </Link>
//         <Link to="/about" className="text-gray-600 hover:text-primary">
//           About Us
//         </Link>
//         <Link to="/find-blood" className="text-gray-600 hover:text-primary">
//           Find Blood
//         </Link>
//         <Link to="/register" className="text-gray-600 hover:text-primary">
//           Register Now
//         </Link>
//       </div>
//       <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
//         Log In
//       </button>
//     </nav>
//   )
// }

// export default Navbar


import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logos.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo || "/placeholder.svg"} alt="Logo" className="w-12 h-12" />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center gap-8">
        <NavLink to="/" current={location.pathname}>Home</NavLink>
        <NavLink to="/about" current={location.pathname}>About Us</NavLink>
        <NavLink to="/find-blood" current={location.pathname}>Find Blood</NavLink>
        <NavLink to="/register" current={location.pathname}>Register Now</NavLink>
        <NavLink to="/skincare" current={location.pathname}>Skin Care</NavLink>
      </div>

      {/* Login Button */}
      <Link 
        to="/login" 
        className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Log In
      </Link>
    </nav>
  );
};

const NavLink = ({ to, children, current }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`${
        isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
      } font-medium`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
