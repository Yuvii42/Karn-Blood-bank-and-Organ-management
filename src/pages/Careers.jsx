const Careers = () => {
  const jobOpenings = [
    { title: "Medical Coordinator", location: "Mumbai, India", type: "Full-Time" },
    { title: "Frontend Developer", location: "Remote", type: "Part-Time" },
    { title: "Community Outreach Manager", location: "Delhi, India", type: "Full-Time" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Join Our Team</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Help us **save lives** by being a part of our dedicated team.
        </p>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto mt-10 space-y-6">
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-500">{job.location} • {job.type}</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Interested in Joining?</h2>
        <p className="mt-2">Email us at <strong>careers@karn.com</strong></p>
      </div>
    </div>
  );
};

export default Careers;
