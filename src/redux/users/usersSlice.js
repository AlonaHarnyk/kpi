import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addUser, getUsers, deleteUser } from "./operations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users = [...state.users, payload];
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(({ id }) => id !== payload.id);
      })
      .addMatcher(
        isAnyOf(addUser.pending, getUsers.pending, deleteUser.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(addUser.rejected, getUsers.rejected, deleteUser.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(addUser.fulfilled, getUsers.fulfilled, deleteUser.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      ),
});

export default userSlice.reducer;
