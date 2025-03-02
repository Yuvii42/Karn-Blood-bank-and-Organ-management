const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 text-center">Terms & Conditions</h1>
        <p className="text-gray-600 mt-3 text-lg text-center">Last Updated: February 2025</p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mt-2">
              By using **Karn**, you agree to abide by these terms and conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">2. Eligibility</h2>
            <p className="text-gray-600 mt-2">
              Users must be at least 18 years old to register as a **donor** or recipient on our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">3. Data Privacy</h2>
            <p className="text-gray-600 mt-2">
              All user data is securely stored and handled as per our **Privacy Policy**.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">4. Modification of Terms</h2>
            <p className="text-gray-600 mt-2">
              We may update these terms at any time. Users will be notified of major changes via email.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">For any legal inquiries, contact <strong>legal@karn.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
