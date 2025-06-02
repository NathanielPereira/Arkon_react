// @ts-nocheck
import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
} 