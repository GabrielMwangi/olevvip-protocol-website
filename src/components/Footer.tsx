
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">OleVVIPProtocol</h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional security and protocol services to elite clients worldwide since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Airport Protocol</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Secure Transportation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Event Security</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Diplomatic Logistics</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Concierge Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our secure newsletter for industry insights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-navy"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-navy px-4 rounded-r-md"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} OleVVIPProtocol. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gold text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gold text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
