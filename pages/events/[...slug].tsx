import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "@/utils/functions/functions";
import EventList from "@/components/events/EventList";
import FilteredResultTitle from "@/components/events/FilteredResultTitle";
import Button from "@/components/ui/Button";

function FeaturedEvents() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <p className="mx-auto my-[30vh] font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-center text-black dark:text-white">
        ...Loading
      </p>
    );
  }

  const numYear = Number(filteredData[0]);
  const numMonth = Number(filteredData[1]);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2022 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="w-fit mx-auto flex flex-col items-center">
        <div className="w-fit h-[10vh] px-8 my-4 flex items-center dark:bg-indigo-500">
          <h1 className="2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-sm 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal font-xs text-black dark:text-indigo-900">
            Please adjust your date!
          </h1>
        </div>
        <Button buttonType="filtered-result-title" />
      </div>
    );
  }

  const filteredEvents = getFilteredEvents(numYear, numMonth);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="w-fit mx-auto flex flex-col items-center">
        <div className="w-fit h-[10vh] px-8 my-4 flex items-center dark:bg-indigo-500">
          <h1 className="2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-sm 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal font-xs text-black dark:text-indigo-900">
            No events found for the chosen filter!
          </h1>
        </div>
        <Button buttonType="filtered-result-title" />
      </div>
    );
  }

  return (
    <>
      <FilteredResultTitle year={numYear} month={numMonth} />
      <EventList events={filteredEvents} />
    </>
  );
}

export default FeaturedEvents;
