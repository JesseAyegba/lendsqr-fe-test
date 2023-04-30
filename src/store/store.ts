import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/users/usersSlice";
import mobileSidebarReducer from "./slices/mobileSidebar/mobileSidebarSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    mobileSidebar: mobileSidebarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
