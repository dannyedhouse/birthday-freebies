import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const raleway = Raleway({
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
      <body className={inter.className}>
        <div className="container mx-auto">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
