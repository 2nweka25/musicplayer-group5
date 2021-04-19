import axios from "axios";

  const postComment = async(data)=>{
    axios.post("/api/comments", data)
  }

const Comments = {postComment};


export default Comments;
