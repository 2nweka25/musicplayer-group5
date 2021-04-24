import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = <{ id: string }>req.query;

  try {
    const song = firestore.collection("songs").doc(id);
    const { docs } = await song.collection("comments").get();

    const comments = docs.map((doc) => doc.data());

    if (!comments)
      return res
        .status(404)
        .json({ message: "No song commetns found with that id" });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};
