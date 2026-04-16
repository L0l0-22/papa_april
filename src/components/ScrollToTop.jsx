"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      prevPath.current = pathname;
    }
  }, [pathname]);

  return null;
}