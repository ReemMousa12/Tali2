import React, { useState, useEffect, useMemo } from "react";

const circleColors = [
  'bg-lime-400/40',
  'bg-lime-500/30',
  'bg-white/20',
  'bg-purple-400/30',
  'bg-purple-600/20',
  'bg-pink-400/30',
  'bg-pink-600/20',
  'bg-blue-400/30',
  'bg-blue-600/20',
  'bg-teal-400/30',
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const floatingKeyframes = `
@keyframes floatY {
  0% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0); }
}`;

const FloatingCircles = ({ className = "z-10", numberOfCircles = 12 }) => {
  // Memoize circle configurations to prevent re-generation on re-renders
  const circleConfigs = useMemo(() => {
    return Array.from({ length: numberOfCircles }).map((_, i) => {
      const size = getRandomInt(18, 36);
      const columns = Math.ceil(Math.sqrt(numberOfCircles));
      const rows = Math.ceil(numberOfCircles / columns);
      const column = i % columns;
      const row = Math.floor(i / columns);
      const left = (column * (100 / columns)) + getRandomInt(2, (100 / columns) - 10); 
      const top = (row * (100 / rows)) + getRandomInt(2, (100 / rows) - 10);
      const color = circleColors[i % circleColors.length];
      const duration = 2.5 + Math.random() * 2.5; // 2.5s to 5s
      const delay = Math.random() * 2; // 0s to 2s
      
      return {
        size,
        left,
        top,
        color,
        duration,
        delay
      };
    });
  }, [numberOfCircles]); // Only regenerate if numberOfCircles changes

  useEffect(() => {
    // Inject keyframes into the document head once
    if (!document.getElementById('floating-circles-keyframes')) {
      const style = document.createElement('style');
      style.id = 'floating-circles-keyframes';
      style.innerHTML = floatingKeyframes;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {circleConfigs.map((config, i) => (
        <div
          key={i}
          className={`absolute rounded-full border border-white/30 shadow-lg ${config.color}`}
          style={{
            width: config.size,
            height: config.size,
            left: `${config.left}%`,
            top: `${config.top}%`,
            opacity: 0.85,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.35), inset 0 0 6px rgba(255,255,255,0.3)',
            filter: 'brightness(1.2)',
            backgroundBlendMode: 'normal',
            animation: `floatY ${config.duration}s ease-in-out ${config.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCircles;