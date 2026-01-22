import React, { useEffect, useRef, useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  showToast: (message: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product, showToast }) => {
  const modalBoxRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveImg(0); // Reset to primary image when opening
      if (modalBoxRef.current && window.gsap) {
        document.body.style.overflow = 'hidden';
        window.gsap.fromTo(modalBoxRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
        );
      }
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 z-[999]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalBoxRef}
        className="w-full max-w-4xl bg-[#0a0c12] border border-white/10 rounded-[40px] shadow-3xl overflow-hidden relative"
      >
        {/* Minimal Close Button */}
        <button
          className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all z-20 group"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Interactive Image Container */}
          <div 
            className="relative aspect-square md:aspect-auto cursor-pointer group/modalimg bg-black overflow-hidden"
            onClick={() => setActiveImg(prev => (prev + 1) % 2)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{ backgroundImage: `url(${product.primaryImage})`, opacity: activeImg === 0 ? 1 : 0 }}
            ></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{ backgroundImage: `url(${product.secondaryImage})`, opacity: activeImg === 1 ? 1 : 0 }}
            ></div>
            
            {/* Visual Pagination Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 pointer-events-none">
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeImg === 0 ? 'bg-white scale-110' : 'bg-white/30'}`}></div>
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeImg === 1 ? 'bg-white scale-110' : 'bg-white/30'}`}></div>
            </div>

            <div className="absolute inset-0 bg-white/0 group-hover/modalimg:bg-white/[0.02] transition-colors pointer-events-none"></div>
          </div>

          <div className="p-10 flex flex-col">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#00f5a0] mb-6">Limited Edition</div>
            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">{product.name}</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">{product.description}</p>
            
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Price</div>
                  <div className="text-3xl font-black text-white">${product.price} USD</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Stock</div>
                  <div className="text-sm font-black text-[#00f5a0] uppercase tracking-widest italic">In Stock</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  className="flex-grow py-5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#00f5a0] transition-colors"
                  onClick={() => showToast('🛒 Checkout Demo: Connect with Shopify or Stripe')}
                >
                  Buy Now
                </button>
                <button
                  className="px-8 py-5 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
                  onClick={() => showToast('📦 Saved to wishlist')}
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;