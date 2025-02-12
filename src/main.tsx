import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// react-hook-form: Gestion des formulaires
// react-query: Gestion des requetes (mise en cache)
// axios: Appel HTTP
// Zod: Validation de schema (formulaires avec erreurs)
// react-router: Gestion des routes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
