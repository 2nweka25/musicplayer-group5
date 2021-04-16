import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { docs } = await firestore.collection("songs").get();
    const allSongs = docs.map((doc) => doc.data());

    const randomSong = allSongs[Math.floor(Math.random() * allSongs.length)];

    res.status(200).json(randomSong);
  } catch (error) {
    res.status(500).json(error);
  }
};
