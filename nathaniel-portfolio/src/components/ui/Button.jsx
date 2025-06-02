// @ts-nocheck
import React from "react";

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {any} [props]
 */

/**
 * @param {ButtonProps} props
 */
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 