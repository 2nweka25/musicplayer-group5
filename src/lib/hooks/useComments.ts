import Songs from "lib/services/song";
import {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

const useComments = (songId: string) => {
  const [comments, setComments] = useState<Comments | null>(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!songId) return;
    Songs.findById(songId).then((song) => setComments(song.comments));
  }, []);

  const toggleComments: MouseEventHandler<SVGSVGElement | HTMLElement> = () => {
    setShowComments(!showComments);
  };

  const postComment = async (comment: Comment, songId: string) => {
    comment.songId = songId;
    const newComments = await Songs.postComment(songId, comment);
    setComments(newComments);
  };

  return { comments, setComments, showComments, toggleComments, postComment };
};

export default useComments;
