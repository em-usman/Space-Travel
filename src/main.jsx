import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReservationProvider } from './context/ReservationContext'; // Correct import

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReservationProvider>
        <App />
    </ReservationProvider>
);
