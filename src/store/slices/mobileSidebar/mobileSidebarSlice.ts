import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const mobileSidebarSlice = createSlice({
  name: "mobileSidebar",
  initialState,
  reducers: {
    showMobileSidebar: (state) => {
      state.show = true;
    },
    hideMobileSidebar: (state) => {
      state.show = false;
    },
  },
});

export const { showMobileSidebar, hideMobileSidebar } =
  mobileSidebarSlice.actions;
export default mobileSidebarSlice.reducer;
