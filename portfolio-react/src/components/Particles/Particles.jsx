import React, { useMemo } from "react";
import "./Particles.css";

const rand = (min, max) => Math.random() * (max - min) + min;

const DEFAULT_COLORS = [
  "rgba(255, 0, 0, 0.18)",
  "rgba(255, 0, 242, 0.3)",
  "rgba(53, 228, 231, 0.29)",
  "rgba(96, 226, 122, 0.26)",
  "rgba(150, 96, 226, 0.28)",
  "rgba(226, 219, 96, 0.29)",
  "rgba(96, 226, 213, 0.33)"
];

export default function Particles({ count = 20, colors = DEFAULT_COLORS }) {
  // generate once per mount
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        size: Math.round(rand(20, 180)),            // px
        left: `${rand(0, 100).toFixed(2)}%`,
        top: `${rand(0, 100).toFixed(2)}%`,
        duration: `${rand(8, 26).toFixed(2)}s`,
        delay: `${rand(-8, 8).toFixed(2)}s`,        // negative allowed to stagger immediately
        color: colors[Math.floor(rand(0, colors.length))]
      })),
    [count, colors]
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
            background: `radial-gradient(circle, ${p.color}, transparent)`
          }}
        />
      ))}
    </div>
  );
}
