import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId); // ✅ Stop loop
      lenis.destroy(); // ✅ Clean up Lenis instance
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
