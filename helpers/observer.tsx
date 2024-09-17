"use client";

import React, { useEffect, useRef, useState } from "react";

const Observer = ({
  children,
  threshold,
  duration,
  x,
  y,
}: {
  children: React.ReactNode;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
}) => {
  x = x || 0;
  y = y || 0;

  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );
      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, []);
  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : `translate(0px, 0px)`,
        opacity: !intersecting ? 0 : 1,
        scale: !intersecting ? 0.7 : 1,
      }}
      // className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}  // for tailwind css
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Observer;
