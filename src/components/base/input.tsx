"use client";

import * as React from "react";
import { concat } from "@/library/styles";

const Input = React.forwardRef<React.ElementRef<"input">, React.ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={concat(
          "bg-lime-300 tx-gray-500 border-lime-500 font-medium sm:rounded-sm sm:font-md sm:p-5 lg:rounded-lg lg:font-lg lg:p-6",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
