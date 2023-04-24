import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authRedcer from "./authSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authRedcer },
});

export default store;
