"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between container py-4">
        <div>
          <Link href={"/"}>
            <Image src={"/images/global/ic_logo.svg"} alt="logo" width={100} height={50} />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <p className="font-semibold text-zinc-800">Welcome!</p>
          <div className="size-[2.8rem] rounded-full relative overflow-hidden">
            <Image
              src={"/images/global/profile_img.png"}
              alt="logo"
              width={100}
              height={50}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
