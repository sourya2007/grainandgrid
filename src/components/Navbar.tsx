import { motion } from 'motion/react';

export function Navbar() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const lenisInstance = (window as any).lenisInstance;
      if (lenisInstance) {
        lenisInstance.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <img 
        src="/logo.png" 
        alt="Grain & Grid Logo" 
        className="h-8 w-auto object-contain"
      />
      
      <div className="flex gap-12 text-sm uppercase tracking-widest font-medium">
        <button onClick={() => handleNavClick('work')} className="hover:opacity-50 transition-opacity bg-none border-none cursor-pointer p-0 font-inherit">Work</button>
        <button onClick={() => handleNavClick('about')} className="hover:opacity-50 transition-opacity bg-none border-none cursor-pointer p-0 font-inherit">About</button>
        <button onClick={() => handleNavClick('contact')} className="hover:opacity-50 transition-opacity bg-none border-none cursor-pointer p-0 font-inherit">Contact</button>
      </div>
      
      <div className="text-sm font-medium">
        EST 2026
      </div>
    </motion.nav>
  );
}
