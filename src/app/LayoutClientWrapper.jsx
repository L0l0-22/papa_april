"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();

  // 🔥 Pages to hide navbar/footer
  const hideLayoutRoutes = ["/signin", "/signup"];

  const shouldHide = hideLayoutRoutes.some((route) =>
    pathname.includes(route)
  );

  return (
    <>
      {!shouldHide && <Navbar />}

      {children}

      {!shouldHide && <Footer />}
    </>
  );
}