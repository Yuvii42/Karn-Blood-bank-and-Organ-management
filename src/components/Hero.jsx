

import { FaTint, FaHeartbeat } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#e94072]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Donate Blood, Save a Life!  
        </h1>
        
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Every drop of blood and every organ donated can be a second chance at life for someone in need. 
          Join <span className="font-semibold text-red-300">Karn</span> – the platform connecting donors with hospitals and patients in urgent need.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-[#8B1538] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            <FaTint className="text-red-600" />
            Get Blood Now
          </button>

          <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#8B1538] transition">
            <FaHeartbeat />
            Become a Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
