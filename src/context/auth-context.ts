import { createContext } from "react";

const AuthContext = createContext<{
    accessToken: string | null;
    email: string | null;
    onAuthenticate: (accessToken: string, email: string) => void;
}>(null!);

export default AuthContext