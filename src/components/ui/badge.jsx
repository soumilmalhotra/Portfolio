import React from "react";
import clsx from "clsx";

export function Badge({ children, className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5";

  const variants = {
    default: "bg-blue-600 text-white",
    outline: "border border-slate-600 text-slate-300",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-600 text-white",
  };

  return (
    <span
      className={clsx(base, variants[variant] || variants.default, className)}
      {...props}
    >
      {children}
    </span>
  );
}
