// components/common/Button.tsx
import React from 'react';
import { ButtonProps, ButtonSize } from '@/interfaces';
import { type ButtonProps } from '@interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium', // Default size
  shape = 'rounded-md', // Default shape
  onClick,
  className, // Allow additional classes
}) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const baseClasses = 'font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const colorClasses = 'bg-blue-500 hover:bg-blue-600 text-white'; // Default button color

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${sizeClasses[size]} ${shape} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
