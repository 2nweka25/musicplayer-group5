import { NextApiRequest, NextApiResponse } from "next";
import { firestore, storage } from "lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = <{ id: string }>req.query;

  try {
    const document = await firestore.collection("songs").doc(id).get();
    const song = document.data();

    // const pathReference = storage.ref("songs/1.Alan Walker - Fade.mp3");
    // const gsRerence = storage.refFromURL(
    //   "gs://musicplayer-app.appspot.com/songs/1.Alan Walker - Fade.mp3"
    // );

    // const httpsReference = storage.refFromURL(
    //   "https://firebasestorage.googleapis.com/v0/b/musicplayer-app.appspot.com/o/songs%2F5.Janji%20-%20Heroes%20Tonight%20(feat.%20Johnning).mp3"
    // );

    // const downloadUrl = await pathReference.getDownloadURL();
    // const downloadUrl = await gsReference.getDownloadURL();
    // const downloadUrl = await httpsReference.getDownloadURL();

    // console.log(downloadUrl);

    return res.status(200).json(song);
  } catch (error) {
    res.status(500).json(error);
  }
};
