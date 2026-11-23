import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppClass from './AppClass.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClass />
  </StrictMode>,
);
