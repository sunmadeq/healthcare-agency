"use client";

import * as React from "react";
import { style, Variants } from "@/library/styles";

export const buttonStyles = {
  base: "flex justify-center items-center whitespace-nowrap font-semibold sm:rounded-sm sm:font-sm lg:rounded-md lg:font-lg",
  variants: {
    type: {
      solid: "bg-lime-700 tx-gray-900",
      light: "bg-lime-200 tx-gray-900 border-lime-400",
      ghost: "tx-lime-700"
    },
    size: {
      sm: "h-10 lg:h-12",
      md: "h-11 lg:h-14",
      lg: "h-12 lg:h-15"
    },
    aspect: {
      none: "aspect-none",
      icon: "aspect-icon"
    },
    padding: {
      xs: "px-4 lg:px-5",
      sm: "px-4 lg:px-6",
      md: "px-5 lg:px-6",
      lg: "px-5 lg:px-7",
      xl: "px-6 lg:px-10"
    }
  }
};

export type ButtonStyles = typeof buttonStyles;

const Button = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & {
    variants: Variants<ButtonStyles>;
  }
>(({ variants, className, ...props }, ref) => {
  return <button className={style(buttonStyles, variants, className)} ref={ref} {...props} />;
});

export default Button;
