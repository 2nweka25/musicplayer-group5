import { InputBase, InputAdornment, styled } from "@material-ui/core";

import Playlists from "lib/services/playlists";
import Carousel from "components/carousel";

import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";

const Index = () => {
  const [playlists, setPlaylists] = useState<null | Playlists>(null);

  useEffect(() => {
    Playlists.getAll().then((data) => setPlaylists(data));
  }, []);

  return (
    <>
      <Searchbar
        placeholder="Search a song"
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />

      {playlists?.map(({ name, songs }) => (
        <Carousel key={name} text={name} items={songs} />
      ))}
    </>
  );
};

const Searchbar = styled(InputBase)(({ theme }) => ({
  padding: "4px 16px",
  background: "#F0F0F0",
  color: "#949191",
  borderRadius: "20px",
  marginBottom: theme.spacing(2),
}));

export default Index;
