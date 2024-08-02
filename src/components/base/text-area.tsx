"use client";

import * as React from "react";
import { concat } from "@/library/styles";

const TextArea = React.forwardRef<
  React.ElementRef<"textarea">,
  React.ComponentPropsWithoutRef<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={concat(
        "bg-lime-300 tx-gray-500 border-lime-500 font-medium sm:rounded-sm sm:font-md sm:p-5 lg:rounded-lg lg:font-lg lg:p-6",
        className
      )}
      style={{
        minHeight: "135px"
      }}
      ref={ref}
      {...props}
    />
  );
});

export default TextArea;
