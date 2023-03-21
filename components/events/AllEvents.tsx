import React from "react";
import EventList from "./EventList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function AllEvents() {
  const { allEvents } = useSelector((state: RootState) => state.events);
  return <EventList events={allEvents} />;
}

export default AllEvents;
