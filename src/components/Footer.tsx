export function Footer() {
  return (
    <footer id="contact" className="bg-bg py-24 px-8 md:px-24 border-t border-fg/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-6xl md:text-9xl font-serif italic mb-12">Let's <br /> Create.</h2>
          <p className="text-lg opacity-60 max-w-md">
            Ready to elevate your digital presence? We're always looking for visionary partners to build something extraordinary.
          </p>
        </div>
        
        <div className="flex flex-col justify-end gap-12">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Contact</span>
              <a
                href="mailto:thegrainandgrid@gmail.com"
                className="text-lg hover:opacity-50 transition-opacity"
              >
                Email
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-4">Social</span>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/company/grainandgrid/" target="_blank" rel="noreferrer" className="text-lg hover:opacity-50 transition-opacity">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-fg/10 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-40">
            <span>© 2026 Grain & Grid</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
