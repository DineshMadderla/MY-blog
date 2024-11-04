// src/PrivacyPolicy.js

import React from 'react';
import { AiOutlineUser, AiOutlineEye, AiOutlineLock, AiOutlineGlobal } from 'react-icons/ai';

const privacyData = [
  {
    title: 'Personal Information Collection',
    content: 'We collect personal information such as name, email, and usage data to improve our blog services and user experience.',
    icon: <AiOutlineUser className="text-blue-500 dark:text-blue-400" />,
  },
  {
    title: 'Usage of Personal Data',
    content: 'We use your information to personalize content, provide support, and improve our services. We do not share personal data with third parties without your consent.',
    icon: <AiOutlineEye className="text-green-500 dark:text-green-400" />,
  },
  {
    title: 'Data Security',
    content: 'We prioritize the security of your data and take all reasonable measures to protect it from unauthorized access or misuse.',
    icon: <AiOutlineLock className="text-yellow-500 dark:text-yellow-400" />,
  },
  {
    title: 'International Transfers',
    content: 'Personal data may be transferred to, and maintained on, computers located outside of your country where data protection laws may differ.',
    icon: <AiOutlineGlobal className="text-red-500 dark:text-red-400" />,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <div className="grid grid-cols-1 gap-6">
        {privacyData.map((policy, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700"
          >
            <div className="mr-4 text-3xl">{policy.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{policy.title}</h2>
              <p>{policy.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
