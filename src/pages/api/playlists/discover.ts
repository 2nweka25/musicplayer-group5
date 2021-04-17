import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allSongs = firestore.collection("playlists").doc("discover");

  try {
    const { docs } = await allSongs.get();
    const discover = docs.map((doc) => doc.data());

    res.status(200).json(discover);
  } catch (error) {
    res.status(500).json(error);
  }
};
