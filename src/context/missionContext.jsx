import React, { createContext, useState, useEffect } from "react";

// Create a Context for managing mission reservations
export const MissionContext = createContext();

const MissionProvider = ({ children }) => {
    // Load from localStorage or default to an empty array
    const [reservedMissions, setReservedMissions] = useState(() => {
        const savedMissions = localStorage.getItem("reservedMissions");
        return savedMissions ? JSON.parse(savedMissions) : [];
    });

    // Effect to update localStorage whenever reservedMissions state changes
    useEffect(() => {
        localStorage.setItem("reservedMissions", JSON.stringify(reservedMissions));
    }, [reservedMissions]);

    /**
         Function to join a mission
         Adds the mission to the reserved list if it's not already there
         Updates state and saves to localStorage
     */
    const joinMission = (missionName) => {
        setReservedMissions((prev) => {
            if (!prev.includes(missionName)) {
                const updatedMissions = [...prev, missionName];
                localStorage.setItem("reservedMissions", JSON.stringify(updatedMissions)); // Save to localStorage
                return updatedMissions;
            }
            return prev;
        });
    };

    /**
         Function to leave a mission
         Removes the mission from the reserved list
         Updates state and saves to localStorage
     */
    const leaveMission = (missionName) => {
        setReservedMissions((prev) => {
            const updatedMissions = prev.filter((name) => name !== missionName);
            localStorage.setItem("reservedMissions", JSON.stringify(updatedMissions)); // Save to localStorage
            return updatedMissions;
        });
    };

    // Provide the reserved missions and functions to children components
    return (
        <MissionContext.Provider value={{ reservedMissions, joinMission, leaveMission }}>
            {children}
        </MissionContext.Provider>
    );
};

export { MissionProvider };
export default MissionProvider;
