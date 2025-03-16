import React, { useState, useEffect } from 'react'
import './Rockets.css'

function Rockets() {

    const[rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch("/data/rocket.json")
        .then((response) => response.json())
        .then((data) => setRockets(data.rockets))
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);

  return (
    <div className="container">
        <ul className="blog-list">
            {rockets.map((rocket) =>(
            <li className="blog-card" key={rocket.id}>
                <div className="blog-image">
                    <img src={rocket.image} alt="" />
                </div>
                <div className="blog-content">
                    <h2 className="blog-title">{rocket.name}</h2>
                    <p className="blog-description">
                       {rocket.description}
                    </p>
                    <button className="blog-button">Reserve Rocket</button>
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Rockets