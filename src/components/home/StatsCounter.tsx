"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter({
  stats,
  light = false,
}: {
  stats: { label: string; value: number; suffix: string }[];
  light?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 ${
              light ? "text-red-600" : "text-red-600"
            }`}
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </p>
          <p
            className={`text-sm font-medium ${
              light ? "text-white/70" : "text-neutral-600"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
