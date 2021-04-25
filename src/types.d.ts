interface Song {
  id: string;
  title: string;
  artist: string;
  artworkURL: string;
  audioURL: string;

  owner?: string;
  comments?: any[];
}

interface Playlist {
  name: string;
  songs: Songs;
}

type Songs = Song[];
type Playlists = Playlist[];
