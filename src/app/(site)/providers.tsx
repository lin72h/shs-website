"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import ToasterContext from "../context/ToastContext";
import { useEffect, useState } from "react";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <NextTopLoader
        color="#006BFF"
        crawlSpeed={300}
        showSpinner={false}
        shadow="none"
        zIndex={9999999}
      />
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <ToasterContext />
        {children}
      </ThemeProvider>
    </>
  );
} 