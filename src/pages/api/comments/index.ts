import { NextApiRequest, NextApiResponse } from "next"
import {firestore } from "../../../lib/firebase"
export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        const { user, comment } = req.body;
        try {
         {
                firestore.collection('comments').doc(user.uid).set({
                    user: user,
                    comment: comment
                });
            }
            res.status(201).json({ user })
        } catch (error) {
            res.status(501).json({ message: error })
        }
    }
}