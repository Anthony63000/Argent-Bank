import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    userProfile: "",
    error: null,
    isLoading : false,
};

export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async () => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get("token")}`
        }
    });

    if (!response.ok) {
        throw new Error('Échec de la requête de récupération du profil utilisateur');
    }

    const data = await response.json();
    return data;
});

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        clearUserProfile: (state) => {
            state.userProfile = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userProfile = action.payload.body;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;