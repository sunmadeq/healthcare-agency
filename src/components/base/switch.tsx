"use client";

import * as React from "react";
import * as ReactIcons from "@/components/base/icon";

export type SwitchContextStore = {
  page: number;
  size: number;
};

export type SwitchContextActions = {
  setPage: (page: number) => void;
  setSize: (size: number) => void;
};

export const SwitchContext = React.createContext<
  (SwitchContextStore & SwitchContextActions) | null
>(null);

export function useSwitchContext() {
  const context = React.useContext(SwitchContext);

  if (!context) {
    throw new Error("useSwitchContext must be used within the context.");
  }

  return context;
}

export const Provider = ({
  children
}: React.PropsWithChildren) => {
  const [size, setSize] = React.useState(0);
  const [page, setPage] = React.useState(0);

  function setCurrentSize(size: number) {
    setSize(size);
  }

  function setCurrentPage(page: number) {
    console.log("Setting page to:", page)

    if (page < 0) {
      setPage(size - 1);
    } else if (page >= size) {
      setPage(0);
    } else {
      setPage(page);
    }
  }

  console.log("Current page is:", page);

  return (
    <SwitchContext.Provider
      value={{
        page,
        size,
        setSize: setCurrentSize,
        setPage: setCurrentPage
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  return <div className="switch" ref={ref} {...props} />;
});

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  const { page, size, setSize } = useSwitchContext();

  React.useEffect(() => {
    setSize(React.Children.count(children));
  }, [children]);

  const array = React.Children.toArray(children);
  const items = array.slice(page, size).concat(array.slice(0, page));

  return (
    <div className="switch__body" ref={ref} {...props}>
      {items}
    </div>
  );
});

export const Foot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => {
  const { page, size, setPage } = useSwitchContext();

  return (
    <div className="switch__footer" ref={ref} {...props}>
      <button className="switch__button" onClick={() => setPage(page - 1)} disabled={size === 0}>
        <ReactIcons.ChevronLeftIcon />
      </button>
      <div className="switch__pages">
        {new Array(size).fill(0).map((_, id) => (
          <div key={id} data-active={page === id} />
        ))}
      </div>
      <button className="switch__button" onClick={() => setPage(page + 1)} disabled={size === 0}>
        <ReactIcons.ChevronRightIcon />
      </button>
    </div>
  );
});
