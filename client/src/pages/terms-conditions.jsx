// src/TermsConditions.js

import React from 'react';
import { AiFillInfoCircle, AiFillSafetyCertificate, AiFillFileText, AiFillLock } from 'react-icons/ai';

const termsData = [
  {
    title: 'Introduction',
    content: 'Welcome to MY!BLOG.  These terms and conditions outline the rules and regulations for the use of our blog.',
    icon: <AiFillInfoCircle className="text-blue-500 dark:text-blue-400" />,
  },
  {
    title: 'Acceptance of Terms',
    content: 'By accessing this blog, you accept these terms and conditions in full. If you disagree with any part of these terms, do not use our blog.',
    icon: <AiFillSafetyCertificate className="text-green-500 dark:text-green-400" />,
  },
  {
    title: 'Content Ownership',
    content: 'All content on this blog, including text, images, and graphics, is owned by me [Madderla Dinesh] and may not be reproduced without permission.',
    icon: <AiFillFileText className="text-yellow-500 dark:text-yellow-400" />,
  },
  {
    title: 'User Responsibilities',
    content: 'Users are expected to engage respectfully and refrain from posting offensive or illegal content.',
    icon: <AiFillLock className="text-red-500 dark:text-red-400" />,
  },
];

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

      <div className="grid grid-cols-1 gap-6">
        {termsData.map((term, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700"
          >
            <div className="mr-4 text-3xl">{term.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{term.title}</h2>
              <p>{term.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
