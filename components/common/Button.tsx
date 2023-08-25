// import Link from "next/link";
// import React, {
//   AnchorHTMLAttributes,
//   ButtonHTMLAttributes,
//   ReactNode,
// } from "react";

// type ButtonProps = (
//   | ButtonHTMLAttributes<HTMLButtonElement>
//   | (AnchorHTMLAttributes<HTMLAnchorElement> & {
//       type: "link";
//     })
// ) & {
//   outline?: boolean;
// };

// const Button = (props: ButtonProps) => {
//   if (props.type == "link" && props.outline && props.href) {
//     return (
//       <Link
//         className={
//           "border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 " +
//           props.className
//         }
//         href={props.href}
//         onClick={props.onClick}
//       >
//         {props.children}
//       </Link>
//     );
//   }

//   if (props.type == "link" && props.href) {
//     return (
//       <Link
//         className={
//           "bg-black text-white px-3 md:px-6 py-2 rounded-md flex space-x-2 " +
//           props.className
//         }
//         href={props.href}
//         onClick={props.onClick}
//       >
//         {props.children}
//       </Link>
//     );
//   }

//   if (props.type !== "link" && props.outline) {
//     return (
//       <button
//         disabled={props.disabled}
//         type={props.type}
//         className={
//           `border border-black font-medium px-3 md:px-6 py-2 rounded-md flex space-x-2 ` +
//           props.className
//         }
//         onClick={props.onClick}
//       >
//         {props.children}
//       </button>
//     );
//   }

//   if (props.type !== "link" && !props.outline) {
//     return (
//       <button
//         disabled={props.disabled}
//         className={
//           `bg-black text-white px-10 py-2 rounded flex space-x-2 ` +
//           props.className
//         }
//         onClick={props.onClick}
//       >
//         {props.children}
//       </button>
//     );
//   }
// };

// export default Button;

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white px-10 py-2 rounded flex space-x-2",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
