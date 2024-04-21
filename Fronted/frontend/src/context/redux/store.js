import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./feature/dashboard/dashboard.slice";

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
    reducer: {
        dashboardSlice
    },
});
