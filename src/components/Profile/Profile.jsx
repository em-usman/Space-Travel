import React from 'react';
import './Profile.css';

function Profile() {

  const missions = ["Thaicom", "AsiaSat"];
  const rockets = ["Falcon 1", "Falcon 9"];
  
  return (
    <div className="dashboard-container">
      {/* Missions Section */}
      <div className="section">
        <h2>My Missions</h2>
        <div className="list">
          {missions.map((mission, index) => (
            <div key={index} className="card">
              {mission}
            </div>
          ))}
        </div>
      </div>

      {/* Rockets Section */}
      <div className="section">
        <h2>My Rockets</h2>
        <div className="list">
          {rockets.map((rocket, index) => (
            <div key={index} className="card">
              {rocket}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;