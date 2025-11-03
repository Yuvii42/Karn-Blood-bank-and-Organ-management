// const Collaborators = () => {
//     const organizations = ['NCC', 'NSS', 'YMCA']
  
//     return (
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-12">Our Collaborators</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {organizations.map((org) => (
//               <div 
//                 key={org} 
//                 className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center"
//               >
//                 <h3 className="text-2xl font-bold text-gray-400">{org}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }
  
//   export default Collaborators

const Collaborators = () => {
  const organizations = ['NCC', 'NSS', 'IRCS', 'YMCA', 'Lions Club', 'Rotary Club'];

return (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-[#8B1538] mb-12 drop-shadow-md">
        Our Collaborators
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="relative bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-8 flex items-center justify-center
              transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_50px_rgba(139,21,56,0.3)]"
          >
            <h3 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-[#8B1538]">
              {org}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default Collaborators;
