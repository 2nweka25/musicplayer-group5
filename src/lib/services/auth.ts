import axios from "axios";
import { auth } from "../firebase"

const signUp = async (formData: object | string) => {
    const { data } = await axios.post(`/api/auth/signup`, formData);
    return data;
};

const signIn = async (formData) => {
    const user = await auth.signInWithEmailAndPassword(formData.email, formData.password)
    return user;
};

const signOut = async () => {
    await auth.signOut()
    return true
}

const Auth = { signUp, signIn, signOut };

export default Auth;