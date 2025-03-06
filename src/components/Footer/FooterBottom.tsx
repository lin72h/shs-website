"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FooterBottom() {
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear().toString());
  }, []);

  if (!mounted) {
    return (
      <div className="mt-12 border-t border-white border-opacity-10 pt-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-center md:text-left text-base font-medium text-body-color">
            SHS Engineering Ltd &copy; 2025 All Rights Reserved
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-12 border-t border-white border-opacity-10 pt-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-center md:text-left text-base font-medium text-body-color mb-4 md:mb-0">
            SHS Engineering Ltd &copy; {year} All Rights Reserved
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="/privacy-policy" className="text-sm text-body-color hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-body-color hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
