import React, { useEffect } from "react";
import EventItem from "./EventItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setIconColor, setIconSize } from "@/store/slices/eventSlice";

function EventList() {
  const { allEvents } = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIconColor("currentColor"));
    dispatch(setIconSize("eventList"));
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-y-auto flex flex-col justify-center items-center bg-primaryClr dark:bg-primaryClrDark">
      {allEvents.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventList;
