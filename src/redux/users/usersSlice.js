import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, {payload}) => {
     state.users =  state.users.filter(({id}) => id !== payload)
    }
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
