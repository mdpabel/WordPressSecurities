import React, { ChangeEvent } from "react";

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange, label, type, placeholder, id }: IInput) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        onChange={(e) => onChange(e)}
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
