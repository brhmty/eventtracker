import { dataType } from "@/utils/types/my-types";

export async function getAllEvents() {
  let response;

  try {
    response = await fetch(`${process.env.FIREBASE_URL}`);
  } catch (e) {
    console.log("Fetching data from api failed!");
    return [];
  }

  const events: Array<dataType> = [];

  if (response) {
    const data = await response.json();
    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(eventId: string) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === eventId);
}

export async function getFilteredEvents(year: number, month: number) {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => {
    const eventDate = new Date(event.date as string);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
