import React, { useState, useRef } from "react";
import clsx from "clsx";

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function Tooltip({ children }) {
  return <div className="relative inline-block">{children}</div>;
}

export function TooltipTrigger({ asChild = false, children }) {
  return asChild ? children : <span>{children}</span>;
}

export function TooltipContent({ children, className = "" }) {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);

  return (
    <div
      ref={triggerRef}
      className="group relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Slot for wrapped element */}
      {children[0] || children}

      {/* Tooltip */}
      {visible && (
        <div
          className={clsx(
            "absolute bottom-full mb-2 px-3 py-2 rounded-md text-sm text-white bg-slate-800 border border-slate-600 shadow-md whitespace-nowrap z-50",
            className
          )}
        >
          {children[1] || children}
        </div>
      )}
    </div>
  );
}
