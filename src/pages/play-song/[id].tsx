import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Songs from "lib/services/song";
import AudioPlayer from "components/audio-player";
import Comments from "components/comments";
import useComments from "lib/hooks/useComments";

const PlaySong = () => {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);

  const { comments, setComments } = useComments();

  useEffect(() => {
    if (!id) return;

    Songs.findById(id).then((song) => {
      setSong(song);
      setComments(song.comments);
    });
  }, [id]);

  return (
    <>
      <AudioPlayer {...song} setSong={setSong} />
      <Comments songId={song?.id} comments={comments} />
    </>
  );
};

export default PlaySong;
