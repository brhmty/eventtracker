import { dataType } from "@/utils/types/my-types";

export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-37af1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events: Array<dataType> = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
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
