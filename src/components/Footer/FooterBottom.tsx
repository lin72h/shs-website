"use client";

import { useEffect, useState } from "react";

export default function FooterBottom() {
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear().toString());
  }, []);

  if (!mounted) {
    return (
      <div className="mt-10 border-t border-white border-opacity-10 pt-12">
        <p className="text-center text-base font-medium text-body-color">
          SHS Ltd &copy; 2025
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 border-t border-white border-opacity-10 pt-12">
        <p className="text-center text-base font-medium text-body-color">
          SHS Ltd &copy; 2025
        </p>
      </div>
    </>
  );
}
