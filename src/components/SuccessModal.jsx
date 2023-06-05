import React, { useEffect } from "react";

const SuccessModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Set the delay in milliseconds (3 seconds in this example)

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
        <span className="text-5xl text-green-500 mb-4">&#10004;</span>
        <h2 className="text-2xl font-bold mb-2">Success</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
