import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProfile />
  </StrictMode>,
);
