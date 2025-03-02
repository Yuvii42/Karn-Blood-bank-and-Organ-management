import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Aryan Mehta",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Sanya Kapoor",
    role: "Chief Medical Advisor",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Rohan Das",
    role: "Technology Lead",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Neha Sharma",
    role: "Marketing Head",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Meet Our Team</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Dedicated professionals committed to **saving lives and making a difference**.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-red-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500 transition" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 text-2xl hover:text-blue-400 transition" />
              </a>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope className="text-gray-600 text-2xl hover:text-gray-400 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Join Our Mission</h2>
        <p className="mt-2">
          Be part of a movement **saving lives and spreading hope**.
        </p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Team;
