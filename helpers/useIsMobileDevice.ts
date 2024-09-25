import { useState, useEffect } from "react";

const isMobile = () => {
  const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
  const mobileRegex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
  return mobileRegex.test(userAgent);
};

const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileDevice(isMobile());
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobileDevice;
};

export default useIsMobileDevice;
