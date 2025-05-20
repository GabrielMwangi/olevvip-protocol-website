
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full overflow-hidden">
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
    },
    {
      title: "Secure Transportation",
      description: "Armored vehicles, trained security drivers, and carefully planned routes for maximum safety.",
      icon: <span className="text-navy text-2xl">🚗</span>,
    },
    {
      title: "Event Security",
      description: "Discreet security teams, perimeter control, and comprehensive threat assessment for private functions.",
      icon: <span className="text-navy text-2xl">🛡️</span>,
    },
    {
      title: "Diplomatic Logistics",
      description: "Protocol management, cultural briefings, and coordinated multi-agency arrangements for official visits.",
      icon: <span className="text-navy text-2xl">🏛️</span>,
    },
    {
      title: "Concierge Services",
      description: "Personalized assistance with accommodations, dining, and exclusive experiences worldwide.",
      icon: <span className="text-navy text-2xl">🔑</span>,
    },
    {
      title: "Crisis Management",
      description: "Immediate response teams, evacuation planning, and 24/7 situation monitoring for emergency scenarios.",
      icon: <span className="text-navy text-2xl">🚨</span>,
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
