import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  className,
  href,
  nav,
  disabled,
  ...props
}) {
  const disabledClass = disabled
    ? " text-white font-medium leading-tight rounded-md shadow-md pointer-events-none opacity-60"
    : " cursor-pointer hover:bg-cyan-600 hover:shadow-lg focus:bg-cyan-600 ";
  const defaultClass =
    disabledClass +
    " bg-cyan-500 inline-block px-6 py-2.5 text-white leading-tight  rounded-md shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-700 active:shadow-lg transition duration-150 ease-in-out ";

  switch (true) {
    case !!href:
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={defaultClass + " " + className}
          {...props}
        >
          {children}
        </a>
      );
    default:
      return (
        <motion.button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className={defaultClass + " " + className}
          {...props}
        >
          {children}
        </motion.button>
      );
  }
}
