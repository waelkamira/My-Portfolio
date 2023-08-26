import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@mui/material/Container";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-Portfolio",
  description: "this is my-portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container></Container>
        {children}
      </body>
    </html>
  );
}
