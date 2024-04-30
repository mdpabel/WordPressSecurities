import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, type, ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className='block mb-2 text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <input
        type={type}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
        {...props}
      />
    </div>
  );
};
