import { NextApiRequest, NextApiResponse } from "next"
import {firestore } from "../../../lib/firebase"
export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        const { postedBy, text, songId } = req.body;
        console.log(req.body)
        try {
         
               await firestore.collection('songs').doc(songId).collection("comments").add({
                    postedBy: postedBy,
                    text: text
                });
            
            res.status(201).json({ message: "successfully added a comment" })
        } catch (error) {
            res.status(501).json({ message: error })
        }
    }
}