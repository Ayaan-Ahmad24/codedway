"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    if (!dot) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovering = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("textarea") ||
          target.closest('[role="button"]') ||
          target.closest(".cursor-pointer"))
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const render = () => {
      // Lerp for smooth spring effect
      const ease = 0.2;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (dot) {
        dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

        if (isHovering) {
          dot.style.width = "28px";
          dot.style.height = "28px";
          dot.style.backgroundColor = "transparent";
          dot.style.border = "1px solid #C8FF57";
          dot.style.mixBlendMode = "normal";
        } else {
          dot.style.width = "8px";
          dot.style.height = "8px";
          dot.style.backgroundColor = "#C8FF57";
          dot.style.border = "none";
          dot.style.mixBlendMode = "difference";
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      id="custom-cursor"
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "9999px",
        backgroundColor: "#C8FF57",
        transition: "width 0.15s ease, height 0.15s ease, border 0.15s ease, background-color 0.15s ease",
        willChange: "transform",
      }}
    />
  );
}
