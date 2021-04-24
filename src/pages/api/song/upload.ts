import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`song api runs from api/song/upload`, req.body);
  const {
    img,
    song,
    userId,
    title,
    description,
    tags,
    first_name,
    last_name,
  } = req.body;

  try {
    const document = await firestore.collection("songs").add({
      artist: `${first_name} ${last_name}`,
      artworkURL: img,
      description: description,
      audioURL: song,
      comments: [],
      owner: userId,
      title: title,
      tags: tags,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};
