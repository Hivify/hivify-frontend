"use client";
import { useEffect, useRef, useState } from "react";

export default function HexagonOrb() {
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime = Date.now();
    let duration = 8000 + Math.random() * 6000;
    let startRotation = 0;
    let targetRotation = 30 + Math.random() * 120;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = progress * progress * (3 - 2 * progress);

      const currentRotation =
        startRotation + (targetRotation - startRotation) * eased;
      setRotation(currentRotation);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        startTime = Date.now();
        duration = 8000 + Math.random() * 6000;
        startRotation = currentRotation;
        targetRotation = startRotation + 30 + Math.random() * 120;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let startTime = Date.now();
    let duration = 12000 + Math.random() * 8000;
    let startX = 0;
    let startY = 0;
    let targetX = (Math.random() - 0.5) * 22;
    let targetY = (Math.random() - 0.5) * 22;

    const animateTilt = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = progress * progress * (3 - 2 * progress);

      const currentX = startX + (targetX - startX) * eased;
      const currentY = startY + (targetY - startY) * eased;
      setTilt({ x: currentX, y: currentY });

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animateTilt);
      } else {
        startTime = Date.now();
        duration = 12000 + Math.random() * 8000;
        startX = currentX;
        startY = currentY;
        targetX = (Math.random() - 0.5) * 12;
        targetY = (Math.random() - 0.5) * 12;
        requestRef.current = requestAnimationFrame(animateTilt);
      }
    };

    requestRef.current = requestAnimationFrame(animateTilt);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="relative w-full max-w-md aspect-square mx-auto perspective-midrange overflow-hidden"
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-amber-200/20 via-amber-300/10 to-amber-400/5 shadow-2xl shadow-amber-500/10" />

      <div className="absolute inset-0 rounded-full border-2 border-amber-300/30" />

      <div className="absolute inset-[5%] rounded-full bg-linear-to-br from-amber-400/5 to-transparent" />

      <div className="absolute inset-[8%] flex items-center justify-center">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern
                id="hive-pattern-orb"
                width="60"
                height="51.96"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(0.9)"
              >
                <polygon
                  points="30,0 60,15 60,38.97 30,51.96 0,38.97 0,15"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="1.2"
                  className="opacity-50"
                />
                <polygon
                  points="30,3 57,16.5 57,38.97 30,48.96 3,38.97 3,16.5"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="0.6"
                  opacity="0.3"
                />
                <polygon
                  points="60,25.98 90,40.98 90,64.95 60,77.94 30,64.95 30,40.98"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="1.2"
                  className="opacity-40"
                />
                <polygon
                  points="60,28.98 87,43.98 87,64.95 60,74.94 33,64.95 33,43.98"
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="0.6"
                  opacity="0.25"
                />
              </pattern>
            </defs>

            <circle
              cx="200"
              cy="200"
              r="190"
              fill="url(#hive-pattern-orb)"
              className="opacity-60"
            />

            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="#D4A017"
              strokeWidth="0.5"
              opacity="0.2"
            />

            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#scanGradient)"
              strokeWidth="3"
              opacity="0.7"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
                transition: "transform 0.3s ease-out",
              }}
            />

            <defs>
              <linearGradient
                id="scanGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="0;0.6;1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="20%" stopColor="#FFB300" stopOpacity="0.9">
                  <animate
                    attributeName="offset"
                    values="0.2;0.8;1.2"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="40%" stopColor="#FFD700" stopOpacity="0.4">
                  <animate
                    attributeName="offset"
                    values="0.4;1;1.4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="0.8;1.4;1.8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            <circle
              r="6"
              fill="#FFD700"
              className="shadow-[0_0_20px_rgba(255,179,0,0.8)]"
              style={{
                transform: `rotate(${rotation}deg) translateX(-175px)`,
                transformOrigin: "200px 200px",
                transition: "transform 0.3s ease-out",
              }}
            />
            <circle
              r="12"
              fill="#FFD700"
              opacity="0.2"
              style={{
                transform: `rotate(${rotation}deg) translateX(-175px)`,
                transformOrigin: "200px 200px",
                transition: "transform 0.3s ease-out",
              }}
            />
          </svg>
        </div>
      </div>

      <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-300 rounded-full opacity-40 animate-pulse" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-400 rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-amber-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-1/2 -right-6 w-1 h-1 bg-amber-300 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-1/2 -left-6 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-50 animate-pulse" />
    </div>
  );
}
