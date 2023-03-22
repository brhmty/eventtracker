import React from "react";
import EventList from "./EventList";
import { dataType } from "@/utils/types/my-types";

function AllEvents(props: { allEvents: Array<dataType> }) {
  const { allEvents } = props;
  return <EventList events={allEvents} />;
}

export default AllEvents;
