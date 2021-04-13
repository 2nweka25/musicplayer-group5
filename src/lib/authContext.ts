import { createContext, useContext } from "react";
import { UserInterface } from "../lib/firebase";

const AuthContext = createContext<null | UserInterface>(null);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
