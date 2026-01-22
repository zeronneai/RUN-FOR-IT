import React from 'react';

interface ChallengesSectionProps {
  showToast: (message: string) => void;
}

const ChallengesSection: React.FC<ChallengesSectionProps> = ({ showToast }) => {
  return (
    <section id="challenges" className="py-16">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-white">Strava / Challenges</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              We keep the motivation high with leaderboards, streaks, and digital badges.
            </p>
          </div>
          <button
            className="px-8 py-3 bg-[#fc4c02] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl shadow-orange-500/20"
            onClick={() => showToast('🏁 Coming soon: Live Strava API connection')}
          >
            Connect Strava
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] reveal">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#fc4c02] mb-6">🔥 Weekly Challenge</div>
            <h3 className="text-2xl font-black text-white mb-4 italic leading-tight">100 KM Club</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8">Accumulate distance with the group. Effort counts more than any personal best.</p>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-3">
              <div className="h-full w-[62%] bg-gradient-to-r from-[#fc4c02] to-[#ff8c00] shadow-[0_0_15px_#fc4c02]"></div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-white/40">Global Progress</span>
              <span className="text-white">62%</span>
            </div>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] reveal">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#00d4ff] mb-6">🥇 Ranking (Demo)</div>
            <h3 className="text-2xl font-black text-white mb-6 italic">Top Runners</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm font-bold text-white/80 italic">1. Alex R.</span>
                <span className="text-xs font-black text-[#00d4ff]">42.3 km</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm font-bold text-white/80 italic">2. Mia S.</span>
                <span className="text-xs font-black text-[#00d4ff]">38.9 km</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm font-bold text-white/80 italic">3. Chris P.</span>
                <span className="text-xs font-black text-[#00d4ff]">33.1 km</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#7c3aed]/10 to-transparent border border-white/10 rounded-[32px] reveal">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#7c3aed] mb-6">🎁 Rewards</div>
            <h3 className="text-2xl font-black text-white mb-4 italic">Drops & Badges</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-10">Unlock discounts, early access to merch, and special shoutouts on our IG.</p>
            <button
              className="w-full py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
              onClick={() => showToast('🎁 Connect your profile to claim')}
            >
              Claim Reward
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;