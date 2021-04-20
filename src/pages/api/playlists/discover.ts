import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const discover = firestore.collection("playlists").doc("discover");

  try {
    const { docs } = await discover.collection("songs").get();

    const songs = docs.map((document) => document.data());

    res.status(200).json({ name: "Discover", songs });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

