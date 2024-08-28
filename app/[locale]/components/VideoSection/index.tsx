"use client";

import React from "react";
import styles from "./videoSection.module.scss";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import VideoPlayer from "../VideoPlayer";
import { Link, MainPageT } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";

const VideoSection: React.FC<{
  t: MainPageT["videoSection"];
}> = ({ t }) => {
  const videoJsOptions = {
    techOrder: ["html5"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "/videoPlayer/ventilation.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <section className={styles.videoSection}>
      <div className={`${styles.videoContainer} container`}>
        <div className={styles.videoDescWrapper}>
          <AnimatedTitle title={t.title} className={styles.videoTitle} />
          <Line className="yellow-left" />
          <p className={styles.videoDesc}>{t.text}</p>
          <MainButton color="blue" type="button">
            <Link href={"/about"}>{t.aboutUs}</Link>
          </MainButton>
        </div>
        <div className={styles.videoWrapper}>
          {/*====== VIDEO ====== */}
          <div className={styles.videoBox}>
            <VideoPlayer
              // poster="/images/projects/riverMall.jpg"
              {...videoJsOptions}
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
                {t.phone}
                <span className={styles.phoneNumber}>+38 (044) 503 83 79</span>
              </a>
            }
            secondChildren={
              <MainButton className="btnPaddingsLR" color="black" type="button">
                <Link href={"#"}>{t.btnForm}</Link>
              </MainButton>
            }
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
