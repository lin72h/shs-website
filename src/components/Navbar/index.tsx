"use client";

import { navbarData } from "@/static-data/navbar";
import { onScroll } from "@/utils/scrollActive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalSearchModal from "../GlobalSearch";

export default function Navbar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState<string | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathUrl = usePathname();

  const navigationHandler = () => {
    setNavigationOpen(!navigationOpen);
  };

  // Dropdown toggler handler
  const dropdownTogglerHandler = (itemId: string) => {
    if (dropdownToggler === itemId) {
      setDropdownToggler(null);
    } else {
      setDropdownToggler(itemId);
    }
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  // ==== onePage nav active ====
  useEffect(() => {
    if (mounted && window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header
        className={`${stickyMenu ? "sticky-navbar shadow-lg bg-white/95 backdrop-blur-sm" : ""} header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent transition-all duration-300`}
      >
        <div className="mx-auto w-full px-6 xl:container">
          <div className="relative flex items-center justify-between py-3 xl:py-4">
            <div className="w-52 max-w-full px-4 xl:w-60">
              <Link href="/" className="header-logo block w-full py-2 xl:py-3">
                <Image
                  src="/images/logo/shs-logo4.PNG"
                  alt="logo"
                  className="w-full h-auto max-w-[280px] min-w-[180px] -mt-3 max-sm:min-w-[100px] max-sm:max-w-[140px] max-md:max-w-[160px] max-sm:mt-0"
                  width={280}
                  height={112}
                  priority
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navigationHandler}
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 xl:hidden"
                >
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark transition-all duration-300 ${navigationOpen ? "top-[7px] rotate-45" : ""}`}
                  ></span>
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark transition-all duration-300 ${navigationOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark transition-all duration-300 ${navigationOpen ? "top-[-8px] rotate-[135deg]" : ""}`}
                  ></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`${!navigationOpen ? "hidden xl:block" : ""} absolute right-4 top-full w-full max-w-[280px] rounded-xl bg-white p-6 py-6 shadow-xl max-xl:max-h-[400px] max-xl:overflow-y-auto xl:static xl:block xl:w-full xl:max-w-full xl:bg-transparent xl:px-4 xl:py-0 xl:shadow-none 2xl:px-6`}
                >
                  <ul className="block xl:flex xl:items-center xl:space-x-[22px]">
                    {navbarData.map((item) => (
                      <li
                        key={item?.id}
                        className={`group relative xl:px-4 whitespace-nowrap ${item?.submenu ? "submenu-item" : ""}`}
                      >
                        {item?.submenu ? (
                          <>
                            <button
                              onClick={() =>
                                dropdownTogglerHandler(item.id as string)
                              }
                              className="flex w-full items-center justify-between py-2.5 text-base text-black group-hover:text-primary xl:mr-0 xl:inline-flex xl:px-0 xl:py-7 font-medium transition-colors duration-300"
                            >
                              {item?.title}

                              <span className="pl-3">
                                <svg
                                  width="14"
                                  height="8"
                                  viewBox="0 0 14 8"
                                  className={`fill-current duration-200 xl:group-hover:-scale-y-100 ${dropdownToggler === item.id ? "max-xl:-scale-y-100" : ""}`}
                                >
                                  <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                </svg>
                              </span>
                            </button>
                            <ul
                              className={`${dropdownToggler === item.id ? "" : "hidden xl:block"} submenu relative left-0 top-full rounded-xl bg-white transition-all duration-300 group-hover:opacity-100 xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[260px] xl:p-5 xl:opacity-0 xl:shadow-xl xl:group-hover:visible xl:group-hover:top-full`}
                            >
                              {item?.submenu.map((submenuItem) => (
                                <li key={submenuItem?.id}>
                                  <Link
                                    href={submenuItem?.external ? submenuItem.href : `/${submenuItem.href}`}
                                    onClick={navigationHandler}
                                    className={`block rounded-lg px-4 py-3 text-sm transition-colors duration-300 ${pathUrl === `/${submenuItem?.href}` ? "text-primary font-bold" : "text-black hover:text-primary"}`}
                                  >
                                    {submenuItem?.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            href={
                              item?.href
                                ? item?.external
                                  ? item.href
                                  : item?.href
                                    ? `/${item.href}`
                                    : "/"
                                : "/"
                            }
                            onClick={navigationHandler}
                            className={`${pathUrl === `/${item?.href}` ? "text-primary font-bold" : ""} flex py-2.5 text-base text-black group-hover:text-primary xl:mr-0 xl:inline-flex xl:px-0 xl:py-7 font-medium transition-colors duration-300 ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                          >
                            {item?.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden items-center justify-end gap-5 pr-16 sm:flex xl:pr-0">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="hidden h-11 w-11 items-center justify-center rounded-full text-body-color hover:bg-gray-100 transition-colors duration-300 sm:flex"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_369_1884)">
                      <path
                        d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_369_1884">
                        <rect
                          width="17.2727"
                          height="17.2727"
                          fill="white"
                          transform="translate(0.363647 0.363647)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg sm:text-base sm:px-6 md:px-7 md:py-3 lg:rounded-lg lg:px-8 xl:px-9"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )}
    </>
  );
}
