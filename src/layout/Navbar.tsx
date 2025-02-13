import { useAppSelector } from '@/redux/hooks';
import { NavLink, Outlet } from 'react-router';

const Navbar = () => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <nav className='dark:bg-gray-950 dark:text-white'>
        <ul className='flex justify-center gap-4'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/battle'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Battle
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/heroes'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/register'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className='dark:bg-gray-950 dark:text-white'>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
