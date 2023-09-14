import { createSlice } from "@reduxjs/toolkit";
import { createTasks, deleteTasks, editTasks, getTasks } from "./todo.thunks";

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
    //get tasks
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

    //create tasks
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

    //delete tasks
    [deleteTasks.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.tasks = state.tasks.filter(task => task._uuid !== action.payload) 
    },
    [deleteTasks.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteTasks.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //edit tasks
    [editTasks.fulfilled.type]: (state, { payload: { id, editedData } }) => {
      state.loading = false;
      state.error = null;
      const taskIndex = state.tasks.findIndex(task => task._uuid === id);
      state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...editedData };
    },
    
    [editTasks.pending.type]: (state) => {
      state.loading = true;
    },
    [editTasks.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default tasksSlice.reducer;
