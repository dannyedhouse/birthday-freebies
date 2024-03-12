import type { Metadata } from "next";
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
        </div>
      </body>
    </html>
  );
}
