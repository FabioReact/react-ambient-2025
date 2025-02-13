import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.tsx';
import HeroesList from './pages/HeroesList/HeroesList.tsx';
import Navbar from './layout/Navbar.tsx';
import Battle from './pages/Battle/Battle.tsx';
import Register from './pages/Register/Register.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './pages/Profile/Profile.tsx';
import Login from './pages/Login/Login.tsx';
import SearchHeroes from './pages/SearchHeroes/SearchHeroes.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import PrivateRoute from './hoc/PrivateRoute.tsx';

const client = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path='/' element={<Home />} />
              <Route path='/battle' element={<Battle />} />
              <Route path='/heroes' element={<HeroesList />} />
              <Route path='/search' element={<SearchHeroes />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path='/profile' element={<Profile />} />
              </Route>
              <Route path='*' element={<p>404: Page not found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
