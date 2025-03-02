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
  const organizations = ['NCC', 'NSS', 'YMCA'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#8B1538] mb-12">Our Collaborators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-xl p-6 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-700">{org}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
