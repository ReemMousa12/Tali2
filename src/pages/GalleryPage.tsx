import React, { useState, useEffect, useRef } from "react";
import img1 from "@/assets/gallery/1.jpg";
import img2 from "@/assets/gallery/2.jpg";
import img3 from "@/assets/gallery/3.jpg";
import img4 from "@/assets/gallery/4.jpg";
import img5 from "@/assets/gallery/5.jpg";
import img6 from "@/assets/gallery/6.jpg";
import kiki1 from "@/assets/gallery/KIKIsSage1.jpg";
import kiki2 from "@/assets/gallery/KIKIsSage2.jpg";
import kiki3 from "@/assets/gallery/KIKIsSage3.jpg";
import kiki4 from "@/assets/gallery/KIKIsSage4.jpg";
import kiki5 from "@/assets/gallery/KIKIsSage5.jpg";
import kiki6 from "@/assets/gallery/KIKIsSage6.jpg";
import kiki7 from "@/assets/gallery/KIKIsSage7.jpg";
import Header from '../components/Header';
import Footer from '../components/Footer';

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  kiki1,
  kiki2,
  kiki3,
  kiki4,
  kiki5,
  kiki6,
  kiki7,
];

const GallerySection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 3500;

  // Carousel auto-play
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, delay);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [current]);

  // Navigation
  const prev = () => setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent((prev) => (prev + 1) % galleryImages.length);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1333]">
      <Header />
      <main className="flex-1 relative flex items-center  pt-28 justify-center overflow-hidden">
        {/* Decorative GALLERY background text */}
      
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1333]/80 via-transparent to-[#1a1333]/80 z-10 pointer-events-none" />
        {/* Blurred animated collage background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-2 opacity-60 blur-[7px] animate-fadeIn" style={{filter: 'brightness(0.7)'}}>
            {galleryImages.concat(galleryImages).slice(0,12).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="bg collage"
                className="w-full h-full object-cover rounded-2xl scale-110"
                style={{animation: `galleryBgAnim 18s ease-in-out ${(idx * 0.7)}s infinite alternate`}}
              />
            ))}
          </div>
          <style>{`
            @keyframes galleryBgAnim {
              0% { transform: scale(1.08) translateY(0px); }
              100% { transform: scale(1.13) translateY(-12px); }
            }
          `}</style>
        </div>
        {/* Carousel foreground */}
        <div className="relative z-20 flex flex-col items-center w-full justify-center min-h-[60vh]">
          <h2 className="text-5xl font-extrabold text-tali-lime text-center mb-10 drop-shadow-lg" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.03em'}}>Gallery</h2>
          <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-tali-lime/80 text-white text-3xl rounded-full w-8 h-6 pb-1 flex items-center justify-center z-20 shadow-lg transition-colors duration-200">
              &#8592;
            </button>
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
              <img
                src={galleryImages[current]}
                alt={`Gallery ${current + 1}`}
                className="w-full h-full object-cover transition-all duration-700"
                style={{animation: 'fadeIn 0.7s'}}
              />
            </div>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-tali-lime/80 text-white text-3xl rounded-full w-8 h-6 pb-1 flex items-center justify-center z-20 shadow-lg transition-colors duration-200">
              &#8594;
            </button>
          </div>
          {/* Creative thumbnail preview dots */}
          <div className="flex gap-3 mt-8 justify-center items-center mb-40">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition-all duration-300 flex items-center justify-center shadow-md
                  ${current === idx ? 'border-tali-lime scale-110 ring-2 ring-tali-lime/40' : 'border-white/20 opacity-70 hover:opacity-100'}
                `}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{outline: 'none', background: 'none', padding: 0}}
              >
                <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}</style>
      </main>
      <Footer />
    </div>
  );
};

export default GallerySection;
