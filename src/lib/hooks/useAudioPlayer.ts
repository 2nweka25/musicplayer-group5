import Songs from "lib/services/song";
import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";

type EventHandler = MouseEventHandler<HTMLButtonElement>;

const useAudioPlayer = (setSong: any) => {
  const router = useRouter();

  const [isPlaying, setIsPlaying] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handlePlay: EventHandler = (e) => {
    setIsPlaying(!isPlaying);
  };

  const handleNext: EventHandler = async () => {
    const randomSong = await Songs.getRandomSong();
    setSong(randomSong);
    router.push(`/play-song/${randomSong.id}`, undefined, { shallow: true });
  };

  const handlePrevious: EventHandler = () => {
    router.back();
  };

  return { isPlaying, handlePlay, handlePrevious, handleNext };
};

export default useAudioPlayer;
