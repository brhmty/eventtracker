import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../utils/data/dummy-data";
import { dataType, iconsSize } from "@/utils/types/my-types";

interface typeState {
  allEvents: Array<dataType>;
  iconColor: string;
  iconSize: iconsSize;
}

const initialState: typeState = {
  allEvents: data,
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
    setIconColor(state, action: PayloadAction<string>) {
      state.iconColor = action.payload;
    },
    setIconSize(state, action: PayloadAction<iconsSize>) {
      state.iconSize = action.payload;
    },
  },
});

//reducerExports
export const { getAllEvents, setIconColor, setIconSize } = eventSlice.actions;

export default eventSlice.reducer;
