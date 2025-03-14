import React from 'react'
import './Rockets.css'

function Rockets() {
  return (
    <div class="container">
        <ul class="blog-list">
            <li class="blog-card">
                <div class="blog-image">
                    <img src="./src/assets/rocket1.jpg" alt="" />
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">FALCON 1</h2>
                    <p class="blog-description">
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
                    </p>
                    <button class="blog-button">Reserve Rocket</button>
                </div>
            </li>
            <li class="blog-card">
                <div class="blog-image">
                <img src="./src/assets/rocket1.jpg" alt="" />
                </div>
                <div class="blog-content">
                    <h2 class="blog-title">FALCON 9</h2>
                    <p class="blog-description">
                        The Falcon 9 is a reusable rocket designed by SpaceX, known for its ability to land back on Earth after launching payloads into orbit.
                    </p>
                    <button class="blog-button">Reserve Rocket</button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Rockets