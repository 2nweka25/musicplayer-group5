import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = <{ id: string }>req.query;

  const songsCollection = firestore.collection("songs");
  const commentsCollection = songsCollection.doc(id).collection("comments");

  try {
    const document = await songsCollection.doc(id).get();
    const song = document.data();

    const { docs } = await commentsCollection.get();
    const comments = docs.map((doc) => doc.data());

    if (!song)
      return res.status(404).json({ message: "No song found with that id" });

    song.comments = comments;

    res.status(200).json(song);
  } catch (error) {
    res.status(500).json(error);
  }
};
