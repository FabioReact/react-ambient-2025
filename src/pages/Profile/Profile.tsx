import { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Profile = () => {
  const { accessToken, email, onAuthenticate } = useContext(AuthContext);
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
      <p>{email}</p>
      <p>{accessToken}</p>
      <button onClick={() => {
        onAuthenticate('mon Token', 'mon Email')
      }} >Set User</button>
    </section>
  );
};

export default Profile;
