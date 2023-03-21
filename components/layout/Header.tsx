import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="w-screen h-16 flex justify-between bg-secondaryClrDark">
      <Link
        href="/"
        className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-sm 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold font-medium md:ml-16 ml-10 self-center text-btnClr dark:text-secondaryClr cursor-pointer"
      >
        NextEvents
      </Link>
      <Link
        href="/events"
        className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-xs 2x:font-extrabold xl:font-bold lg:font-semibold md:font-medium font-normal md:mr-16 mr-10 self-center text-btnClr dark:text-secondaryClr cursor-pointer"
      >
        Browse All Links
      </Link>
    </div>
  );
}

export default Header;
