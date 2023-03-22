import DropdownFilter from "@/components/events/DropdownFilter";
import { useRouter } from "next/router";
import React from "react";
import AllEvents from "./../../components/events/AllEvents";
import { getAllEvents } from "@/helpers/api-utils";
import { dataType } from "@/utils/types/my-types";

function Event(props: { events: Array<dataType> }) {
  const router = useRouter();
  const { events } = props;

  const setSlugPath = (year: string, month: string) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <div className="w-screen flex flex-col justify-center">
      <DropdownFilter setSlugPath={setSlugPath} />
      <AllEvents allEvents={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 36000,
  };
}

export default Event;
