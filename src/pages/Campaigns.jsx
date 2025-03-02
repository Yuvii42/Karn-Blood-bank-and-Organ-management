import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHeart } from "react-icons/fa";

const Campaigns = () => {
  // Sample Campaign Data
  const campaigns = [
    {
      id: 1,
      title: "Blood Donation Drive",
      date: "March 10, 2025",
      location: "Apollo Hospital, New Delhi",
      organizer: "Red Cross India",
    },
    {
      id: 2,
      title: "Organ Donation Awareness Camp",
      date: "March 20, 2025",
      location: "Tata Memorial Hospital, Mumbai",
      organizer: "National Health Society",
    },
    {
      id: 3,
      title: "Community Blood Drive",
      date: "April 5, 2025",
      location: "Fortis Hospital, Bengaluru",
      organizer: "Helping Hands NGO",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600">Join Our Lifesaving Campaigns</h1>
        <p className="text-gray-600 mt-3">
          Participate in our blood and organ donation drives and make a difference.
        </p>
      </div>

      {/* Campaigns List */}
      <div className="max-w-4xl mx-auto mt-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white p-5 rounded-lg shadow-md mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-red-700">{campaign.title}</h2>
              <p className="text-gray-600 flex items-center mt-1">
                <FaCalendarAlt className="text-blue-500 mr-2" /> {campaign.date}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="text-green-500 mr-2" /> {campaign.location}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaUsers className="text-yellow-500 mr-2" /> Organized by {campaign.organizer}
              </p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-red-600 text-white text-center p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold flex justify-center items-center">
          <FaHeart className="mr-2" /> Save Lives, Be a Hero
        </h2>
        <p className="mt-2">Register today and be a part of our life-saving initiatives.</p>
        <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Campaigns;
