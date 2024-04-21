import { createAsyncThunk } from "@reduxjs/toolkit";
import { URLBASE } from "../../../../utils/const";

export const getUsers = createAsyncThunk(
    "dashboard/getUsers",
    async () => {
        try {
            const response = await fetch(`${URLBASE}/Prueba/Usuarios`);
            return response.json();
        } catch (error) {
            // alert("Error al obtener los usuarios");
        }
    }
);

export const getProjects = createAsyncThunk(
    "dashboard/getProjects",
    async () => {
        try {
            const response = await fetch(`${URLBASE}/Prueba/Proyectos`);
            return response.json();
        } catch (error) {
            // alert("Error al obtener los proyectos");
        }
    }
);

export const createProjects = async (data) => {
    try {
        const response = await fetch(`${URLBASE}/postProjects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        // alert("Error al crear el proyecto");
    }
};

export const getTasks = createAsyncThunk(
    "dashboard/getTasks",
    async (id) => {
        try {
            const response = await fetch(`${URLBASE}/getTasks${id}`);
            return response.json();
        } catch (error) {
            // alert("Error al obtener las tareas");
        }
    }
);

export const createTasks = async (data) => {
    try {
        const response = await fetch(`${URLBASE}/postTasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();

    } catch (error) {
        // alert("Error al crear la tarea");
    }
};