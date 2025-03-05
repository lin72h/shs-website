"use client";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder with the same dimensions during SSR
  if (!mounted) {
    return (
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service bg-gray-100" />
        <div className="mt-6">
          <div className="mb-3 h-6 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4">
        <div className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
          <Image 
            src={portfolio?.image} 
            alt={portfolio?.title || "Portfolio image"} 
            fill 
            className="w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="invisible absolute inset-0 flex items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
            <button
              onClick={() => setOpen(true)}
              className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="mt-6">
          <Link
            href={`/portfolio/${portfolio?.slug}`}
            className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-base font-medium text-body-color">
          {portfolio?.sortDescription}
        </p>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: portfolio?.image as string,
            alt: portfolio?.title || "Portfolio image"
          },
        ]}
      />
    </>
  );
}
