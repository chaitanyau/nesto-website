// SmoothScroll.tsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // @ts-ignore
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,       // smaller = smoother
      wheelMultiplier: 1, // adjust scroll speed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);

  return <>{children}</>;
}
