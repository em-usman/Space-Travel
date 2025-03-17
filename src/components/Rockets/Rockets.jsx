import React, { useState, useEffect, useContext } from 'react';
import { ReservationContext } from '../../context/RocketContext'; // Import the context
import './Rockets.css';

function Rockets() {
    const [rockets, setRockets] = useState([]); // State to store fetched rocket data
    const { reservedRockets, reserveRocket, cancelReservation } = useContext(ReservationContext); // Get functions from context

    // Fetch rocket data from local JSON file when the component mounts
    useEffect(() => {
        fetch("/data/rocket.json")
            .then(response => response.json())
            .then(data => setRockets(data.rockets))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="container">
            <ul className="blog-list">
                {rockets.map((rocket) => {
                    const isReserved = reservedRockets.includes(rocket.name); // Check if rocket is reserved

                    return (
                        <li className="blog-card" key={rocket.id}>
                            <div className="blog-image">
                                <img src={rocket.image} alt={rocket.name} />
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">{rocket.name}</h2>
                                <p className="blog-description">
                                    {/* Show "Reserved" tag if the rocket is reserved */}
                                    {isReserved && <span className="reserved-tag">Reserved</span>}
                                    {rocket.description}
                                </p>
                                {/* Button toggles between "Reserve Rocket" and "Cancel Reservation" */}
                                <button 
                                    className={`blog-button ${isReserved ? 'cancel' : ''}`}
                                    onClick={() => isReserved ? cancelReservation(rocket.name) : reserveRocket(rocket.name)}
                                    style={{ backgroundColor: isReserved ? 'red' : '' }} // Change color to red when reserved
                                >
                                    {isReserved ? "Cancel Reservation" : "Reserve Rocket"}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Rockets;
