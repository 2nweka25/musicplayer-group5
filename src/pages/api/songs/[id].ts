import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = <{ id: string }>req.query;

  try {
    const document = await firestore.collection("songs").doc(id).get();
    const data = document.data();

    if (!data)
      return res.status(404).json({ message: "No song found with that id" });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
