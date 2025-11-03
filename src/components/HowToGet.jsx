// const HowToGet = () => {
//     const steps = [
//       { id: 1, text: 'Register & Log In – Sign up or log into your account to request blood.' },
//       { id: 2, text: 'Submit a Request – Provide details like blood group, location, urgency, and hospital details' },
//       { id: 3, text: 'Find a Donor – Our system connects you with available donors nearby.' },
//       { id: 4, text: 'Contact & Coordinate – Reach out to donors directly or let us assist in scheduling the donation' },
//       { id: 5, text: 'Receive Blood & Save a Life – Complete the donation process at the nearest blood bank or hospital.' },
//       { id: 6, text: ' In emergencies, contact local blood banks or hospitals for immediate assistance.' },
//     ]
  
//     return (
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-12">How to get Blood?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
//               {/* <img 
//                 // src="/heartbeat-line.svg" 
//                 alt="Heartbeat line" 
//                 className="w-full"
//               /> */}
//             </div>
//             {steps.map((step) => (
//               <div 
//                 key={step.id} 
//                 className="bg-white rounded-lg shadow-lg p-8 relative z-10"
//               >
//                 <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mb-4">
//                   {step.id}
//                 </div>
//                 <p className="text-gray-600">{step.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }
  
//   export default HowToGet

import { FaCheckCircle } from "react-icons/fa";

const HowToGet = () => {
  const steps = [
    { id: 1, text: 'Register & Log In – Sign up or log into your account to request blood.' },
    { id: 2, text: 'Submit a Request – Provide details like blood group, location, urgency, and hospital details.' },
    { id: 3, text: 'Find a Donor – Our system connects you with available donors nearby.' },
    { id: 4, text: 'Contact & Coordinate – Reach out to donors directly or let us assist in scheduling the donation.' },
    { id: 5, text: 'Receive Blood & Save a Life – Complete the donation process at the nearest blood bank or hospital.' },
    { id: 6, text: 'In emergencies, contact local blood banks or hospitals for immediate assistance.' },
  ];

return (
  <section className="py-16 bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-[#8B1538] mb-12 drop-shadow-md">
        How to Get Blood?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center 
              transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_10px_50px_rgba(139,21,56,0.3)] hover:bg-[#8B1538]/10"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-[#8B1538] text-white text-2xl font-bold rounded-full shadow-lg mb-4
              transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
              {step.id}
            </div>
            <p className="text-gray-800 font-medium leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


};

export default HowToGet;
