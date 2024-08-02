"use client";

import * as React from "react";

type TabAreaStore = {
  tab: any;
};

type TabAreaActions = {
  setTab: (tab: any) => void;
};

const TabAreaContext = React.createContext<(TabAreaStore & TabAreaActions) | null>(null);

export function useTabAreaContext() {
  const context = React.useContext(TabAreaContext);

  if (!context) {
    throw new Error("useTabAreaContext must be used within the context.");
  }

  return context;
}

export const Provider = ({
  children,
  defaultTab
}: { defaultTab: string } & React.PropsWithChildren) => {
  const [tab, setTab] = React.useState(defaultTab);

  return (
    <TabAreaContext.Provider
      value={{
        tab,
        setTab
      }}
    >
      {children}
    </TabAreaContext.Provider>
  );
};

export const Root = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs" ref={ref} {...props} />);

export const Head = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs__head" ref={ref} {...props} />);

export const List = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs__list" ref={ref} {...props} />);

export const Item = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ value, ...props }, ref) => {
  const { tab, setTab } = useTabAreaContext();

  return (
    <button
      className="tabs__item"
      onClick={() => setTab(value)}
      data-active={tab === value}
      value={value}
      ref={ref}
      {...props}
    />
  );
});

export const Note = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs__note" ref={ref} {...props} />);

export const Body = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => <div className="tabs__body" ref={ref} {...props} />);

export const Content = ({ value, children }: { value: string } & React.PropsWithChildren) => {
  const { tab } = useTabAreaContext();

  if (tab !== value) return null;

  return <>{children}</>;
};
