"use client";

import { Montserrat } from "next/font/google";
import Providers from "../../lib/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"]
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default RootLayout;
