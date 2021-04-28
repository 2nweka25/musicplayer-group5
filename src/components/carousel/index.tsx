import Song from "components/song";
import MultiCarousel from "react-multi-carousel";
import settings from "./settings";

import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Link as MuiLink } from "@material-ui/core";
import Link from "next/link";

interface Props {
  text: string;
  items: Songs;
}

const Carousel = ({ text, items }: any) => (
  <Box mt={3}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={1}
    >
      <Typography variant="h5">{text}</Typography>
      <Link href="/all" passHref>
        <MuiLink underline="none" color="textSecondary">
          Show All
        </MuiLink>
      </Link>
    </Box>

    <MultiCarousel {...settings}>
      {items.map((song: any) => (
        <Song key={song.id} {...song} />
      ))}
    </MultiCarousel>
  </Box>
);

export default Carousel;
