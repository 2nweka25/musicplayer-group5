import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { img, song, userId, title, description, tags, first_name, last_name } = req.body;
    try {
        const data = await firestore.collection("songs").add({
            artist: `${first_name} ${last_name}`,
            artworkURL: img,
            description: description,
            audioURL: song,
            comments: [],
            owner: userId,
            title: title,
            tags: tags,
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
