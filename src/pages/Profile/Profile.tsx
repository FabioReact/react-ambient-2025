import Switch from '@/components/Switch';
import useAuthContext from '@/hooks/useAuthContext';
import useThemeContext from '@/hooks/useThemeContext';
// import { Switch } from 'antd';

// Mettre en place une section parametres. Cette section doit permettre de choisir entre le mode "light" et le mode "dark"
// Si le mode dark est choisi, alors la navbar et la page home auront un style particulier

const Profile = () => {
  const { accessToken, email, onAuthenticate } = useAuthContext();
  const { toggleDarkMode } = useThemeContext();
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    toggleDarkMode(checked);
  };
  return (
    <section>
      <h1>Profile</h1>
      {/* <AuthContext.Consumer>
        {(context) => (
          <>
            <p>{context.email}</p>
            <p>{context.accessToken}</p>
          </>
        )}
      </AuthContext.Consumer> */}
      <div>
        <h2>User Info</h2>
        <p>Email: {email}</p>
      </div>
      <div>
        <h2>Settings</h2>
        <label htmlFor="dark-mode">Dark mode:</label>
        <Switch id="dark-mode" onSwitch={onChange} defaultValue={true} />
      </div>
    </section>
  );
};

export default Profile;
