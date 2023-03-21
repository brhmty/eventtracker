import DropdownFilter from "@/components/events/DropdownFilter";
import { useRouter } from "next/router";
import React from "react";
import AllEvents from "./../../components/events/AllEvents";
import { getAllEvents } from "@/store/slices/eventSlice";

function Event() {
  const router = useRouter();
  const events = getAllEvents();

  const setSlugPath = (year: string, month: string) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <div className="w-screen flex flex-col justify-center">
      <DropdownFilter setSlugPath={setSlugPath} />
      <AllEvents />
    </div>
  );
}

export default Event;
