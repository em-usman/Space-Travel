import React, { useContext } from 'react';
import { ReservationContext } from '../../context/ReservationContext';
import './Profile.css';

function Profile() {
  const {reservedRockets} = useContext(ReservationContext);

  
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
            <div className="card">
              No missions reserved
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;