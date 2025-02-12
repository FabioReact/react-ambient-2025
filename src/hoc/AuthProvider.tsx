import AuthContext from '@/context/auth-context';
import { PropsWithChildren, useState } from 'react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider
      value={{
        accessToken: token,
        email,
        onAuthenticate: (accessToken, email) => {
          setEmail(email);
          setToken(accessToken);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
