import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    // Expose Lenis instance globally for navbar scrolling
    (window as any).lenisInstance = lenis;

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on('scroll', onLenisScroll);

    const updateOnTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateOnTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', onLenisScroll);
      gsap.ticker.remove(updateOnTicker);
      lenis.destroy();
      delete (window as any).lenisInstance;
    };
  }, []);

  return <>{children}</>;
}
