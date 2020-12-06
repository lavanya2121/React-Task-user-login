import React from 'react';
import { Login } from "./components/Login";

export const requireAuth = (component) => {
    const accessToken = localStorage.getItem('access-token');
    if (!accessToken) {
        // clear localStorage
        localStorage.clear();

        return <Login />;
    }

    return component;
};
