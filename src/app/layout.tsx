import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Urbanist } from "next/font/google";
import { Header } from "@/components/page/header";
import { Footer } from "@/components/page/footer";
import "@/styles/styles.scss";

const font = Urbanist({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Nutritionist",
    template: "%s - Nutritionist"
  },
  description: "A nutrition app built for a healthcare agency using Next.js",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
