import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TextPressure from './TextPressure';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.from(logoRef.current, {
      opacity: 0,
      x: -50,
      delay: 0.2,
    }, 0)
    .from(textContainerRef.current, {
      opacity: 0,
      x: 50,
      delay: 0.3,
    }, 0.1);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-between px-8 md:px-16 overflow-hidden bg-black gap-8 md:gap-12">
      <div className="basis-[58%] flex items-center justify-start">
        <img
          ref={logoRef}
          src="/logo.png"
          alt="Company Logo"
          className="h-[62vh] md:h-[86vh] w-full max-w-[980px] object-contain object-left"
        />
      </div>
      <div
        ref={textContainerRef}
        className="basis-[42%] min-w-[320px] max-w-[720px] flex flex-col gap-4"
      >
        <div style={{ position: 'relative', height: 'clamp(110px, 14vh, 160px)', overflow: 'hidden' }}>
          <TextPressure
            text="DESIGN"
            flex
            alpha
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
        <div style={{ position: 'relative', height: 'clamp(110px, 14vh, 160px)', overflow: 'hidden' }}>
          <TextPressure
            text="DEVELOP"
            flex
            alpha
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
        <div style={{ position: 'relative', height: 'clamp(110px, 14vh, 160px)', overflow: 'hidden' }}>
          <TextPressure
            text="DETAIL"
            flex
            alpha
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>
    </section>
  );
}
