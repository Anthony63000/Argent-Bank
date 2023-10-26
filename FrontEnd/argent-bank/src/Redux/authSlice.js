import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
    error: null,
    isLoading: false,
    isConnected: false
}

export const fetchLogIn = createAsyncThunk("logIn/fetchLogIn", async ({ email, password }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Échec de la requête de connexion');
    }

    const data = await response.json();
    return data;
});

const logInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers: {
        logout : (state) => {
            Cookies.remove('token')
            state.isConnected = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogIn.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchLogIn.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.body && action.payload.body.token) {
                    Cookies.set('token', action.payload.body.token, { 
                        secure: true, 
                        sameSite: 'strict',
                        expires: 30 / (24 * 60)
                    });
                    state.isConnected = true;
                    console.log(action.payload.body)
                }
            })
            
            .addCase(fetchLogIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { logout } = logInSlice.actions

export default logInSlice.reducer;

