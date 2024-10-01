import { useState, useEffect } from "react";

const isMobile = () => {
  const userAgent =
    typeof window !== "undefined" ? navigator.userAgent.toLowerCase() : "";

  const mobileRegex = /iphone|ipad|ipod|android|blackberry|windows phone/g;
  // const mobileRegex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  // const isIPad = /iPad/i.test(userAgent) || navigator.maxTouchPoints > 1;
  const isIPad =
    /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent) ||
    navigator.maxTouchPoints > 1;
  return mobileRegex.test(userAgent) || isIPad;
};

const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
    // const checkIsMobile = () => {
    // };

    // checkIsMobile();

    // window.addEventListener("resize", checkIsMobile);

    // return () => {
    //   window.removeEventListener("resize", checkIsMobile);
    // };
  }, []);

  return isMobileDevice;
};

export default useIsMobileDevice;
