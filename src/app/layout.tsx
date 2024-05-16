import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Rodrigo Salmerón | Moneylion",
  description: "Code challenge for Moneylion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
