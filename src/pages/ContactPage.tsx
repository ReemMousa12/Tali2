import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import bg3 from '@/assets/background/3.jpg';
import FloatingCircles from '../components/FloatingCircles';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  };

  return (
  <div
    className="min-h-screen flex flex-col relative"
    style={{
      background: `linear-gradient(rgba(55,25,144,0.2), rgba(55,25,144,0.2)), url(${bg3}) center/cover no-repeat`,
      backgroundAttachment: 'fixed',
    }}
  >
      <Header />
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCircles />
      </div>
  <main className="flex-1 flex flex-col items-center justify-center px-4 py-48 relative">
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="background-headline wm wow slideInUp animated" style={{
            color: '#fff',
            fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
            opacity: 0.13,
            position: 'absolute',
            left: 0,
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Red Hat Display, sans-serif',
            letterSpacing: 'clamp(0.5rem, 5vw, 2.5rem)',
            textTransform: 'uppercase',
            top: 80,
            userSelect: 'none',
            zIndex: 0,
          }}>CONTACT</div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-400/20 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-lime-400/20 animate-pulse hidden md:block"></div>
       
      
        
  <section className="relative z-10 w-full max-w-lg bg-white/10 rounded-3xl shadow-[0_8px_40px_0_rgba(205,255,107,0.15)] border border-tali-lime/20 p-10 backdrop-blur-xl">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-lime-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <div className="text-2xl">💌</div>
          </div>
          <h2 className="text-4xl font-extrabold text-tali-lime text-center mb-2 tracking-tight drop-shadow-lg" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '0.08em'}}>Contact Us</h2>
          <p className="text-center text-white/80 mb-8">We'd love to hear from you!</p>
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <div className="text-tali-lime text-xl font-semibold">Thank you for reaching out!</div>
              <div className="text-white/80 mt-2">We'll get back to you super soon.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="pl-12 pr-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg w-full"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">👤</div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="pl-12 pr-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg w-full"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">✉️</div>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="pl-12 pr-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg resize-none w-full"
                />
                <div className="absolute left-4 top-6 transform text-lg">💬</div>
              </div>
              <button
                type="submit"
                className="bg-tali-lime text-[#371990] font-bold px-10 py-3 rounded-full shadow-xl hover:bg-[#d4ff3f] hover:text-[#1a1333] transition-all duration-200 text-lg mt-4 tracking-wide border-2 border-tali-lime/40 flex items-center justify-center gap-2 group"
                style={{letterSpacing: '0.05em'}}>
                <span>Send Message</span> 
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">✈️</span>
              </button>
              <div className="flex justify-center mt-4">
                <div className="text-white/60 text-sm flex items-center">
                  <span className="animate-pulse mr-1">💕</span> We usually respond within 24 hours
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
