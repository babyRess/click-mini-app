import React from 'react';

const UnderMaintenance: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">We’re Under Maintenance</h1>
      <p className="text-lg text-gray-600 mb-6">Our site is currently undergoing scheduled maintenance. We’ll be back soon.</p>
      <div className="animate-bounce">
        <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M5 6h14" />
        </svg>
      </div>
    </div>
  );
};

export default UnderMaintenance;
