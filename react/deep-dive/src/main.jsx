import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppCard from './AppCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCard />
  </StrictMode>,
);
