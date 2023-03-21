import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../utils/data/dummy-data";
import { dataType, iconsSize } from "@/utils/types/my-types";

interface typeState {
  allEvents: Array<dataType>;
  featuredEvents: object[];
  filteredEvents: object[];
  iconColor: string;
  iconSize: iconsSize;
}

const initialState: typeState = {
  allEvents: data,
  featuredEvents: [],
  filteredEvents: [],
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
    setIconColor(state, action: PayloadAction<string>) {
      state.iconColor = action.payload;
    },
    setIconSize(state, action: PayloadAction<iconsSize>) {
      state.iconSize = action.payload;
    },
  },
});

//reducerExports
export const { getAllEvents, getFeaturedEvents, setIconColor, setIconSize } =
  eventSlice.actions;

export default eventSlice.reducer;
