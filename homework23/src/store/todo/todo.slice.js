import { createSlice } from "@reduxjs/toolkit";
import { createTasks, getTasks } from "./todo.thunks";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.pending.type]: (state) => {
      state.loading = true;
    },
    [getTasks.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.tasks = action.payload;
    },
    [getTasks.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createTasks.fulfilled.type]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [createTasks.pending.type]: (state) => {
      state.loading = true;
    },
    [createTasks.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default tasksSlice.reducer;
