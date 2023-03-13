import React, { ReactNode } from "react";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";

function Button(props: { itemId: string }) {
  const { itemId } = props;
  return (
    <div className="flex justify-center space-x-2">
      <Link
        data-te-ripple-init
        data-te-ripple-color="light"
        href={`/events/${itemId}`}
        className="md:w-max w-fit inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal flex bg-green-400 dark:bg-primary text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] whitespace-nowrap"
      >
        <span className="lg:text-md md:text-lg text-[8px]">
          {" "}
          Explore Event{" "}
        </span>
        <span className="md:ml-2 ml-1">
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default Button;
