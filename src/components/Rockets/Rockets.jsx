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
    <div class="container">
        <ul class="blog-list">
            {rockets.map((rocket) =>(
            <li class="blog-card" key={rocket.id}>
                <div class="blog-image">
                    <img src={rocket.image} alt="" />
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">{rocket.name}</h2>
                    <p class="blog-description">
                       {rocket.description}
                    </p>
                    <button class="blog-button">Reserve Rocket</button>
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Rockets