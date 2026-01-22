import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
         {/* Línea 8: Este es el contenedor con el borde de color (degradado) */}
<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7c3aed] to-[#00f5a0] p-[1px] shadow-[0_0_20px_rgba(124,58,237,0.3)]">
  
  {/* Línea 9: Este es el fondo oscuro interno que rodea al logo */}
  <div className="w-full h-full bg-[#05060b] rounded-[11px] grid place-items-center overflow-hidden">
    
    {/* Línea 10: Aquí va tu imagen. Ajusta w y h según necesites */}
    <img 
      src="https://res.cloudinary.com/dsprn0ew4/image/upload/v1769091229/IMG_3126_zwosm5.jpg" 
      alt="Logo" 
      className="w-7 h-7 object-contain" 
    />

  </div>
</div>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <div className="font-black tracking-widest text-sm text-white uppercase">RUN FOR IT</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Club • Community • Events</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {['Events', 'Shop', 'Community', 'Gallery', 'Challenges'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex gap-3 items-center">
          <a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white/80 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all" href="#community">
            Sign In
          </a>
          <a className="inline-flex items-center justify-center px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white bg-[#7c3aed] rounded-xl shadow-lg shadow-purple-500/20 hover:bg-[#6d28d9] transition-all" href="#events">
            JOIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
