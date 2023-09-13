import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
  "/tasksToDo/GET",
  async (_, ThunkAPI) => {
    try {
      const res = await fetch("/api/v1/tasksToDo", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      const data = await res.json();
      if (data) return ThunkAPI.fulfillWithValue(data.items);
    } catch (error) {
      return ThunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const createTasks = createAsyncThunk(
  "/tasksToDo/CREATE",
  async (taskData, ThunkAPI) => {
    try {
      const res = await fetch("/api/v1/tasksToDo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(taskData),
      });
      console.log(process.env.REACT_APP_API_KEY);
      const data = await res.json();
      if (data) return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue("something went wrong");
    }
  }
);
