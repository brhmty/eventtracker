import React from "react";
import EventItem from "./EventItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function EventList() {
  const { allEvents } = useSelector((state: RootState) => state.events);

  return (
    <div className="w-screen min-h-screen overflow-y-auto flex flex-col items-center bg-cyan-100 dark:bg-slate-700">
      {allEvents.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventList;
