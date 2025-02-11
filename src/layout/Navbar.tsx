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
              to='/heroes'
              className={({ isActive }) => {
                return isActive ? 'text-red-600' : '';
              }}
            >
              Heroes
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
