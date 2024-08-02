"use client";

import * as React from "react";
import { concat } from "@/library/styles";

type FormContextState = {
  items: FormItemContextState[];
};

type FormItemContextState = {
  id: string;
  value: any;
  error: string | null;
};

type FormItemContextActions = {
  setValue: (value: any) => void;
  setError: (error: string | null) => void;
};

const FormItemContext = React.createContext<(FormItemContextState & FormItemContextActions) | null>(
  null
);

export function useFormItemContext() {
  const context = React.useContext(FormItemContext);

  if (!context) {
    throw new Error("useFormItemContext must be used within the context.");
  }

  return context;
}

export const Root = React.forwardRef<
  React.ElementRef<"form">,
  React.ComponentPropsWithoutRef<"form">
>((props, ref) => {
  return <form className="grid sm:gap-10 lg:gap-12" ref={ref} {...props} />;
});

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="grid sm:gap-5 lg:gap-8" ref={ref} {...props} />;
});

export const Item = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    id: string;
  }
>(({ id, ...props }, ref) => {
  const [value, setValue] = React.useState<any>();
  const [error, setError] = React.useState<string | null>(null);

  return (
    <FormItemContext.Provider value={{ id, value, error, setValue, setError }}>
      <div className="grid sm:gap-2 lg:gap-2.5" ref={ref} {...props} />
    </FormItemContext.Provider>
  );
});

export const Label = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>((props, ref) => {
  const context = useFormItemContext();

  return (
    <label
      className="tx-gray-700 font-medium leading-6 sm:font-md md:font-lg"
      htmlFor={context.id}
      ref={ref}
      {...props}
    />
  );
});

export const Control = ({ children }: { children: React.ReactElement }) => {
  const context = useFormItemContext();
  const control = React.Children.only(children);
  const element = React.cloneElement(control, { id: context.id, "aria-describedby": context.id });

  return <>{element}</>;
};

export const Message = React.forwardRef<React.ElementRef<"p">, React.ComponentPropsWithoutRef<"p">>(
  (props, ref) => {
    const context = useFormItemContext();

    return (
      <p
        className={concat(
          context.error === null
            ? "hidden"
            : "tx-gray-600 font-medium leading-4.5 sm:font-sm lg:font-md"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export const Foot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="grid" ref={ref} {...props} />;
});
