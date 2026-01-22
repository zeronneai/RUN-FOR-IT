import React, { useEffect, useRef } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current && window.gsap) {
      if (isVisible) {
        toastRef.current.style.display = 'block';
        window.gsap.fromTo(
          toastRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
        );
      } else {
        window.gsap.to(
          toastRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
              if (toastRef.current) toastRef.current.style.display = 'none';
            },
          }
        );
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={toastRef}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[rgba(10,12,18,0.85)] border-[1px] border-[rgba(255,255,255,0.12)] px-3.5 py-3 rounded-[18px] shadow-[0_18px_70px_rgba(0,0,0,0.60)] hidden z-[1000] text-[rgba(255,255,255,0.92)] text-sm backdrop-blur-[10px]"
      style={{
        transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
        opacity: isVisible ? 1 : 0
      }}
    >
      {message}
    </div>
  );
};

export default Toast;