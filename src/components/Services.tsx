
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const ServiceCard = ({ title, description, icon, image }: ServiceProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full overflow-hidden">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-navy text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Airport Protocol",
      description: "Expedited clearance, private terminals, and VIP transportation from runway to destination.",
      icon: <span className="text-navy text-2xl">✈️</span>,
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Secure Transportation",
      description: "Armored vehicles, trained security drivers, and carefully planned routes for maximum safety.",
      icon: <span className="text-navy text-2xl">🚗</span>,
      image: "https://images.unsplash.com/photo-1549924277-0587a3b8560a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Event Security",
      description: "Discreet security teams, perimeter control, and comprehensive threat assessment for private functions.",
      icon: <span className="text-navy text-2xl">🛡️</span>,
      image: "https://images.unsplash.com/photo-1542744173-8659b8e39c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    },
    {
      title: "Diplomatic Logistics",
      description: "Protocol management, cultural briefings, and coordinated multi-agency arrangements for official visits.",
      icon: <span className="text-navy text-2xl">🏛️</span>,
      image: "https://images.unsplash.com/photo-1588329943502-a9efaeb6c6cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
    },
    {
      title: "Concierge Services",
      description: "Personalized assistance with accommodations, dining, and exclusive experiences worldwide.",
      icon: <span className="text-navy text-2xl">🔑</span>,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Crisis Management",
      description: "Immediate response teams, evacuation planning, and 24/7 situation monitoring for emergency scenarios.",
      icon: <span className="text-navy text-2xl">🚨</span>,
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-navy">Elite Services</h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive range of premium services caters to the unique needs of diplomats, 
            high-net-worth individuals, and government officials who require the highest standards 
            of security, efficiency, and discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
