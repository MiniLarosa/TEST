import { createSlice } from "@reduxjs/toolkit";
import { getProjects, getTasks, getUsers } from "./services";
const initialState = {
    dashboard: {
        isLoading: false,
        users: null,
        projects: null,
        tasks: null,
    }
} 

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
        addCase(getUsers.fulfilled, (state, {payload}) => {
            state.dashboard.users = payload;
        });

        addCase(getProjects.fulfilled, (state, {payload}) => {
            state.dashboard.projects = payload;
        });

        addCase(getTasks.fulfilled, (state, {payload}) => {
            state.dashboard.tasks = payload;
        });
    }
});

export default dashboardSlice.reducer;