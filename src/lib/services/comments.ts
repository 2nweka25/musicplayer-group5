import axios from "axios";

interface Comment {
  postedBy: string,
  songId: string,
  text: string;
}

  const postComment = async(comment)=>{
    console.log("service file printing", comment)
    const { data } = await axios.post("/api/comments", comment)
    return data;
  };

const Comments = {postComment};


export default Comments;
