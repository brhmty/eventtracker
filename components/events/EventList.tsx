import React, { useEffect } from "react";
import EventItem from "./EventItem";
import { useDispatch } from "react-redux";
import { setIconColor, setIconSize } from "@/store/slices/eventSlice";
import { dataType } from "@/utils/types/my-types";

function EventList(props: { events: Array<dataType> }) {
  const dispatch = useDispatch();
  const { events } = props;

  useEffect(() => {
    dispatch(setIconColor("currentColor"));
    dispatch(setIconSize("eventList"));
  }, []);

  return (
    <div className="w-screen min-h-screen overflow-y-auto flex flex-col justify-center items-center bg-primaryClr dark:bg-primaryClrDark">
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventList;
