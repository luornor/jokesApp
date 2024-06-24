import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AlljokesApi } from "./AlljokesApi";


export const store = configureStore({
  reducer: {
    [AlljokesApi.reducerPath]: AlljokesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
        AlljokesApi.middleware,

    ]),
});

setupListeners(store.dispatch);
