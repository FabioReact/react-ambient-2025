import { NavLink, Outlet } from 'react-router';

const Navbar = () => {
  return (
    <>
      <nav>
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
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
