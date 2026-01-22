import React from 'react';
import { Product } from '../types';

interface ShopSectionProps {
  openProductModal: (product: Product) => void;
  showToast: (message: string) => void;
}

const ProductCard: React.FC<{ product: Product; index: number; onClick: () => void }> = ({ product, index, onClick }) => {
  return (
    <div
      className="group cursor-pointer reveal"
      onClick={onClick}
    >
      <div className="aspect-square rounded-[32px] overflow-hidden mb-4 bg-white/5 border border-white/10 relative">
        {/* Primary Image (Packshot) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-100 lg:group-hover:opacity-0"
          style={{ backgroundImage: `url(${product.primaryImage})` }}
        ></div>
        
        {/* Secondary Image (Lifestyle) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 lg:group-hover:opacity-100"
          style={{ backgroundImage: `url(${product.secondaryImage})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-white">View Details</span>
        </div>
      </div>
      <h3 className="text-lg font-black text-white italic mb-1 uppercase tracking-tight">{product.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{product.category}</span>
        <span className="text-sm font-black text-[#00f5a0]">${product.price} USD</span>
      </div>
    </div>
  );
};

const ShopSection: React.FC<ShopSectionProps> = ({ openProductModal, showToast }) => {
  const products: Product[] = [
    { 
      name: 'RUN FOR IT Tee', 
      description: 'Premium tee with neon vibes and comfortable cut. Ideal for running or lifestyle.', 
      price: 35, 
      category: 'Apparel',
      primaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097709/Gemini_Generated_Image_1vpr8j1vpr8j1vpr_vdlqxt.png',
      secondaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097710/hf_20260122_151551_85e410fc-70eb-4da9-b87c-1c737c4b3df2_lorc9r.jpg'
    },
    { 
      name: 'Performance Shorts', 
      description: 'Lightweight, featuring a hidden pocket and high-quality elastic fit.', 
      price: 45, 
      category: 'Apparel',
      primaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097708/Gemini_Generated_Image_sc4cknsc4cknsc4c_ndkruu.png',
      secondaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097710/hf_20260122_154048_e6479cda-ea1b-48cc-9369-598e1f9c164d_xyfsgs.png'
    },
    { 
      name: 'Club Cap', 
      description: 'Breathable with high-definition premium embroidery.', 
      price: 25, 
      category: 'Accessories',
      primaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097709/Gemini_Generated_Image_rq9eztrq9eztrq9e_auvpkk.png',
      secondaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097709/hf_20260122_151708_b3fee943-7e6e-473a-9303-56a21b637039_tq4eqo.png'
    },
    { 
      name: 'T-SHIRT', 
      description: 'High-quality cotton blend with premium screen print and a relaxed athletic fit.', 
      price: 15, 
      category: 'Apparel',
      primaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097710/Gemini_Generated_Image_4l7v214l7v214l7v_dcwcbi.png',
      secondaryImage: 'https://res.cloudinary.com/dsprn0ew4/image/upload/v1769097709/hf_20260122_154609_d2909e86-aebc-4a39-9ea6-c19733e6bafd_js7wb5.png'
    },
  ];

  return (
    <section id="shop" className="py-16 bg-white/[0.02]">
      <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Merch Drop</h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Premium gear designed to elevate your running style. Limited editions.
            </p>
          </div>
          <button
            className="px-8 py-3 bg-[#00f5a0] text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:scale-105 transition-all"
            onClick={() => showToast('🔥 Drop coming soon: activate pre-sale')}
          >
            Coming Soon
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              index={index} 
              onClick={() => openProductModal(product)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;