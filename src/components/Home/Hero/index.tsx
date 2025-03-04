import Link from "next/link";
import HeroClients from "./HeroClients";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-gradient-to-b from-white to-slate-50 pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="hero-content">
              <span className="mb-5 inline-block text-lg font-semibold tracking-wider">
                Professional Engineering Solutions
              </span>
              <h1 className="mb-5 text-5xl leading-tight text-dark sm:text-[52px] lg:text-[50px] xl:text-[56px]">
                <span className="bg-gradient-to-r font-extrabold from-primary to-blue-400 bg-clip-text text-transparent">Engineering</span>
                <span className="bg-gradient-to-r font-extrabold from-primary to-blue-400 bg-clip-text text-transparent"> Consulting</span>
                <span className="mt-4 block text-2xl sm:text-4xl lg:text-[30px] ">
                  for Land & Infrastructure
                </span>
              </h1>
              <p className="mb-10 max-w-[520px] text-lg leading-relaxed text-slate-600">
              We’re a NZ owned civil engineering design consultancy based in Auckland, specialising in comprehensive land development and infrastructure projects.
              </p>
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 lg:px-10 xl:px-12"
                  >
                    View Our Projects
                    <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center py-1 text-center text-lg font-semibold text-slate-600 transition-colors duration-300 hover:text-primary"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        <circle cx="12" cy="12" r="11" className="fill-primary" />
                        <rect
                          x="7.90906"
                          y="14.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.1818"
                          y="7"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12 13.5454L14.8343 10.4773H9.16576L12 13.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <HeroClients />
            </div>
          </div>
          <div className="hidden px-4 xl:block xl:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex w-full max-lg:mt-10 lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
