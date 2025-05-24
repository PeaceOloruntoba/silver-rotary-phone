import React from 'react';

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`transition-all duration-300 font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
