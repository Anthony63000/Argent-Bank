import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userName: null,
  error: null,
  isLoading: false,
};

export const updateUserName = createAsyncThunk(
  "user/updateUserName",
  async ({ userName }) => {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`, 
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      const data = await response.json();
      return data;
    } 
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.body.userName; 
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;