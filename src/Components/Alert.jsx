import React, { useEffect } from 'react';

export default function Alert({ message, type = 'info', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
  }, [onClose, duration]);

  const typeStyles = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
  };

  return (
    <div className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-sm z-50 transition-transform ${typeStyles[type]}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-3 font-bold text-lg leading-none">&times;</button>
      </div>
    </div>
  );
}