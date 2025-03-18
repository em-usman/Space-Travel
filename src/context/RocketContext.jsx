import React, { createContext, useState, useEffect } from 'react';

// Create a Context for managing rocket reservations
export const RocketContext = createContext();

export const RocketProvider = ({ children }) => {
    const [reservedRockets, setReservedRockets] = useState(() => {
        // Load from localStorage or default to an empty array
        const savedRockets = localStorage.getItem("reservedRockets");
        return savedRockets ? JSON.parse(savedRockets) : [];
    });

    // Effect to update localStorage whenever reservedRocket state changes
    useEffect(() => {
        localStorage.setItem("reservedRockets", JSON.stringify(reservedRockets));
    }, [reservedRockets]);

    /**
        Function to reserve a rocket
        Adds the rocket to the reserved list if it's not already there
        Updates state and saves to localStorage
     */
    const reserveRocket = (rocketName) => {
        setReservedRockets((prev) => {
            const updatedRockets = [...prev, rocketName];
            localStorage.setItem("reservedRockets", JSON.stringify(updatedRockets)); // Save to localStorage
            return updatedRockets;
        });
    };

    /**
        Function to cancel a rocket reservation
        Removes the rocket from the reserved list
        Updates state and saves to localStorage
     */
    const cancelReservation = (rocketName) => {
        setReservedRockets((prev) => {
            const updatedRockets = prev.filter((name) => name !== rocketName);
            localStorage.setItem("reservedRockets", JSON.stringify(updatedRockets)); // Save to localStorage
            return updatedRockets;
        });
    };

    // Provide the reserved rockets and functions to children components
    return (
        <RocketContext.Provider value={{ reservedRockets, reserveRocket, cancelReservation }}>
            {children}
        </RocketContext.Provider>
    );
};
