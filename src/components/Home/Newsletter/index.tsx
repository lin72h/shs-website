"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Graphic from "./Graphic";

export default function Newsletter() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || email == "") {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      const res = await axios.post("/api/newsletter", { email });

      if (res.data.status == 400) {
        toast.error(res.data?.detail);
        setEmail("");
      } else {
        toast.success("Thanks for signing up!");
        setEmail("");
      }
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  if (!mounted) {
    return (
      <section className="mt-[-160px] bg-white">
        <div className="container">
          <div className="relative z-10 overflow-hidden rounded-[20px] bg-primary px-8 py-16 sm:p-12 lg:px-8 lg:py-24 xl:p-16">
            <div className="mx-auto max-w-[600px] text-center">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                Subscribe to our Newsletter
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white">
                Subscribe to our newsletter to get the latest updates and news.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[60px] w-full rounded-md bg-white px-4 text-dark outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[60px] items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-primary transition duration-300 ease-in-out hover:bg-opacity-90"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-[-160px] bg-white">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-md bg-primary py-[70px] text-center">
          <div className="relative z-10 mx-auto max-w-[770px] px-6">
            <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-[40px]">
              Subscribe our newsletter to receive future updates
            </h2>
            <form
              onSubmit={handleSubmit}
              className="relative mx-auto max-w-[480px]"
            >
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mb-5 w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-center text-white placeholder-white placeholder-opacity-70 outline-none transition focus:border-opacity-100 focus-visible:shadow-none sm:mb-0 sm:text-left"
              />
              <button className="right-2 top-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold text-primary sm:absolute sm:w-auto sm:py-[10px]">
                Subscribe Now
              </button>
            </form>
          </div>

          <Graphic />
        </div>
      </div>
    </section>
  );
}
