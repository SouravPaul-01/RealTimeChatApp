import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messages", // name of the message
  initialState: {
    message: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
