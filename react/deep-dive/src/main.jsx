import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppMentorsReducer from './AppMentorsReducer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMentorsReducer />
  </StrictMode>,
);
