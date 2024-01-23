import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "h-8",
    "px-4",
    "text-xs",
    "font-medium",
    "tracking-wide",
    "transition",
    "duration-300",
    "rounded",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:border-emerald-300",
    "disabled:shadow-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        outline: "",
        link: "",
      },
      size: {
        s: "h-8 px-4 text-xs",
        md: "h-10 px-5 text-sm ",
        lg: "h-12 px-6 text-sm",
      },
      rounded: {
        true: "rounded-xl",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        className:
          "disabled:bg-emerald-300 focus:bg-emerald-700 text-white hover:bg-emerald-600 bg-emerald-500",
      },
      {
        variant: "secondary",
        className:
          "disabled:bg-emerald-100 disabled:text-emerald-400 bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700",
      },
      {
        variant: "outline",
        className:
          "border border-emerald-500 disabled:text-emerald-300 text-emerald-500 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700",
      },
      {
        variant: "link",
        className:
          "text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-100 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300  disabled:hover:bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, rounded, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, rounded, className }))}
        {...props}
      >
        <span>{props.children}</span>
      </button>
    );
  }
);
