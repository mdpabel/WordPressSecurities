import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      type: "link";
    })
) & {
  outline?: boolean;
};

const Button = (props: ButtonProps) => {
  if (props.type == "link" && props.outline && props.href) {
    return (
      <Link
        className={
          "border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 " +
          props.className
        }
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  if (props.type == "link" && props.href) {
    return (
      <Link
        className={
          "bg-black text-white px-3 md:px-6 py-2 rounded-md flex space-x-2 " +
          props.className
        }
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  if (props.type !== "link" && props.outline) {
    return (
      <button
        disabled={props.disabled}
        type={props.type}
        className={
          `border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 ` +
          props.className
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  if (props.type !== "link" && !props.outline) {
    return (
      <button
        disabled={props.disabled}
        className={
          `bg-black text-white px-10 py-2 rounded flex space-x-2 ` +
          props.className
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
