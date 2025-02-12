import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.tsx';
import HeroesList from './pages/HeroesList/HeroesList.tsx';
import Navbar from './layout/Navbar.tsx';
import Battle from './pages/Battle/Battle.tsx';
import Register from './pages/Register/Register.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './pages/Profile/Profile.tsx';
import AuthContext from './context/auth-context.ts';
import { useState } from 'react';

const client = new QueryClient();

const App = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  return (
    <AuthContext.Provider value={{
      accessToken: token,
      email,
      onAuthenticate: (accessToken, email) => {
        setEmail(email);
        setToken(accessToken);
      }
    }}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path='/' element={<Home />} />
              <Route path='/heroes' element={<HeroesList />} />
              <Route path='/battle' element={<Battle />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<p>404: Page not found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
