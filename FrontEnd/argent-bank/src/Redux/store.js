import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

import logInReducer from "./authSlice.js";
import userProfileReducer from "./userSlice.js"
import updateUserNameReducer from "./UpdateNameSlice.js";

export const store = configureStore({
  reducer: {
    logIn: logInReducer,
    userProfile: userProfileReducer,
    user : updateUserNameReducer,
  },
}, composeWithDevTools());
