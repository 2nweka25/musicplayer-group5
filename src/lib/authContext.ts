import { createContext, useContext } from "react";

interface User {
  email: string;
  uid: string;
}

const AuthContext = createContext<null | any>(null);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
