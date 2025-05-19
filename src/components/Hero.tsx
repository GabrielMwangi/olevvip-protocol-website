
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative bg-navy text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gold/20 -skew-x-12 transform origin-top-right"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-6">
            Exclusive Protocol Services for{" "}
            <span className="text-gold">Exceptional Clients</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Providing discreet, secure, and premium assistance for diplomats,
            high-net-worth individuals, and government officials worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-gold hover:bg-gold-light text-navy font-medium text-lg py-6 px-8">
              Request Services
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-navy-light font-medium text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="container-custom mt-16">
        <div className="flex flex-wrap justify-between items-center gap-y-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold">10+</span>
            </div>
            <span className="text-gray-300">Years of Excellence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold">24/7</span>
            </div>
            <span className="text-gray-300">Global Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold">50+</span>
            </div>
            <span className="text-gray-300">Countries Served</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
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
