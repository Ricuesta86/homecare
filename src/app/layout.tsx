import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
// import { Footer } from "@/components/sections/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeCare - Servicios de Cuidado en el Hogar",
  description:
    "Ofrecemos servicios profesionales de cuidado en el hogar para adultos mayores y personas que necesitan asistencia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 md:pt-20 sm:pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
