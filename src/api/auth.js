import axios from "axios";

export const login = async ({ email, password }) => {
    try {
        const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/test/all', {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error(error)

        /* throw error.response.data;

         */
    }
};

{/*

import React, { useState, useEffect, useContext } from 'react';

const login = () => {
    const [error, toggleError] = useState(false);

    const fetchData = async () => {
        toggleError(false);
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all');
            console.log(response.data);
        } catch (e) {
            console.error(e);
            console.log(error)
            toggleError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {pietje}
        </div>
    );
};


 */}