import React from "react";
import EventList from "./../components/events/EventList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function HomePage() {
  const { allEvents } = useSelector((state: RootState) => state.events);
  return (
    <div>
      <EventList events={allEvents} />
    </div>
  );
}

export default HomePage;
