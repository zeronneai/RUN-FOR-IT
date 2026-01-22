import React from 'react';

interface EventsSectionProps {
  showToast: (message: string) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ showToast }) => {
  const events = [
    {
      type: "Social Run",
      title: "Sunday Route • Post-Run Coffee",
      loc: "Historic Center",
      time: "07:00 AM",
      dist: "5K / 8K",
      desc: "Warm-up, light jog, and closing coffee. Perfect for getting to know the club."
    },
    {
      type: "Race Day",
      title: "New Year's 5K",
      loc: "Metropolitan Park",
      time: "08:00 AM",
      dist: "Competition",
      desc: "Run with the team, group photo, and social time. (Perfect for content 🔥)"
    },
    {
      type: "Special Challenge",
      title: "12h Non-Stop Challenge",
      loc: "Anywhere",
      time: "All Day",
      dist: "Accumulated",
      desc: "Upload your distance in 12h. Top averages will win exclusive drops."
    }
  ];

  return (
    <section id="events" className="py-16">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-white">Upcoming Events</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Premium vibe experiences: social runs, 5Ks, gatherings, and collaborative challenges.
            </p>
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white" onClick={() => showToast('Registration opening soon!')}>
            I want to join
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="group relative overflow-hidden p-6 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/[0.08] transition-all reveal">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff]"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{ev.type}</span>
              </div>
              <h3 className="text-xl font-black text-white mb-4 italic leading-tight">{ev.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">📍 {ev.loc}</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">🕘 {ev.time}</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">🏃 {ev.dist}</span>
              </div>

              <div className="h-[1px] bg-white/10 mb-6"></div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{ev.desc}</p>
              
              <button className="w-full py-3 rounded-xl bg-white/5 group-hover:bg-[#7c3aed] text-white text-[10px] font-black uppercase tracking-widest transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;