import Switch from '@/components/Switch';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleDarkMode } from '@/redux/reducers/themeSlice';
// import { Switch } from 'antd';

// Mettre en place une section parametres. Cette section doit permettre de choisir entre le mode "light" et le mode "dark"
// Si le mode dark est choisi, alors la navbar et la page home auront un style particulier

const Profile = () => {
  const email = useAppSelector(state => state.auth.email);
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  const onChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <section>
      <h1>Profile</h1>
      <div>
        <h2>User Info</h2>
        <p>Email: {email}</p>
      </div>
      <div>
        <h2>Settings</h2>
        <label htmlFor="dark-mode">Dark mode:</label>
        <Switch id="dark-mode" onSwitch={onChange} defaultValue={isDarkMode} />
      </div>
    </section>
  );
};

export default Profile;
