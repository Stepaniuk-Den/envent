"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./videoSection.module.scss";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";

const VideoSection = () => {
  const [pausedByUser, setPausedByUser] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (!videoElement) return;

    const handlePause = () => {
      setPausedByUser(true);
    };

    const handlePlay = () => {
      setPausedByUser(false);
    };

    videoElement.addEventListener("pause", handlePause);
    videoElement.addEventListener("play", handlePlay);

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        // const video = entry.target as HTMLVideoElement;

        if (pausedByUser || videoElement.currentTime === 0) return;
        if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
      },
      {
        threshold: [0.5],
      }
    );

    videoObserver.observe(videoElement);

    // videoElement.addEventListener("pause", () => {
    //   if (!videoElement.ended) {
    //     setPausedByUser(true);
    //     videoObserver.unobserve(videoElement);
    //   }
    // });

    // videoElement.addEventListener("play", () => {
    //   setPausedByUser(false);
    // });

    return () => {
      videoElement.removeEventListener("pause", handlePause);
      videoElement.removeEventListener("play", handlePlay);
      videoObserver.unobserve(videoElement);
    };
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
        <div className={styles.videoWrapper}>
          <div className={styles.videoBox}>
            <video
              style={{
                width: "100%",
                height: "100%",
              }}
              poster="/images/projects/riverMall.jpg"
              // muted
              // autoPlay
              loop
              controls
              preload="none"
              playsInline
            >
              <source
                width="100%"
                src="/video/ventilation.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <ButtonVariableColor
            className="blue_white"
            firstChildren={
              <a
                className={styles.phoneLink}
                href="tel:+380445038379"
                rel="noreferrer noopener nofollow"
              >
                Call for a Quote
                <span className={styles.phoneNumber}>+38 (044) 503 83 79</span>
              </a>
            }
            secondChildren={
              <MainButton className="btnPaddingsLR" color="black" type="button">
                Online estimate form
              </MainButton>
            }
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
