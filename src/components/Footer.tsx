import logo from "../assets/logo/logo_colored.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import subheaderBg from "../assets/backgrounds/subheader.jpg";

const Footer = () => {
  return (
    <footer
      className="py-16 px-4 border-t border-white/10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${subheaderBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#371990]/50 pointer-events-none" style={{zIndex: 0}} />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 select-none mb-4">
              <img src={logo} alt="Tali Logo" className="h-10 w-auto" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    color: '#ffffffff',
                    fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '2.2rem',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginRight: '0.1em',
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
                    paddingRight: "7rem",
                    bottom: '-0.3em',
                    fontSize: '1rem',
                    color: '#ffffffff',
                    fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                    fontWeight: 400,
                    opacity: 0.85,
                  }}
                >
                  ®
                </span>
              </span>
            </div>
            <p className="text-tali-text-secondary leading-relaxed max-w-md">
              Where Every Booking Becomes an Experience. Seamlessly merging technology, 
              luxury, and scale across Entertainment, Hospitality & Corporate events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-tali-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-tali-text-secondary hover:text-tali-lime transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-tali-text-secondary hover:text-tali-lime transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-tali-text-secondary hover:text-tali-lime transition-colors">Solutions</Link></li>
              <li><Link to="/events" className="text-tali-text-secondary hover:text-tali-lime transition-colors">Events</Link></li>
              <li><Link to="/contact-page" className="text-tali-text-secondary hover:text-tali-lime transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-tali-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-tali-text-secondary flex items-center gap-2">
                <Mail className="w-4 h-4 text-tali-lime" />
                hello@jointali.com
              </li>
              <li className="text-tali-text-secondary flex items-center gap-2">
                <Phone className="w-4 h-4 text-tali-lime" />
                +2101228588800
              </li>
              <li className="text-tali-text-secondary flex items-center gap-2">
                <MapPin className="w-4 h-4 text-tali-lime" />
                Heliopolis, Cairo, Egypt
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-tali-text-secondary">
            © 2025 Tali Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;