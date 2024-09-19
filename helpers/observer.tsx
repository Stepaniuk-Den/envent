"use client";

import React, { useEffect, useRef, useState } from "react";

const Observer = ({
  children,
  threshold,
  duration,
  x,
  y,
  opacity,
  scale,
  once = true,
}: {
  children: React.ReactNode;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  once?: boolean;
}) => {
  x = x || 0;
  y = y || 0;
  opacity = opacity || 0;
  scale = scale || 0.5;

  const ref = useRef<HTMLDivElement | null>(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
            if (once) {
              observer.unobserve(ref.current!);
            }
          } else {
            if (!once) {
              setIntersecting(false);
            }
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
  }, [once]);
  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : `translate(0px, 0px)`,
        opacity: !intersecting ? opacity : 1,
        scale: !intersecting ? scale : 1,
      }}
      // className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}  // for tailwind css
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Observer;
