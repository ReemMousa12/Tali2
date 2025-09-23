
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "./../assets/logo/logo_colored.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b border-white/10 ${scrolled ? 'bg-[#371990] bg-opacity-95' : 'bg-transparent'}`}
      style={{backdropFilter: 'blur(12px)'}}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 select-none">
          <img src={logo} alt="Tali Logo" className="h-10 w-auto pb-1.5" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span
              style={{
                color: '#ffffffff',
                fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                fontWeight: 900,
                
                fontSize: '2.2rem',
                letterSpacing: '-0.04em',
                lineHeight: 1,
               marginRight: '0.03em',
                display: 'inline-block',
                verticalAlign: 'middle',
                textTransform: 'lowercase',
              }}
            >
              tali
            </span>
            <span
              style={{
                position: 'absolute',
                paddingRight:"7rem",
                
                fontSize: '0.5rem',
                color: '#ffffffff',
                fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                fontWeight: 400,
                opacity: 0.85,
                paddingTop: '2.8em'
              }}
            >
              ®
            </span>
          </span>
        </div>

        {/* Navigation */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-tali-text-primary hover:text-tali-lime transition-colors">Home</Link>
          <Link to="/about" className="text-tali-text-primary hover:text-tali-lime transition-colors">About</Link>
          <Link to="/solutions" className="text-tali-text-primary hover:text-tali-lime transition-colors">Solutions</Link>
          <Link to="/events" className="text-tali-text-primary hover:text-tali-lime transition-colors">Events</Link>
          <Link to="/gallery" className="text-tali-text-primary hover:text-tali-lime transition-colors">Gallery</Link>
          <Link to="/contact-page" className="text-tali-text-primary hover:text-tali-lime transition-colors">Contact Us</Link>
        </nav>

        {/* Overlay for closing menu when clicking outside */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          ></div>
        )}
        {/* Mobile Navigation Drawer */}
        <nav className={`fixed top-0 right-0 h-screen w-64 bg-[#371990] shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{backdropFilter: 'blur(12px)'}}>
          <div className="flex flex-col h-full p-0">
            {/* Logo and Close at the top */}
            <div className="flex items-center justify-center relative px-8 pt-8 pb-4 select-none">
              <div className="flex-1 flex justify-center">
                <img src={logo} alt="Tali Logo" className="h-10 w-auto pb-1.5" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                <span style={{ color: '#fff', fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '-0.04em', lineHeight: 1, display: 'inline-block', verticalAlign: 'middle', textTransform: 'lowercase', marginLeft: 8 }}>tali</span>
                <span style={{ fontSize: '0.5rem', color: '#fff', fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif', fontWeight: 400, opacity: 0.85, marginLeft: 2, paddingTop: '2.8em' }}>®</span>
              </div>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-tali-lime px-2" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
            </div>
            <div className="flex flex-col flex-1 px-8 space-y-8 mt-8">
              <Link to="/" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>About</Link>
              <Link to="/solutions" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>Solutions</Link>
              <Link to="/events" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>Events</Link>
              <Link to="/gallery" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>Gallery</Link>
              <Link to="/contact-page" className="text-tali-text-primary hover:text-tali-lime text-xl" onClick={()=>setMenuOpen(false)}>Contact Us</Link>
              <Link to="/events" onClick={()=>setMenuOpen(false)}>
                <Button variant="lime" className="mt-8 w-full">BUY A TICKET</Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* CTA Button */}
        <Link to="/events">
          <Button variant="lime" className="hidden md:block">
            BUY A TICKET
          </Button>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-tali-text-primary"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </Button>
      </div>
    </header>
  );
};

export default Header;