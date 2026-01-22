import React, { useState, useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [challengePercentage, setChallengePercentage] = useState(65);
  const bgImage = "https://res.cloudinary.com/dsprn0ew4/image/upload/v1769107065/IMG_3139_em0azi.jpg";

  useEffect(() => {
    const interval = setInterval(() => {
      setChallengePercentage(prev => {
        let next = prev + (Math.random() * 4 - 2);
        return Math.max(50, Math.min(90, next));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full overflow-hidden pt-6 pb-12">
      {/* Premium Background Composition */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        {/* Premium Gradient Overlay: Indigo to Cyan */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/80 via-[#030408]/60 to-[#0d9488]/40"></div>
        {/* Glow Blobs for depth */}
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-[#7c3aed]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-[#00d4ff]/15 rounded-full blur-[120px]"></div>
        {/* Central readability overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030408_90%)]"></div>
      </div>

      <div className="relative z-10 max-w-[var(--max)] w-[calc(100%-40px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center min-h-[70vh]">
        {/* Main Content */}
        <div className="reveal">
          <div className="flex gap-2 mb-6 flex-wrap">
            <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/80 backdrop-blur-md">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_#34d399]"></span>
              All Levels Welcome
            </span>
            <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/80 backdrop-blur-md">
              Weekly Routes
            </span>
          </div>

          <h1 className="text-6xl md:text-[84px] font-[900] leading-[0.9] tracking-[-0.05em] mb-6 text-white uppercase italic">
            Run Fast.<br/>
            Feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] via-[#00d4ff] to-[#7c3aed]">Alive</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-[50ch] leading-relaxed mb-10 font-medium">
            RUN FOR IT is the running club for those seeking pace, community, and high-energy events. Join a new generation of runners.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#events" className="px-8 py-4 bg-[#7c3aed] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl shadow-purple-500/30">
              View Upcoming Routes
            </a>
            <a href="#shop" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
              Explore Merch
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            <div>
              <div className="text-3xl font-black text-white">+2.4k</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Active Community</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">4 Runs/Wk</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Training Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">5K / 10K</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Goal Distances</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Elite</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-1">Premium Style</div>
            </div>
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="flex flex-col gap-6 lg:pl-10 reveal">
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl">
            <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">🔥 Club Challenge</div>
            <h3 className="text-xl font-black text-white mb-2 italic">100 KM Goal</h3>
            <p className="text-sm text-white/60 leading-snug mb-6">Stack up miles with the team. Consistency is our greatest reward.</p>
            
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 mb-3">
              <div 
                className="h-full bg-gradient-to-r from-[#00f5a0] to-[#00d4ff] transition-all duration-1000 ease-out shadow-[0_0_15px_#00f5a0]"
                style={{ width: `${challengePercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase">
              <span className="text-white/40">Global Progress</span>
              <span className="text-white">{challengePercentage.toFixed(0)}%</span>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#7c3aed]/20 to-transparent backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">🏃‍♂️ Next Run</div>
            <h3 className="text-xl font-black text-white mb-1">Sunday Session</h3>
            <div className="text-sm text-[#00f5a0] font-black uppercase tracking-widest mb-4">Social 5K • Coffee Stop</div>
            <div className="flex gap-4 items-center">
              <div className="text-center">
                <div className="text-lg font-black text-white">07:00</div>
                <div className="text-[8px] uppercase tracking-tighter text-white/40 font-bold">Time</div>
              </div>
              <div className="w-[1px] h-6 bg-white/10"></div>
              <div className="text-center">
                <div className="text-lg font-black text-white">Downtown</div>
                <div className="text-[8px] uppercase tracking-tighter text-white/40 font-bold">Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
