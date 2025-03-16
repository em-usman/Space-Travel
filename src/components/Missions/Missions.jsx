import React, {useEffect, useState} from 'react';
import './Missions.css';

function Missions() {
 
  const[missions, setMissions] = useState([]);


  useEffect(() =>{
    fetch("/data/mission.json")
    .then((response) => response.json())
    .then((data) => setMissions(data.missions))
    .catch((error) => console.log("Error fetchig data:", error))
  }, []);

  return (
    <div className="missions-container">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>
              {mission.description}
            </td>
            <td>
              <div className="status-container">
                <span className="status not-a-member">NOT A MEMBER</span>
                <button className="join-button">Join Mission</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;