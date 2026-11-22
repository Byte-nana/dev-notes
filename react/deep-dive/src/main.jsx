import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppXY from './AppXY.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppXY />
  </StrictMode>,
);
