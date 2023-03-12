import React from "react";
import EventItem from "./EventItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { dataType } from "@/public/data/my-types";

function EventList() {
  const { allEvents } = useSelector((state: RootState) => state.events);

  return (
    <ul>
      {allEvents.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
}

export default EventList;
