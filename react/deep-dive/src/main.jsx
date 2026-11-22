import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppMentorsImmer from './AppMentorsImmer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMentorsImmer />
  </StrictMode>,
);
