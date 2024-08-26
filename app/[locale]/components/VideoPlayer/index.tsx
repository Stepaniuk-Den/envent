import videojs from "video.js";
import { useCallback, useEffect, useRef, useState } from "react";
import "video.js/dist/video-js.css";
import styles from "./videoPlayer.module.scss";

interface VideoPlayerProps {
  techOrder: string[];
  autoplay: boolean;
  controls: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

const throttle = (func: (...args: any[]) => void, limit: number) => {
  //   let inThrottle: boolean;
  let inThrottle = false;
  return function (...args: any[]) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

const VideoPlayer: React.FC<VideoPlayerProps> = (props: VideoPlayerProps) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isUserInteracted, setIsUserInteracted] = useState(false);
  //   const [pausedByUser, setPausedByUser] = useState(false);

  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      // || !document.body.contains(videoEl)
      return;
    }
    const player = videojs(videoEl, props);
    playerRef.current = player;

    //   ====== LOCALESTORAGE ======
    const savedTime = localStorage.getItem("video-current-time");
    if (savedTime) {
      player.currentTime(parseFloat(savedTime));
    }
    // if (player && player.currentTime) {
    const handleTimeUpdate = throttle(() => {
      const currentTime = player?.currentTime();
      if (currentTime !== undefined) {
        localStorage.setItem("video-current-time", currentTime.toString());
      }
    }, 1000);
    player.on("timeupdate", handleTimeUpdate);

    //   ====== INTERSECTIONOBSERVER ======
    const handlePlay = () => {
      setIsPlaying(true);
      //   setPausedByUser(false);

      if (!observerRef.current) {
        const videoObserver = new IntersectionObserver(
          ([entry]) => {
            console.log(entry);

            // if (pausedByUser) return;
            if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
              player.pause();
            } else if (entry.isIntersecting || entry.intersectionRatio == 1) {
              player.play()!.catch((error: any) => {
                console.error("Play failed:", error);
              });
            }
          },
          {
            threshold: [0.5],
          }
        );

        videoObserver.observe(videoEl);
        observerRef.current = videoObserver;
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
      //   setPausedByUser(true);
      observerRef.current?.disconnect();
      observerRef.current = null;
    };

    player.on("play", handlePlay);
    player.on("pause", handlePause);

    return () => {
      player.off("timeupdate", handleTimeUpdate);
      player.off("play", handlePlay);
      player.off("pause", handlePause);
      player.dispose();
      observerRef.current?.disconnect();

      //   observerRef.current?.disconnect();
      //   observerRef.current = null;
      //   if (playerRef.current) {
      //     playerRef.current.dispose();
      //     playerRef.current = null;
      //   }
    };
  }, [videoEl, props]);

  return (
    <div data-vjs-player>
      <video
        ref={onVideo}
        className={`video-js ${styles.videoJs} `}
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
