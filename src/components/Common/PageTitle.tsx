import Link from "next/link";

type Props = {
  pageTitle: string;
  pageDescription: string;
  breadcrumbTitle?: string;
};

export default function PageTitle({ pageTitle, pageDescription, breadcrumbTitle }: Props) {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-6 md:pb-12 pt-32 sm:pt-36 md:pt-40">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-3 md:mb-5">
              <ul className="flex items-center">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-sm font-medium text-body-color hover:text-primary transition duration-300"
                  >
                    Home
                  </Link>
                  <span className="mx-3 block h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                </li>
                <li className="text-sm font-bold text-primary">
                  {breadcrumbTitle || pageTitle}
                </li>
              </ul>
            </div>
            
            <div className="mb-6 md:mb-12 max-w-[600px] md:mb-0">
              <h1 className="mb-3 md:mb-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl leading-tight tracking-tight whitespace-nowrap">
                {pageTitle}
              </h1>
              <p className="text-lg font-medium leading-relaxed text-body-color">
                {pageDescription}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            {/* No content needed here */}
          </div>
        </div>
      </div>
      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="730"
            height="206"
            viewBox="0 0 730 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.08"
              width="136.991"
              height="563.705"
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)"
              fill="url(#paint0_linear_0:1)"
            />
            <rect
              opacity="0.05"
              width="345.355"
              height="563.705"
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="68.4956"
                y1="0"
                x2="68.4956"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="172.678"
                y1="0"
                x2="172.678"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="405"
            height="206"
            viewBox="0 0 405 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.08"
              width="289.718"
              height="563.705"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 603.461 -125.138)"
              fill="url(#paint0_linear_54:595)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_54:595"
                x1="144.859"
                y1="0"
                x2="144.859"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
}
