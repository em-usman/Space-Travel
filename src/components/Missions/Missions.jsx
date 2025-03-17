import React, { useEffect, useState, useContext } from "react";
import { MissionContext } from "../../context/missionContext";
import "./Missions.css";

function Missions() {

  const { reservedMissions, joinMission, leaveMission } = useContext(MissionContext);

  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("/data/mission.json")
      .then((response) => response.json())
      .then((data) => setMissions(data.missions))
      .catch((error) => console.log("Error fetching data:", error));
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
          {missions.map((mission) => {
            const isJoined = reservedMissions.includes(mission.name);

            return (
              <tr key={mission.id}>
                <td>{mission.name}</td>
                <td>{mission.description}</td>
                <td>
                  <div className="status-container">
                    <span className={`status ${isJoined ? "active-member" : "not-a-member"}`}>
                      {isJoined ? "Active Member" : "Not a Member"}
                    </span>
                    <button
                      className="join-button"
                      onClick={() => (isJoined ? leaveMission(mission.name) : joinMission(mission.name))}
                    >
                      {isJoined ? "Leave Mission" : "Join Mission"}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
