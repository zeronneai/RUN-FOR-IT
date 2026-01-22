import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Post } from '../types';

interface CommunitySectionProps {
  showToast: (message: string) => void;
}

const demoPosts: Post[] = [
  {name:"Mia", message:"Will Sunday's pace be relaxed or competitive? 🏃‍♀️", time:"10 min ago"},
  {name:"Alex", message:"Looking for a team for a 10K progressive run this week 🔥", time:"25 min ago"},
  {name:"Chris", message:"Does anyone know if there's coffee after the downtown route?", time:"1 hour ago"},
];

const CommunitySection: React.FC<CommunitySectionProps> = ({ showToast }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const msgInputRef = useRef<HTMLTextAreaElement>(null);

  const escapeHTML = useCallback((str: string) => {
    return String(str)
      .split("&").join("&amp;")
      .split("<").join("&lt;")
      .split(">").join("&gt;")
      .split('"').join("&quot;")
      .split("'").join("&#039;");
  }, []);

  const renderPost = useCallback((post: Post) => {
    const initial = (post.name || "R").trim().charAt(0).toUpperCase();
    return (
      <div key={`${post.name}-${post.time}-${post.message}`} className="p-5 rounded-[24px] border border-white/10 bg-white/5 mb-4 reveal">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 grid place-items-center font-black text-white">
              {initial}
            </div>
            <div>
              <div className="text-sm font-black text-white italic uppercase tracking-tight">{escapeHTML(post.name || "Runner")}</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{escapeHTML(post.time || "now")}</div>
            </div>
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded-lg text-white/40">Feed</span>
        </div>
        <p className="text-sm text-white/80 leading-relaxed italic">"{escapeHTML(post.message || "")}"</p>
      </div>
    );
  }, [escapeHTML]);

  const addPost = useCallback(() => {
    const name = nameInputRef.current?.value.trim() || "";
    const message = msgInputRef.current?.value.trim() || "";
    if (!message) {
      showToast("Please write a message first ✍️");
      return;
    }
    const newPost: Post = { name: name || "Runner", message, time: "now" };
    setPosts(prev => [newPost, ...prev]);
    if (msgInputRef.current) msgInputRef.current.value = "";
    showToast("✅ Posted successfully");
  }, [showToast]);

  useEffect(() => {
    setPosts(demoPosts);
  }, []);

  return (
    <section id="community" className="py-16">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-white">Community</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Our wall for questions, tips, event doubts, and coordination.
            </p>
          </div>
          <a 
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white" 
            href="https://www.instagram.com/runforitep/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Send us a DM
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="space-y-6 reveal">
            <div className="p-8 bg-white/5 border border-white/10 rounded-[32px]">
              <h3 className="text-xl font-black text-white mb-6 uppercase italic tracking-tight">Post Something</h3>
              <div className="space-y-4">
                <input ref={nameInputRef} className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-[#7c3aed] transition-colors text-sm font-bold" placeholder="Your Name" />
                <textarea ref={msgInputRef} className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-[#7c3aed] transition-colors text-sm font-medium min-h-[120px] resize-none" placeholder="What do you want to share with the club?"></textarea>
                <button
                  className="w-full py-4 bg-[#7c3aed] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-all"
                  onClick={addPost}
                >
                  Send Post
                </button>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Latest Activity</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-[#00d4ff] hover:underline" onClick={() => setPosts(demoPosts)}>Clear Wall</button>
            </div>
            <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {posts.map(post => renderPost(post))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;