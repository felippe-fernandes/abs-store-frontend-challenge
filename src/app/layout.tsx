"use client";

import { Montserrat } from "next/font/google";
import Providers from "../../lib/Providers";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
