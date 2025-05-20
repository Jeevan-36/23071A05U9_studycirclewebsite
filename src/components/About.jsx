import React from 'react';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">About Study Circle Application</h2>
      <p className="text-gray-700 text-lg">
        Welcome to Study Circle, your one-stop platform for collaborative learning and resource sharing! Our application allows users to easily register and log in to access a world of study materials and academic support.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Users can upload their own study materials, check and download resources shared by others, and make secure payments for premium content or services. Our platform is designed to foster a supportive learning community.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Need help or have questions? You can always contact the admin directly through the app for assistance.
      </p>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Study Circle. All rights reserved.<br />
        For feedback or support, email us at <a href="mailto:studycircle.support@email.com" className="text-blue-600 underline">studycircle.support@email.com</a>
      </footer>
    </div>
  );
};

export default About;