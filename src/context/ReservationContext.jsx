import React, { createContext, useState, useEffect } from 'react';

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
    const [reservedRockets, setReservedRockets] = useState(() => {
        // Load from localStorage or default to an empty array
        const savedRockets = localStorage.getItem("reservedRockets");
        return savedRockets ? JSON.parse(savedRockets) : [];
    });

    // Save reserved rockets to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("reservedRockets", JSON.stringify(reservedRockets));
    }, [reservedRockets]);

    // Function to reserve a rocket
    const reserveRocket = (rocketName) => {
        setReservedRockets((prev) => {
            const updatedRockets = [...prev, rocketName];
            localStorage.setItem("reservedRockets", JSON.stringify(updatedRockets)); // Save to localStorage
            return updatedRockets;
        });
    };

    // Function to cancel a reservation
    const cancelReservation = (rocketName) => {
        setReservedRockets((prev) => {
            const updatedRockets = prev.filter((name) => name !== rocketName);
            localStorage.setItem("reservedRockets", JSON.stringify(updatedRockets)); // Save to localStorage
            return updatedRockets;
        });
    };

    return (
        <ReservationContext.Provider value={{ reservedRockets, reserveRocket, cancelReservation }}>
            {children}
        </ReservationContext.Provider>
    );
};
