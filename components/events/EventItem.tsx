import React from "react";
import { dataType } from "@/utils/types/my-types";
import Calendar from "./../icons/Calendar";
import MapPin from "../icons/MapPin";
import Button from "../ui/Button";
//injectedTo---EventList.tsx

function EventItem(props: { event: dataType }) {
  const { id, title, date, location, image } = props.event;
  const formattedDate = new Date(date as string).toLocaleDateString("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location?.replace(", ", "\n");

  return (
    <div className="2xl:w-1/2 w-2/3 2xl:h-60 xl:h-48 lg:h-60 md:h-96 sm:h-80 h-72 rounded-lg my-4 mx-auto flex lg:flex-row flex-col relative bg-white shadow-lg dark:bg-secondaryClrDark">
      <img
        className="lg:w-1/3 w-full lg:h-full h-1/3 rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
        src={`/${image}`}
        alt={image}
      />
      <div className="flex flex-col justify-center p-6">
        <h5 className="mb-2 2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-md font-medium text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <div className="h-fit flex">
          <span className="mr-2 dark:text-white">
            <Calendar />
          </span>
          <h4 className="mb-4 2xl:text-2xl lg:text-base md:text-2xl sm:text-xl text-sm text-neutral-600 dark:text-neutral-200">
            {formattedDate}
          </h4>
        </div>
        <div className="h-fit flex items-center">
          <span className="mr-2 dark:text-white">
            <MapPin />
          </span>
          <h3 className="2xl:text-xl lg:text-xs md:text-xl sm:text-lg text-xs text-neutral-500 dark:text-neutral-300">
            {formattedAddress}
          </h3>
        </div>
        <div className="absolute right-4 bottom-4 text-neutral-900 dark:text-white">
          <Button itemId={id as string} />
        </div>
      </div>
    </div>
  );
}

export default EventItem;
