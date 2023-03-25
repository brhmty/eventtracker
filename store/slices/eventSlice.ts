import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { comment } from "../../utils/data/text";
import { iconsSize, commentType } from "@/utils/types/my-types";

interface typeState {
  iconColor: string;
  iconSize: iconsSize;
  showComments: boolean;
  btnCommentLabel: string;
  comments: Array<commentType>;
  newComment: boolean;
}

const initialState: typeState = {
  iconColor: "currentColor",
  iconSize: "eventList",
  showComments: false,
  btnCommentLabel: comment.showComment,
  comments: [],
  newComment: false,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setIconColor(state, action: PayloadAction<string>) {
      state.iconColor = action.payload;
    },
    setIconSize(state, action: PayloadAction<iconsSize>) {
      state.iconSize = action.payload;
    },
    showHideComment(state, action: PayloadAction<boolean>) {
      state.showComments = action.payload;
    },
    setBtnCommentLabel(state, action: PayloadAction<string>) {
      state.btnCommentLabel = action.payload;
    },
    setComments(state, action: PayloadAction<Array<commentType>>) {
      state.comments = action.payload;
    },
    isNewComment(state, action: PayloadAction<boolean>) {
      state.newComment = action.payload;
    },
  },
});

//reducerExports
export const {
  setIconColor,
  setIconSize,
  showHideComment,
  setBtnCommentLabel,
  setComments,
  isNewComment,
} = eventSlice.actions;

export default eventSlice.reducer;
