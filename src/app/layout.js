import { Inter } from "next/font/google";
import "@splidejs/splide/css";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Footnote from "@/components/Footnote";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chimkasimma Transport Services",
  description:
    "Elevate your logistics experience with our cutting-edge services, ensuring swift, secure, and tailored transport solutions for your cargo.",
  icons: {
    icon: ["/favico?v=4"],
    apple: ["/apple-touch-icon?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Footnote />
        </ChakraProvider>
      </body>
    </html>
  );
}
