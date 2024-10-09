// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import styles from "./imageSlices.module.scss";
// import Image from "next/image";

// const ImageSlices: React.FC = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true }); 
//   const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");


//   // const slicePositions = [
//   //       { x: 390, y: -304, scale: 1.9, rotate: 318 },
//   //       { x: 410, y: 200, scale: 2.5, rotate: 1 },
//   //       { x: -74, y: -220, scale: 2.7, rotate: 52 },
//   //       { x: -198, y: 60, scale: 1.4, rotate: -45 },
//   //       { x: -130, y: 460, scale: 2.6, rotate: 30 },
//   //       { x: -258, y: 588, scale: 1.8, rotate: -60 },
//   //     ];

//   // const slicePositions = [
//   //   { x: "20.3vw", y: "-28.1vh", scale: 1.9, rotate: 318 },  // { x: 390px, y: -304px }
//   //   { x: "21.4vw", y: "18.5vh", scale: 2.5, rotate: 1 },     // { x: 410px, y: 200px }
//   //   { x: "-3.85vw", y: "-20.37vh", scale: 2.7, rotate: 52 }, // { x: -74px, y: -220px }
//   //   { x: "-10.3vw", y: "5.55vh", scale: 1.4, rotate: -45 },  // { x: -198px, y: 60px }
//   //   { x: "-6.77vw", y: "42.59vh", scale: 2.6, rotate: 30 },  // { x: -130px, y: 460px }
//   //   { x: "-13.44vw", y: "54.44vh", scale: 1.8, rotate: -60 },// { x: -258px, y: 588px }
//   // ];

//   const slicePositions = [
//     {
//       x: { desktop: "20.3vw", tablet: "25vw", mobile: "35vw" },
//       y: { desktop: "-28.1vh", tablet: "-25vh", mobile: "-20vh" },
//       scale: { desktop: 1.5, tablet: 1.7, mobile: 1.9 },
//       rotate: 318,
//     },
//     {
//       x: { desktop: "21.3vw", tablet: "27vw", mobile: "30vw" },
//       y: { desktop: "18.5vh", tablet: "22vh", mobile: "28vh" },
//       scale: { desktop: 2.1, tablet: 2.3, mobile: 2.5 },
//       rotate: 1,
//     },
//     {
//       x: { desktop: "-3.8vw", tablet: "-5vw", mobile: "-10vw" },
//       y: { desktop: "-20.4vh", tablet: "-18vh", mobile: "-15vh" },
//       scale: { desktop: 2.2, tablet: 2.5, mobile: 2.7 },
//       rotate: 52,
//     },
//     {
//       x: { desktop: "-10.3vw", tablet: "-15vw", mobile: "-20vw" },
//       y: { desktop: "6.2vh", tablet: "8vh", mobile: "10vh" },
//       scale: { desktop: 1.1, tablet: 1.3, mobile: 1.4 },
//       rotate: -45,
//     },
//     {
//       x: { desktop: "-7.2vw", tablet: "-10vw", mobile: "-15vw" },
//       y: { desktop: "42.4vh", tablet: "45vh", mobile: "48vh" },
//       scale: { desktop: 2.1, tablet: 2.3, mobile: 2.6 },
//       rotate: 30,
//     },
//     {
//       x: { desktop: "-14.8vw", tablet: "-20vw", mobile: "-25vw" },
//       y: { desktop: "54.6vh", tablet: "57vh", mobile: "60vh" },
//       scale: { desktop: 1.4, tablet: 1.6, mobile: 1.8 },
//       rotate: -60,
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setViewport("mobile");
//       } else if (window.innerWidth < 1024) {
//         setViewport("tablet");
//       } else {
//         setViewport("desktop");
//       }
//     };

//     handleResize(); 
//     window.addEventListener("resize", handleResize); 

//     // return () => {
//     //   window.removeEventListener("resize", handleResize); 
//     // };
//   }, []);

//   useEffect(() => {
//     if (isInView) {
//       setTimeout(() => {
//         controls.start(i => ({
//           x: 0,
//           y: 0,
//           scale: 1,
//           // rotate: 0,
//           rotate: 360 * 2 + 0,
//           transition: { duration: 2, ease: "easeInOut" },
//         }));
//       }, 2000);
//     }
//   }, [isInView, controls]);

//   return (
//     <div ref={ref} className={styles.image_container}>
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           className={`${styles.piece} ${styles[`piece_${i + 1}`]}`}
//           animate={controls}
//           initial={{
//             x: slicePositions[i].x[viewport],
//             y: slicePositions[i].y[viewport],
//             scale: slicePositions[i].scale[viewport],
//             rotate: slicePositions[i].rotate,
//           }}
//         >
//           <Image 
//             priority 
//             src={`/images/logo_${i + 1}.png`} 
//             alt={`Slice ${i + 1}`} 
//             width={500} 
//             height={360} 
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ImageSlices;

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./imageSlices.module.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useAfterLoad } from "@/helpers/useAfterLoad";

