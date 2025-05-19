
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full bg-gradient-to-r from-navy via-navy/95 to-navy-dark backdrop-blur-sm z-50 border-b border-gold/30">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-gold-light/50 blur-sm rounded-lg"></span>
            <span className="relative text-2xl font-serif font-bold text-white">
              OleVVIP<span className="text-gold">Protocol</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gold transition-colors font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-gold transition-colors font-medium">About Us</Link>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-gold transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('client-portal')} 
            className="text-white hover:text-gold transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Client Portal
          </button>
          <button 
            onClick={() => scrollToSection('careers')} 
            className="text-white hover:text-gold transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Careers
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-gold transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
          <Button className="bg-gradient-to-r from-gold to-gold-light text-navy hover:opacity-90 font-semibold" asChild>
            <Link to="/client-login">Client Login</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gold/20 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white py-2 hover:text-gold transition-colors text-left bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('client-portal')}
              className="text-white py-2 hover:text-gold transition-colors text-left bg-transparent border-none cursor-pointer"
            >
              Client Portal
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="text-white py-2 hover:text-gold transition-colors text-left bg-transparent border-none cursor-pointer"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white py-2 hover:text-gold transition-colors text-left bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <Button className="bg-gradient-to-r from-gold to-gold-light text-navy hover:opacity-90 w-full font-semibold" asChild>
              <Link to="/client-login" onClick={() => setIsMenuOpen(false)}>Client Login</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
