"use client";

import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number; // Duración de la animación en milisegundos
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetNumber,
  duration = 1000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetNumber / (duration / 10));
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(start);
    }, 10);
    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
