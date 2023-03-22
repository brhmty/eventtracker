import React from "react";
import EventList from "./../components/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-utils";
import { dataType } from "@/utils/types/my-types";

function HomePage(props: { events: Array<dataType> }) {
  const { events } = props;
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