interface SlicePosition {
  x: {
    default: string;
    tablet: string;
    mobile480: string;
    mobile580: string;
    mobile: string;
  };
  y: {
    default: string;
    tablet: string;
    // mobile480: string;
    mobile: string;
  };
  scale: {
    default: number;
    tablet: number;
    mobile: number;
  };
  rotate: number;
}


const ImageSlices: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  // const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isMobile = useMediaQuery({ maxWidth: 478.99 });
  const isMobile480 = useMediaQuery({ minWidth: 480, maxWidth: 579.98 });
  const isMobile580 =  useMediaQuery({ minWidth: 580, maxWidth: 767.98 });
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023.98 });

  const slicePositions: SlicePosition[] = [
    {
      x: { default: "20.3vw", tablet: "25vw",mobile580:"10vw",mobile480:"10vw", mobile: "35vw" },
      y: { default: "-28.1vh", tablet: "-25vh", mobile: "-20vh" },
      scale: { default: 1.5, tablet: 1.7, mobile: 1.9 },
      rotate: 318,
    },
    {
      // x: { default: "21.3vw", tablet: "27vw", mobile: "40vw" },
      x: { default: "21.3vw", tablet: "27vw",mobile580:"100vw", mobile480:"102vw", mobile: "104vw" },
      y: { default: "18.5vh", tablet: "22vh", mobile: "28vh" },
      scale: { default: 2.1, tablet: 2.3, mobile: 2.4 },
      rotate: 1,
    },
    {
      x: { default: "-3.8vw", tablet: "-5vw",mobile580:"-17vw",mobile480:"-19vw", mobile: "-21vw" },
      y: { default: "-20.4vh", tablet: "-18vh", mobile: "-28vh" },
      scale: { default: 2.2, tablet: 2.5, mobile: 2.7 },
      rotate: 20,
    },
    // translateX(-21vw) translateY(-28vh) scale(2.7) rotate(20deg);
    {
      x: { default: "-10.3vw", tablet: "-15vw",mobile580:"40vw",mobile480:"40vw", mobile: "-20vw" },
      y: { default: "6.2vh", tablet: "8vh", mobile: "10vh" },
      scale: { default: 1.1, tablet: 1.3, mobile: 1.4 },
      rotate: -45,
    },

    {
      x: { default: "-7.2vw", tablet: "-10vw",mobile580:"10vw", mobile480:"10vw", mobile: "-15vw" },
      y: { default: "42.4vh", tablet: "45vh", mobile: "48vh" },
      scale: { default: 2.1, tablet: 2.3, mobile: 2.6 },
      rotate: 30,
    },
    {
      x: { default: "-14.8vw", tablet: "-20vw",mobile580:"200vw", mobile480:"200vw", mobile: "-25vw" },
      y: { default: "54.6vh", tablet: "57vh", mobile: "60vh" },
      scale: { default: 1.4, tablet: 1.6, mobile: 1.8 },
      rotate: -60,
    },
  ];
  const getResponsivePosition = (pos: SlicePosition) => {
    if (isMobile) return { x: pos.x.mobile, y: pos.y.mobile, scale: pos.scale.mobile };
    if(isMobile480) return { x: pos.x.mobile480, y: pos.y.mobile, scale: pos.scale.mobile };
    if(isMobile580) return { x: pos.x.mobile580, y: pos.y.mobile, scale: pos.scale.mobile };
    if (isTablet) return { x: pos.x.tablet, y: pos.y.tablet, scale: pos.scale.tablet };
    return { x: pos.x.default, y: pos.y.default, scale: pos.scale.default };
  };

  // useEffect(() => {
  //   if (isInView) {
  //     const timeoutId = setTimeout(() => {
  //       controls.start(i => ({
  //         x: 0,
  //         y: 0,
  //         scale: 1,
  //         rotate: 0,
  //         transition: { duration: 2, ease: "easeInOut" },
  //       }));
  //     }, 2000);
      
  //     return () => clearTimeout(timeoutId); // очищаємо таймер при розмонтуванні
  //   }
  // }, [isInView, controls]);
  useEffect(() => {
    if (isInView && isClient) {
      const timeoutId = setTimeout(() => {
        controls.start(i => ({
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 2, ease: "easeInOut" },
        }));
      }, 200000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, controls, isClient]);

  return (
    <div ref={ref} className={styles.image_container}>
      {[...Array(6)].map((_, i) => {
        const { x, y, scale } = getResponsivePosition(slicePositions[i]);
        return (
          <motion.div
            key={i}
            custom={i}
            className={`${styles.piece} ${styles[`piece_${i + 1}`]}`}
            animate={controls}
            initial={{ x, y, scale, rotate: slicePositions[i].rotate }}
          >
            <Image priority src={`/images/logo_${i + 1}.png`} alt={`Slice ${i + 1}`} width={300} height={160} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageSlices;





