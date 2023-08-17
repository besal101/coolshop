import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "disabled" | "enable";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const baseStyles =
    "px-7 py-3 rounded-3xl text-white focus:outline-none focus:ring focus:ring-opacity-50 text-sm leading-tight";

  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-blue-600 hover:bg-blue-500";
  } else if (variant === "secondary") {
    variantStyles = "bg-red-600 hover:bg-red-400";
  } else if (variant === "disabled") {
    variantStyles = "bg-gray-500 hover:bg-gray-500";
  } else if (variant === "enable") {
    variantStyles = "bg-green-500 hover:bg-green-600";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
