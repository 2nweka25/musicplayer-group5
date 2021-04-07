import { NextApiRequest, NextApiResponse } from "next"
import { auth, firestore } from "../../../lib/firebase"
export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        const { email, password, firstname, lastname, username } = req.body;
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
                var user = userCredential.user;
                firestore.collection('users').doc(user.uid).set({
                    email: email,
                    password: password,
                    first_name: firstname,
                    last_name: lastname,
                    username: username
                });
            })
            res.status(201).json({ user })
        } catch (error) {
            res.status(501).json({ message: error })
        }
    }
}
