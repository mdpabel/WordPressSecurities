import Link from 'next/link';
import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | 'link';
  href?: string;
  outline?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  type,
  href,
  outline = false,
  disabled = false,
}: IButton) => {
  if (type == 'link' && outline && href) {
    return (
      <Link
        className={
          'border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 ' +
          className
        }
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  if (type == 'link' && href) {
    return (
      <Link
        className={
          'bg-black text-white px-3 md:px-6 py-2 rounded-md flex space-x-2 ' +
          className
        }
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  if (type !== 'link' && outline) {
    return (
      <button
        disabled={disabled}
        type={type}
        className={
          `border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 ` +
          className
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={disabled}
      className={
        `bg-black text-white px-10 py-2 rounded flex space-x-2 ` + className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
