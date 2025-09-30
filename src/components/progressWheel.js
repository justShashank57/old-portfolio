import React from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ percentage, circleWidth }) {
  const baseFontSize = 16; // Set your base font size in pixels here
  const radiusRem = 1.625; // Equivalent to 26px / baseFontSize
  const strokeWidthRem = 0.03125; // Equivalent to 0.5px / baseFontSize

  const dashArray = radiusRem * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  const circleWidthRem = circleWidth / baseFontSize;

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <svg
        width={`${circleWidthRem}rem`}
        height={`${circleWidthRem}rem`}
        viewBox={`0 0 ${circleWidthRem} ${circleWidthRem}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#12c2e9" />
            <stop offset="50%" stopColor="#c471ed" />
            {/* <stop offset="100%" stop-color="#f64f59"/> */}
          </linearGradient>
        </defs>
        <circle
          cx={circleWidthRem / 2}
          cy={circleWidthRem / 2}
          strokeWidth={`${strokeWidthRem}rem`}
          r={radiusRem}
          className="circleBackground"
        />

        <circle
          cx={circleWidthRem / 2}
          cy={circleWidthRem / 2}
          strokeWidth={`${strokeWidthRem}rem`}
          r={radiusRem}
          className="circleProgress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidthRem / 2} ${circleWidthRem / 2})`}
          stroke="url(#gradient)"
        />
      </svg>
    </motion.div>
  );
}
