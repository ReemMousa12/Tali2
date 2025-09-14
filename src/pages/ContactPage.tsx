import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

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
  <div className="min-h-screen flex flex-col bg-[#371990]">
      <Header />
  <main className="flex-1 flex flex-col items-center justify-center px-4 py-48 relative">
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="background-headline wm wow slideInUp animated" style={{
            color: '#fff',
            fontSize: 100,
            opacity: 0.08,
            position: 'absolute',
            left: 0,
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Red Hat Display, sans-serif',
            letterSpacing: '2.5rem',
            textTransform: 'uppercase',
            top: 80,
            userSelect: 'none',
            zIndex: 0,
          }}>CONTACT</div>
        </div>
  <section className="relative z-10 w-full max-w-xl bg-white/10 rounded-3xl shadow-[0_8px_40px_0_rgba(205,255,107,0.15)] border border-tali-lime/20 p-10 backdrop-blur-xl">
          <h2 className="text-4xl font-extrabold text-tali-lime text-center mb-8 tracking-tight drop-shadow-lg" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '0.08em'}}>Contact Us</h2>
          {submitted ? (
            <div className="text-center text-tali-lime text-xl font-semibold py-12">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="px-6 py-3 rounded-2xl bg-white/20 text-white placeholder-white/70 border-2 border-tali-lime/20 focus:border-tali-lime outline-none transition-all shadow-lg text-lg resize-none"
              />
              <button
                type="submit"
                className="bg-tali-lime text-[#371990] font-bold px-10 py-3 rounded-full shadow-xl hover:bg-[#d4ff3f] hover:text-[#1a1333] transition-all duration-200 text-lg mt-2 tracking-wide border-2 border-tali-lime/40"
                style={{letterSpacing: '0.05em'}}>
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
