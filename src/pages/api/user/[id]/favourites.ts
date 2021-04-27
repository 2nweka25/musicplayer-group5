import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = <{ id: string }>req.query;

  const user = firestore.collection("users").doc(id);
  const favourites = user.collection("favourites");

  if (req.method === "POST") {
    try {
      const newSong: Song = req.body;
      favourites.add(newSong);
      res.status(201).json("Added song to favourites");
    } catch (error) {
      console.log(JSON.stringify(error));
      res.status(500).json(error);
    }
  }

  if (req.method === "GET") {
    try {
      const { docs } = await favourites.get();

      const data = docs.map((doc) => doc.data());

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
