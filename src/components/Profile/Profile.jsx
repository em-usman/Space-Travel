import React, { useContext } from 'react';
import { RocketContext } from '../../context/RocketContext';
import { MissionContext } from '../../context/missionContext';
import './Profile.css';

function Profile() {
  // For rocket reservation
  const { reservedRockets } = useContext(RocketContext);

  // For mission reservation
  const { reservedMissions } = useContext(MissionContext);

  
  return (
    <div className="dashboard-container">

<div className="section">
      <h2>My Rockets</h2>

      <div className="list">
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket, index) => (
            <div key={index} className="card">
              {rocket} {/* Display only reserved rockets */}
            </div>
          ))
        ) : (
          <p>No rockets reserved.</p> // Show message when no rockets are reserved
        )}
      </div>
      </div>
  

      {/* Missions Section */}
      <div className="section">
        <h2>My Missions</h2>
        <div className="list">
          {reservedMissions.length > 0 ? (
            reservedMissions.map((mission, index) =>(
              <div key={index} className="card">
                {mission} {/* Display only reserved missions */}
            </div>
            ))
          ) :(
            <p>
            No missions reserved
          </p>// Show message when no mission are reserved
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;