import React from 'react';
import { FaMicrophone, FaRobot, FaHandsHelping } from 'react-icons/fa';

const FutureUpdates = () => {
  return (
    <div className="p-8 mx-auto max-w-5xl">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">Future Updates</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Crowdfunding Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-300 text-6xl">
            <FaHandsHelping />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">Crowdfunding</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
            Support our blog through crowdfunding to help unlock exclusive content and advanced features, enabling us to bring you more high-quality content.
          </p>
        </div>

        {/* AI-Powered Image Generation Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4 text-green-500 dark:text-green-300 text-6xl">
            <FaRobot />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">AI for Image Generation</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
            Our AI will create images relevant to each post's category and title, enhancing the visual experience with unique, contextually relevant visuals.
          </p>
        </div>

        {/* Voice Search Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center mb-4 text-red-500 dark:text-red-300 text-6xl">
            <FaMicrophone />
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">Voice Search</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
            Soon, you’ll be able to use voice commands to search for content, making navigation faster and easier, especially on mobile devices.
          </p>
        </div>
      </div>

      {/* Stay Tuned Message */}
      <div className="mt-12 text-center text-lg text-gray-600 dark:text-gray-400">
        <p>We’re constantly working on bringing new features and improvements. Stay tuned for more updates!</p>
      </div>
    </div>
  );
};

export default FutureUpdates;
