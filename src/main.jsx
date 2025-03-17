import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReservationProvider } from './context/RocketContext';
import { MissionProvider } from './context/missionContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(

  // Wrap App with MissionProvider and ReservationProvider
    <ReservationProvider>
        <MissionProvider> 
            <App />
        </MissionProvider>
    </ReservationProvider>
);
