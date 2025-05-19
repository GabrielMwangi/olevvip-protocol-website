
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-navy">OleVVIPProtocol</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-navy hover:text-gold transition-colors">Services</a>
          <a href="#client-portal" className="text-navy hover:text-gold transition-colors">Client Portal</a>
          <a href="#careers" className="text-navy hover:text-gold transition-colors">Careers</a>
          <a href="#contact" className="text-navy hover:text-gold transition-colors">Contact</a>
          <Button className="bg-navy hover:bg-navy-light text-white font-medium">Client Login</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-navy py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#client-portal" 
              className="text-navy py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Portal
            </a>
            <a 
              href="#careers" 
              className="text-navy py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a 
              href="#contact" 
              className="text-navy py-2 hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-navy hover:bg-navy-light text-white font-medium w-full">
              Client Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
