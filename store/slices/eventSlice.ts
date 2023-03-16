import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../utils/data/dummy-data";
import { dataType, iconsSize } from "@/utils/types/my-types";

interface typeState {
  allEvents: Array<dataType>;
  featuredEvents: object[];
  filteredEvents: object[];
  selectedEvent: dataType;
  iconColor: string;
  iconSize: iconsSize;
}

const initialState: typeState = {
  allEvents: data,
  featuredEvents: [],
  filteredEvents: [],
  selectedEvent: data[0],
  iconColor: "currentColor",
  iconSize: "eventList",
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
    setEventById(state, action: PayloadAction<string>) {
      state.selectedEvent = data.find(
        (event) => event.id === action.payload
      ) as object;
    },
    setIconColor(state, action: PayloadAction<string>) {
      state.iconColor = action.payload;
    },
    setIconSize(state, action: PayloadAction<iconsSize>) {
      state.iconSize = action.payload;
    },
  },
});

//reducerExports
export const {
  getAllEvents,
  getFeaturedEvents,
  getFilteredEvents,
  setEventById,
  setIconColor,
  setIconSize,
} = eventSlice.actions;

export default eventSlice.reducer;
