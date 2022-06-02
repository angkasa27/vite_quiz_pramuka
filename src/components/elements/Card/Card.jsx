import React from "react";

export default function Card({ children, className }) {
  return (
    <div className={"rounded-lg shadow w-full p-2 bg-gray-800 " + className}>
      {children}
    </div>
  );
}
