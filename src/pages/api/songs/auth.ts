import { NextApiRequest, NextApiResponse } from "next"
import { auth } from "../../lib/firebase"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { email, password } = req.body;
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password)
            res.status(200).json({ user })
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }
}
