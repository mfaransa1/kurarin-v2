"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  y?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  y = 32,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionTransform = {
    up: `translateY(${y}px)`,
    left: "translateX(-32px)",
    right: "translateX(32px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : directionTransform[direction],
      }}
      className={`
        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "opacity-100"
            : "opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}