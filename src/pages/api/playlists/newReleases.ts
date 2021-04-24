import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const newReleases = firestore.collection("playlists").doc("newReleases");

  try {
    const { docs } = await newReleases.collection("songs").get();

    const songs = docs.map((document) => document.data());

    res.status(200).json({ name: "New Releases", songs });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
