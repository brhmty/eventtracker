import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../public/data/dummy-data";
import { dataType } from "@/public/data/my-types";

interface typeState {
  allEvents: Array<dataType>;
  featuredEvents: object[];
  filteredEvents: object[];
  selectedEvent: object | undefined;
}

const initialState: typeState = {
  allEvents: data,
  featuredEvents: [],
  filteredEvents: [],
  selectedEvent: {},
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getAllEvents: (state) => {
      state.allEvents = data;
    },
    getFeaturedEvents: (state) => {
      state.featuredEvents = data.filter((event) => event.isFeatured);
    },
    getFilteredEvents(state, action) {
      const { year, month } = action.payload;

      let filteredEventList = data.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
        );
      });

      state.filteredEvents = filteredEventList;
    },
    getEventById(state, action: PayloadAction<string>) {
      state.selectedEvent = data.find((event) => event.id === action.payload);
    },
  },
});

//reducerExports
export const {
  getAllEvents,
  getFeaturedEvents,
  getFilteredEvents,
  getEventById,
} = eventSlice.actions;

export default eventSlice.reducer;
