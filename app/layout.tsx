import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Magnetik = localFont({
  src: "./fonts/Magnetik-Regular.woff",
  variable: "--font-magnetik",
  weight: "100 900",
});
const overpassVariable = localFont({
  src: "./fonts/Overpass-Variable.woff",
  variable: "--font-overpass-variable",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theatron",
  description: "Movie Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Magnetik.variable} ${overpassVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
