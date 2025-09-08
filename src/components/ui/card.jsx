import React from "react";
import clsx from "clsx";

// Base Card wrapper
export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-700 bg-slate-800/50 shadow-md overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card header
export function CardHeader({ className = "", children, ...props }) {
  return (
    <div
      className={clsx("p-4 flex flex-col items-start gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Card title
export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3
      className={clsx("text-lg font-semibold text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

// Card content
export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={clsx("p-4 text-slate-300", className)} {...props}>
      {children}
    </div>
  );
}
