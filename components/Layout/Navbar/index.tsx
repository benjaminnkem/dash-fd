"use client";

import ReviewNavPrev from "@/components/UI/Reviews/nav-preview";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(darkModeMediaQuery.matches);

    const darkModeListener = (event: MediaQueryListEvent) => {
      setDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", darkModeListener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeListener);
    };
  }, []);

  return (
    <nav className={`${pathname.startsWith("/reviews") ? "bg-[#f2f6fd]" : ""} duration-200`}>
      <div className="flex items-center justify-between container py-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              {!darkMode ? (
                <Image src={"/images/global/ic_logo.svg"} alt="logo" width={100} height={50} />
              ) : (
                <Image src={"/images/global/ic_logo_dark.svg"} alt="logo" width={100} height={50} />
              )}
            </Link>
          </div>

          {pathname.startsWith("/reviews") && (
            <>
              <div className="border gap-3 text-[#484851] dark:text-[#999999] border-[#d4dcf1] dark:border-none w-full rounded-md sm:flex hidden items-center px-2 bg-white dark:bg-[#242428] overflow-hidden">
                <Search size={16} className="text-primary" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="lg:min-w-[40rem] md:min-w-[30rem] min-w-[10rem] py-2 bg-transparent flex-grow placeholder:text-zinc-400 dark:placeholder:text-[#999999]"
                  defaultValue={"Bonny and Clyde Street, Ajao Estate, Lagos"}
                />
              </div>

              <Search size={16} className="text-primary sm:hidden" />
            </>
          )}
        </div>

        <div className="flex items-center gap-3">
          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Welcome!</p>
          <div className="size-[2.8rem] rounded-full relative overflow-hidden border-[3px] shadow-sm border-white">
            <Image
              src={"/images/global/profile_img.png"}
              alt="logo"
              width={200}
              height={200}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <ReviewNavPrev />
    </nav>
  );
};

export default Navbar;
