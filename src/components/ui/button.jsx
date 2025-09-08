import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white",
    outline: "border border-slate-600 text-slate-300 hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    icon: "p-2 w-9 h-9",
  };

  return (
    <button
      className={clsx(base, variants[variant] || variants.default, sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
