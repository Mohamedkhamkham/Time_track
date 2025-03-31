import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CheckInProvider } from './context/CheckInContext'; // 👈 Importante

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <CheckInProvider>
        <App />
      </CheckInProvider>
    </StrictMode>
  </Router>
);
