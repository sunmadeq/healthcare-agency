"use client";

import * as React from "react";

export const Root = React.forwardRef<
  React.ElementRef<"table">,
  React.ComponentPropsWithoutRef<"table">
>((props, ref) => {
  return (
    <table
      className="grid overflow-x-scroll bg-lime-200 border-lime-400 sm:p-8 md:p-10 lg:p-12 sm:rounded-xl lg:rounded-2xl"
      ref={ref}
      {...props}
    />
  );
});

export const Head = React.forwardRef<
  React.ElementRef<"thead">,
  React.ComponentPropsWithoutRef<"thead">
>((props, ref) => {
  return <thead className="" ref={ref} {...props} />;
});

export const HeadRow = React.forwardRef<
  React.ElementRef<"tr">,
  React.ComponentPropsWithoutRef<"tr">
>((props, ref) => {
  return <tr className="" ref={ref} {...props} />;
});

export const HeadCol = React.forwardRef<
  React.ElementRef<"th">,
  React.ComponentPropsWithoutRef<"th">
>((props, ref) => {
  return <th className="" ref={ref} {...props} />;
});

export const Body = React.forwardRef<
  React.ElementRef<"tbody">,
  React.ComponentPropsWithoutRef<"tbody">
>((props, ref) => {
  return <tbody className="" ref={ref} {...props} />;
});

export const BodyRow = React.forwardRef<
  React.ElementRef<"tr">,
  React.ComponentPropsWithoutRef<"tr">
>((props, ref) => {
  return <tr className="" ref={ref} {...props} />;
});

export const BodyCol = React.forwardRef<
  React.ElementRef<"th">,
  React.ComponentPropsWithoutRef<"th">
>((props, ref) => {
  return <th className="" ref={ref} {...props} />;
});
