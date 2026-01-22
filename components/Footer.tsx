import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/40">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto flex flex-col md:flex-row items-start md:justify-between gap-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7c3aed] to-[#00f5a0] p-[1px]">
              <div className="w-full h-full bg-black rounded-[11px] grid place-items-center">
                <span className="font-black text-lg text-white">R</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <div className="font-black tracking-widest text-sm text-white uppercase italic">RUN FOR IT</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Every Pace • Every Face</div>
            </div>
          </div>
          <p className="text-sm text-white/40 leading-relaxed">
            Premium landing page designed for the new generation of runners.
            Connectable with: <b>Strava</b>, <b>Shopify</b>, and <b>Firebase</b> for a full club experience.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Club</div>
            <a href="#events" className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Events</a>
            <a href="#shop" className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Merch</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Social</div>
            <a 
              href="https://www.instagram.com/runforitep/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest"
            >
              @runforitep
            </a>
            <a href="#community" className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Community</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/20">Legal</div>
            <a href="#" className="text-xs font-bold text-white/60 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
          </div>
        </div>
      </div>
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto mt-12 pt-8 border-t border-white/5">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
          © {new Date().getFullYear()} RUN FOR IT • MOVE FAST. FEEL ALIVE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;