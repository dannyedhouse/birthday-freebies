import { ScrollToTopButton } from "@/components/ScrollToTop/ScrollToTop";
import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header/header";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Birthday Freebie - freebies and discounts",
  description: "Birthday freebies and birthday discounts",
};

export const viewport: Viewport = {
  width: 300,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <Header />
          <main>{children}</main>
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
