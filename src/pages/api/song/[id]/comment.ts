import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { postedBy, text, songId } = req.body;

    const commentsCollection = firestore
      .collection("songs")
      .doc(songId)
      .collection("comments");

    try {
      await commentsCollection.add({
        postedBy,
        text,
      });

      const { docs } = await commentsCollection.get();

      const comments = docs.map((doc) => doc.data());

      res.status(201).json(comments);
    } catch (error) {
      res.status(501).json({ message: error });
    }
  }
};
