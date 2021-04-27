import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Songs from "lib/services/song";
import useAudioPlayer from "lib/hooks/useAudioPlayer";
import AudioPlayer from "components/audio-player";
import Comments from "components/comments";
import Navbar from "components/navbar";
import { Container } from "@material-ui/core";

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
      <Navbar />
      <Container>
        <AudioPlayer {...song} />
        {/* <Comments /> */}
      </Container>
    </>
  );
};

export default PlaySong;
