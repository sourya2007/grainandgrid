import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Ethereal",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/ethereal/1200/1600",
    video: "/videos/Intro_animation_video_202603312112.mp4",
  },
  {
    title: "Lumina",
    category: "Art Direction",
    image: "https://picsum.photos/seed/lumina/1200/1600",
    video: "/videos/original-344b5e91491652dac5d1ae459ccb6592.mp4",
  },
  {
    title: "Vortex",
    category: "Motion Design",
    image: "https://picsum.photos/seed/vortex/1200/1600",
    video: "/videos/original-aa278b83a06a697c8c6be9295735d132.mp4",
  },
];

export function WorkGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-card');
    const totalShift = () => {
      if (!horizontalRef.current) return 0;
      return Math.max(horizontalRef.current.scrollWidth - window.innerWidth, 0);
    };
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + totalShift(),
        invalidateOnRefresh: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="work" className="bg-bg overflow-hidden">
      <div ref={horizontalRef} className="flex h-screen" style={{ width: `${PROJECTS.length * 100}vw` }}>
        {PROJECTS.map((project, i) => (
          <div 
            key={i} 
            className="project-card relative w-screen h-screen flex items-center justify-center p-8 md:p-24"
          >
            <div className="relative w-full h-full group overflow-hidden rounded-2xl">
              {project.video ? (
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onCanPlay={(event) => {
                    const video = event.currentTarget;
                    void video.play().catch(() => {
                      // Ignore autoplay rejection; muted playback is attempted again when possible.
                    });
                  }}
                />
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm uppercase tracking-widest mb-2">{project.category}</span>
                    <h2 className="text-6xl md:text-8xl font-serif italic">{project.title}</h2>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
