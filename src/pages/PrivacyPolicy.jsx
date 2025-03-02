const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mt-3 text-lg text-center">Effective Date: February 2025</p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
            <p className="text-gray-600 mt-2">
              We collect personal information such as name, email, and medical history to facilitate blood and organ donations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            <p className="text-gray-600 mt-2">
              Your data is used strictly for donor-recipient matching, improving our services, and ensuring compliance with medical guidelines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">3. Data Security</h2>
            <p className="text-gray-600 mt-2">
              We implement **encryption and secure storage** to protect user data from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">4. Third-Party Sharing</h2>
            <p className="text-gray-600 mt-2">
              We **never** sell or share personal data with third parties without user consent, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">5. Your Rights</h2>
            <p className="text-gray-600 mt-2">
              You can request data access, corrections, or deletions by contacting us at **privacy@karn.com**.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">For any privacy concerns, reach out to <strong>privacy@karn.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
