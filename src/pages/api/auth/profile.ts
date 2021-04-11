import { NextApiRequest, NextApiResponse } from "next"
import { auth, firestore } from "../../../lib/firebase"
export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        try {
            auth.onAuthStateChanged(async function (user) {
                if (!user) {
                    return res.status(404).json({ message: "user not found" })
                } else {
                    const data = firestore.collection('users').doc(user.uid)
                    const doc = await data.get();
                    return res.status(200).json({ user: doc.data() })
                }
            });
        } catch (error) {
            res.status(501).json({ message: error })
        }
    }
}
