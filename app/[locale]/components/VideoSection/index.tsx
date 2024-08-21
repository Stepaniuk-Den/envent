"use client";

import React, { useEffect, useRef } from "react";
import styles from "./videoSection.module.scss";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import NextVideo from "next-video";
import ventilationVideo from "@/videos/ventilation.mp4";
// import testVideo from "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);
        const video = entry.target as HTMLVideoElement;

        if (video.currentTime === 0) return;
        if (entry.isIntersecting || entry.intersectionRatio <= 0.2) {
          video.pause();
        } else {
          video.play();
        }
      },
      {
        threshold: [0.1, 0.8],
      }
    );

    if (videoRef.current) {
      //   console.log(videoRef.current);
      videoObserver.observe(videoRef.current);
    }

    // document
    //   .querySelectorAll("video")
    //   .forEach((video) => videoObserver.observe(video));

    //         return () = {
    //             if(videoRef.current) {
    //         videoObserver.unobserve(videoRef.current);
    //     }
    // };
  }, []);

  return (
    <section className={styles.videoSection}>
      <div className={`${styles.videoContainer} container`}>
        <div className={styles.videoDescWrapper}>
          <h2 className={styles.videoTitle}>
            We’ve Been Building For Over 10 Years
          </h2>
          <Line className="yellow-left" />
          <p className={styles.videoDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis
            nunc amet phasellus.
          </p>
          <MainButton color="yellow" type="button">
            About us
          </MainButton>
        </div>
        <div className="videoWrapper">
          <div className="videoBox">
            <NextVideo
              ref={videoRef}
              src={ventilationVideo}
              //   src={testVideo}
              controls
              className={styles.video}
              style={{ maxWidth: "1000px", height: "600px" }}
              accentColor="white"
              autoPlay
            />
          </div>

          <ButtonVariableColor
            className="blue_white"
            firstChildren={
              <a
                className={styles.phoneLink}
                href="tel:+380445038379"
                rel="noreferrer noopener nofollow"
              >
                <span className={styles.phoneTitle}>Call for a Quote</span>
                <span className={styles.phoneNumber}>+38 (044) 503 83 79</span>
              </a>
            }
            secondChildren={
              <div>
                <MainButton
                  className="btnPaddingsLR"
                  color="black"
                  type="button"
                >
                  Online estimate form
                </MainButton>
              </div>
            }
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
