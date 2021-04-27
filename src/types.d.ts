interface Song {
  id: string;
  title: string;
  artist: string;
  artworkURL: string;
  audioURL: string;
  comments: Comments;
}

interface Playlist {
  name: string;
  songs: Songs;
}

interface Comment {
  postedBy: string;
  text: string;
}

type Songs = Song[];
type Playlists = Playlist[];
type Comments = Comment[];
