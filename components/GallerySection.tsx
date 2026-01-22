import React, { useState, useRef, useEffect } from 'react';

interface VideoCardProps {
  title: string;
  type: string;
  videoUrl: string;
  isActive: boolean;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, type, videoUrl, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      onPlay();
      videoRef.current.play().catch(err => console.log("Playback failed:", err));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 reveal cursor-pointer transition-all duration-500 hover:border-white/20"
      onClick={togglePlay}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={`${videoUrl}#t=0.1`}
          className={`w-full h-full object-cover transition-transform duration-1000 ${!isPlaying ? 'group-hover:scale-105' : ''}`}
          playsInline
          muted // Most browsers require muted for inline play or better UX
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          preload="metadata"
        />
        
        {/* Info Overlay (Poster state) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-sm font-black text-white italic uppercase mb-1 tracking-tight">{title}</div>
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{type}</div>
        </div>

        {/* Premium Play Button Overlay (Poster state) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 group-hover:scale-110 group-hover:bg-white/20'}`}>
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
        </div>

        {/* Subtle Play/Pause Indicator (Playing state) */}
        <div className={`absolute bottom-4 left-6 flex items-center gap-3 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
             {isPlaying ? (
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
             ) : (
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
             )}
          </div>
          <div className="text-[10px] font-black text-white/60 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
            Playing Inline
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-white/5 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="h-full bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(124,58,237,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const GallerySection: React.FC<{ showToast: (msg: string) => void }> = ({ showToast }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const media = [
    { 
      title: "SUNDAY RUN RECAP", 
      type: "Video • 0:22 • Downtown", 
      videoUrl: "https://res.cloudinary.com/dsprn0ew4/video/upload/v1769098790/c058a055-ef2b-4d38-b6bc-d353bb16a8f1_yf9x69.mov" 
    },
    { 
      title: "HIGH ENERGY START", 
      type: "Video • 0:18 • Group", 
      videoUrl: "https://res.cloudinary.com/dsprn0ew4/video/upload/v1769098791/c058a055-ef2b-4d38-b6bc-d353bb16a8f1_crsrjw.mov" 
    },
    { 
      title: "RACE DAY MOMENTS", 
      type: "Video • 0:15 • 5K", 
      videoUrl: "https://res.cloudinary.com/dsprn0ew4/video/upload/v1769098787/c058a055-ef2b-4d38-b6bc-d353bb16a8f1_ol3alw.mov" 
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white/[0.01]">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-white leading-none">Multimedia</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Capture the energy. Every sprint, every finish line, and the moments in between.
            </p>
          </div>
          <button
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:scale-105 transition-all text-white"
            onClick={() => showToast('📸 Feed refreshed!')}
          >
            Sync Feed
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {media.map((m, i) => (
            <VideoCard
              key={i}
              title={m.title}
              type={m.type}
              videoUrl={m.videoUrl}
              isActive={activeVideoIndex === i}
              onPlay={() => setActiveVideoIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;