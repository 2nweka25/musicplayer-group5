import Songs from "lib/services/song";
import { MouseEventHandler, useState } from "react";

const useComments = (setComments: any) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments: MouseEventHandler<SVGSVGElement | HTMLElement> = () => {
    setShowComments(!showComments);
  };

  const postComment = async (comment: Comment, songId: string) => {
    comment.songId = songId;
    const newComments = await Songs.postComment(songId, comment);
    setComments(newComments);
  };

  return { showComments, toggleComments, postComment };
};

export default useComments;
