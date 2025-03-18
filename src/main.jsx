import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RocketProvider } from './context/RocketContext';
import { MissionProvider } from './context/missionContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(

  // Wrap App with MissionProvider and ReservationProvider
    <RocketProvider>
        <MissionProvider> 
            <App />
        </MissionProvider>
    </RocketProvider>
);
