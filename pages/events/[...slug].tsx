import React from "react";
import { getFilteredEvents } from "@/helpers/api-utils";
import EventList from "@/components/events/EventList";
import FilteredResultTitle from "@/components/events/FilteredResultTitle";
import Button from "@/components/ui/Button";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { dataType } from "@/utils/types/my-types";

function FeaturedEvents(props: {
  date: { numMonth: number; numYear: number };
  filteredEvents: Array<dataType>;
  hasError: boolean;
}) {
  const { date, filteredEvents, hasError } = props;

  if (hasError) {
    return (
      <div className="w-fit mx-auto pt-20 flex flex-col items-center">
        <div className="w-fit h-[10vh] px-8 my-4 flex items-center bg-red-200 dark:bg-indigo-500">
          <h1 className="2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-sm 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal font-xs text-red-800 dark:text-indigo-900">
            Please adjust your date!
          </h1>
        </div>
        <Button buttonType="filtered-result-title" />
      </div>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="w-fit mx-auto pt-20 flex flex-col items-center">
        <div className="w-fit h-[10vh] px-8 my-4 flex items-center bg-red-200 dark:bg-indigo-500">
          <h1 className="2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-sm 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal font-xs text-red-800 dark:text-indigo-900">
            No events found for the chosen filter!
          </h1>
        </div>
        <Button buttonType="filtered-result-title" />
      </div>
    );
  }

  return (
    <>
      <FilteredResultTitle year={date.numYear} month={date.numMonth} />
      <EventList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context: Params) {
  const filteredData = context.params.slug;

  const numYear = Number(filteredData[0]);
  const numMonth = Number(filteredData[1]);

  const filteredEvents = await getFilteredEvents(numYear, numMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2022 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  return {
    props: {
      date: {
        numYear: numYear,
        numMonth: numMonth,
      },
      filteredData: filteredData,
      filteredEvents: filteredEvents,
    },
  };
}

export default FeaturedEvents;
