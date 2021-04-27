import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Songs from "lib/services/song";
import AudioPlayer from "components/audio-player";
import Comments from "components/comments";

const PlaySong = () => {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<null | Song>(null);

  useEffect(() => {
    if (!id) return;

    Songs.findById(id).then((data) => setSong(data));
  }, [id]);

  return (
    <>
      <AudioPlayer {...song} />
      {/* <Comments /> */}
    </>
  );
};

export default PlaySong;
