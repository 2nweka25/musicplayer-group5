import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
import { camelToTitle, toCamelCase } from "lib";

const playlistsCollection = firestore.collection("playlists");

const getPlaylist = async (name: string) => {
  const { docs } = await playlistsCollection
    .doc(name)
    .collection("songs")
    .get();

  return { name: camelToTitle(name), songs: docs.map((doc) => doc.data()) };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { docs } = await playlistsCollection.get();

    const playlistNames = docs.map((doc) => toCamelCase(doc.data().label));

    const playlists = await Promise.all(
      playlistNames.map((name) => getPlaylist(name))
    );

    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
