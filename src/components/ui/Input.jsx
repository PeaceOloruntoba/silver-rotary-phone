import React from 'react';

export default function Input({ type, placeholder, className, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
      {...props}
    />
  );
}
