// components/Notification.js
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-white border text-black rounded-2xl shadow-lg z-50 flex flex-col items-center space-y-2">
      <div className="bg-green-900 text-white rounded-full p-2">
        <AiOutlineCheck />
      </div>
      <div className="text-center">
        <div className="font-bold text-lg">Thank you for letting us know.</div>
        <div>We will update and warn the seller.</div>
      </div>
      <button onClick={onClose} className="text-green-700">
      </button>
    </div>
  );
};

export default Notification;
