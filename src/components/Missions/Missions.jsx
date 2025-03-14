import React from 'react';
import './Missions.css';

function Missions() {
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
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty King Bhumibol Adulyadej, as a symbol of linkage between Thailand and modern communications technology.
            </td>
            <td>
              <div className="status-container">
                <span className="status not-a-member">NOT A MEMBER</span>
                <button className="join-button">Join Mission</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Telstar</td>
            <td>
              Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 28 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lb) and surpassing the previous record, set by TerreStar-1 of 6,910 kg/15,233 lb), launched by Ariane 5ECA on 1 July 2009.
            </td>
            <td>
              <div className="status-container">
                <span className="status active-member">Active Member</span>
                <button className="leave-button">Leave Mission</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Missions;