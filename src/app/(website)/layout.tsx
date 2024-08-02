import { PropsWithChildren } from "react";

export default function WebsiteLayout({ children }: PropsWithChildren) {
  return <main className="container">{children}</main>;
}
