import data from "../utils/data/dummy-data";

export const getFilteredEvents = (year: number, month: number) => {
  return data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
};

export const getEventById = (eventId: string) => {
  return data.find((event) => event.id === eventId);
};
