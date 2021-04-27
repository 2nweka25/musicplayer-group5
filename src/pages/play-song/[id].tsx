import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Songs from "lib/services/song";
import AudioPlayer from "components/audio-player";
import Comments from "components/comments";

const PlaySong = () => {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);
  const [comments, setComments] = useState<Comments | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    Songs.findById(id).then((song) => {
      setSong(song);
      setComments(song.comments);
      setIsLoading(false);
    });
  }, [id]);

  return (
    !isLoading && (
      <>
        <AudioPlayer {...song} setSong={setSong} />
        <Comments
          songId={song?.id}
          comments={comments}
          setComments={setComments}
        />
      </>
    )
  );
};

export default PlaySong;
