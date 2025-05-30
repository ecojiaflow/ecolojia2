import React from 'react';

function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Legal Information</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Terms of Service</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Welcome to our platform. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Privacy Policy</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Cookie Policy</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Our website uses cookies to enhance your browsing experience. By continuing to use our site, you agree to our use of cookies.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            If you have any questions about our legal policies, please contact our legal department at legal@example.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default LegalPage;