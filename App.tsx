import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import ShopSection from './components/ShopSection';
import CommunitySection from './components/CommunitySection';
import GallerySection from './components/GallerySection';
import ChallengesSection from './components/ChallengesSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';
import { Product, Post } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);

  const toastTimeoutRef = useRef<number | null>(null);

  const showToastMessage = useCallback((message: string) => {
    setToastMessage(message);
    setShowToast(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }, []);

  const openProductModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      (window.gsap.utils.toArray(".reveal") as HTMLElement[]).forEach((el) => {
        window.gsap.fromTo(el,
          { y: 30, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-[#030408]">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <EventsSection showToast={showToastMessage} />
        <ShopSection openProductModal={openProductModal} showToast={showToastMessage} />
        <CommunitySection showToast={showToastMessage} />
        <GallerySection showToast={showToastMessage} />
        <ChallengesSection showToast={showToastMessage} />

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-[var(--max)] w-[calc(100%-40px)] mx-auto">
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-transparent border border-[rgba(255,255,255,0.1)] rounded-[32px] shadow-2xl reveal">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">Ready to Run?</h2>
                  <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-xl leading-relaxed">
                    Join the club, follow us on IG, and don't miss our next training session. All levels are welcome.
                  </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a 
                    className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] rounded-2xl shadow-lg hover:scale-105 transition-transform active:scale-95 whitespace-nowrap" 
                    href="https://www.instagram.com/runforitep/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Follow on Instagram
                  </a>
                  <a className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors whitespace-nowrap" href="mailto:hello@runforit.com">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          showToast={showToastMessage}
        />
      )}

      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  );
}

export default App;

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}