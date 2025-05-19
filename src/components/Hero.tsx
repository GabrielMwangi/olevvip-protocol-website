
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative bg-navy text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bef26d0e-8849-4254-9abe-7eb7e0e86053.png" 
          alt="OleVVIP Protocol Banner" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
            <span className="text-gold font-medium">Kenya's Premier Protocol Services</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            Exclusive Protocol Services for{" "}
            <span className="relative">
              <span className="relative z-10 text-gold">Exceptional Clients</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gold/20 -z-10 skew-x-3"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Providing discreet, secure, and premium assistance for diplomats,
            high-net-worth individuals, and government officials throughout Kenya and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold text-lg py-6 px-8 shadow-lg hover:shadow-gold/20 hover:scale-105 transition-all">
              Request Services
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-navy-light font-semibold text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="container-custom mt-16">
        <div className="flex flex-wrap justify-between items-center gap-y-6 border-t border-gold/20 pt-8 backdrop-blur-sm bg-navy/30 rounded-xl px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold">5+</span>
            </div>
            <span className="text-gray-300">Years in Kenya</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold">24/7</span>
            </div>
            <span className="text-gray-300">Nairobi Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold">15+</span>
            </div>
            <span className="text-gray-300">Counties Served</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold">100%</span>
            </div>
            <span className="text-gray-300">Discretion Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
