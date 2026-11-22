import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppMentors from './AppMentors.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMentors />
  </StrictMode>,
);
