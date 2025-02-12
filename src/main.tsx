import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx';
import HeroesList from './pages/HeroesList/HeroesList.tsx';
import Navbar from './layout/Navbar.tsx';
import Battle from './pages/Battle/Battle.tsx';
import Register from './pages/Register/Register.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/heroes' element={<HeroesList />} />
          <Route path='/battle' element={<Battle />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<p>404: Page not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
