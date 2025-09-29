import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
// import ParticlesComponent from "./components/particles/particles";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "RadAssist Teleradiology",
  description: "AI and radiology solutions",
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
        {/* <ParticlesComponent id="tsparticles" /> */}
        {children}
      </body>
    </html>
  );
}
