import { MouseEventHandler, useEffect, useState } from "react";

import {
  Box,
  Container,
  IconButton,
  Slider,
  Typography,
} from "@material-ui/core";

import {
  GetApp,
  Pause,
  PlayArrow,
  Repeat,
  Replay,
  SkipNext,
  SkipPrevious,
  Star,
} from "@material-ui/icons";

import Artwork from "../../components/artwork";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";

import ReactHowler from "react-howler";
import Songs from "../../lib/services/song";
import useStyles from "./styles";

interface Song {
  artist: string;
  artworkURL: string;
  audioURL: string;
  comments: [];
  owner: string;
  title: string;
}

const PlaySong = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!id) return;

    Songs.findById(id).then((fetchedSong: Song) => setSong(fetchedSong));
  }, [id]);

  const handlePlay: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <ReactHowler
        src={`https://cors-anywhere.herokuapp.com/${song?.audioURL}`}
        playing={isPlaying}
      />
      <Navbar />
      <Container>
        <Artwork src={song?.artworkURL} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={4}
        >
          <GetApp />
          <Box>
            <Typography variant="h5">{song?.title}</Typography>
            <Typography>{song?.artist}</Typography>
          </Box>
          <Star />
        </Box>
        <Box textAlign="center" mt={2}>
          <IconButton className={classes.mediaControl}>
            <SkipPrevious />
          </IconButton>
          <IconButton className={classes.mediaControl} onClick={handlePlay}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton className={classes.mediaControl}>
            <SkipNext />
          </IconButton>
        </Box>
        <Box>
          <Slider />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Repeat />
          <Replay />
        </Box>
      </Container>
    </>
  );
};

export default PlaySong;

// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import ReactHowler from 'react-howler'
// import Artwork from '../../components/artwork'
// import Navbar from '../../components/navbar'
// import {Box, Typography, Container, IconButton, Slider} from '@material-ui/core'
// import { SkipNext, PlayArrow, SkipPrevious, Star, GetApp, Repeat, Replay} from '@material-ui/icons';
// import useStyles from './styles'
// import axios from 'axios'

// const Playsong =()=> {
//     const classes = useStyles();
//     const router = useRouter()
//     const { id } = router.query
//     const [isPlaying, setIsPlaying] = useState(false)
//     const [playingCurrentSong, SetPlayingCurrentSong] = useState()
//     const handlePlay = ()=> {setIsPlaying(true)}

//     useEffect(()=>{
//         const getSong = async()=>{
//             try {
//                 const {data} = await axios.post('/api/songs', {id})
//                 console.log(data)
//                 SetPlayingCurrentSong(data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getSong()

//     },[])
//     console.log(playingCurrentSong?.audioURL)
//     return (
//         <>
//             <ReactHowler src={playingCurrentSong ? playingCurrentSong.audioURL:''} playing={isPlaying} />
//             <Navbar/>
//             <Container>
//                 <Artwork src="/images/artwork/2.jpg"/>
//                 <Box display='flex' alignItems='center' justifyContent='space-between' mt={4} >
//                     <GetApp/>
//                     <Box>
//                         <Typography variant='h5'>Example title song</Typography>
//                         <Typography>Example artist name</Typography>
//                     </Box>
//                     <Star/>
//                 </Box>
//                 <Box textAlign='center' mt={2}>
//                     <IconButton><SkipPrevious/></IconButton>
//                     <IconButton onClick={handlePlay} className={classes.mediaControl}><PlayArrow/></IconButton>
//                     <IconButton><SkipNext/></IconButton>
//                 </Box>
//                 <Box>

//                     <Slider/>

//                 </Box>
//                 <Box display='flex' justifyContent='space-between'>
//                     <Repeat/>
//                     <Replay/>
//                 </Box>
//             </Container>
//         </>
//     )
// }

// export default Playsong
