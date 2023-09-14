import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
  "/tasksToDo/GET",
  async (_, ThunkAPI) => {
    try {
      const res = await fetch("/api/v1/tasksToDo", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
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
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify([taskData]),
      });
      const data = await res.json();
      if (data) return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(
        "something went wrong while creating the task"
      );
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "/tasksToDo/DELETE",
  async (id, ThunkAPI) => {
    try {
      await fetch(`/api/v1/tasksToDo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      return ThunkAPI.fulfillWithValue(id);
    } catch (error) {
      return ThunkAPI.rejectWithValue(
        "something went wrong with deleting the task"
      );
    }
  }
);
export const editTasks = createAsyncThunk(
  "/tasksToDo/EDIT",
  async ({ editedData, id }, ThunkAPI) => {
    try {
      await fetch(`/api/v1/tasksToDo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(editedData),
      });
      return ThunkAPI.fulfillWithValue({id, editedData});
    } catch (error) {
      return ThunkAPI.rejectWithValue(
        "something went wrong while creating the task edit"
      );
    }
  }
);
