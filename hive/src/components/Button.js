import React from 'react';

const Button = ({ children, isConnected, onClick }) => {
  const baseStyles = 'px-5 py-[5px] rounded border font-sans text-sm font-normal leading-[14px] text-center transition-colors duration-300';
  const connectStyles = 'bg-white text-black border-gray-300 hover:bg-gray-200 hover:border-gray-400 !text-xs';
  const connectedStyles = 'bg-green-50 text-gray-800 border-gray-300 !text-xs';

  const buttonStyle = isConnected ? connectedStyles : connectStyles;

  return (
    <button className={`${baseStyles} ${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
