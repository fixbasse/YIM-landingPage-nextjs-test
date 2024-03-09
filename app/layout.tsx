import type { Metadata } from "next";
import { Inter, Kanit, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

// const inter = Kanit({
//   weight: '200',
//   subsets: ['latin']
// });

export const metadata: Metadata = {
  title: "YIM-LandingPage-Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 md:px-10 lg:px-40">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
