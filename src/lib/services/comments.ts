import axios from "axios";

interface Comment {
  user: string;
  comments: string;
}

  const postComment = async(comment: Comment)=>{
    const { data } = await axios.post("/api/comments", comment)
    return data;
  };

const Comments = {postComment};


export default Comments;
