import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function MapPin() {
  const { iconColor, iconSize } = useSelector(
    (state: RootState) => state.events
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${
        iconSize === "eventId"
          ? "2xl:w-9 xl:w-7 lg:w-6 md:w-9 w-6 2xl:h-6 xl:h-8 lg:h-5 md:h-7 sm:h-4 h-4"
          : "2xl:w-9 lg:w-6 md:w-9 w-6 2xl:h-6 lg:h-5 md:h-7 sm:h-4 h-4"
      } mb-2 ${iconColor}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export default MapPin;
