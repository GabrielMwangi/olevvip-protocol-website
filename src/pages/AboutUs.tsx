
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sir Dennis Olele",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in diplomatic protocol and VIP security, Sir Dennis Olele founded OleVVIPProtocol to provide unmatched service excellence for elite clientele throughout Kenya and beyond.",
      image: "/lovable-uploads/def15129-6b4f-4a11-8d4e-c3a416c94f52.png",
    },
    {
      name: "Faith Wambui",
      position: "Operations Director",
      bio: "Faith brings 10+ years of experience in luxury hospitality management and executive protection. She oversees all operational aspects of OleVVIPProtocol's service delivery across Kenya.",
      image: "/lovable-uploads/fd8cf5ba-d1f9-4cb6-9590-c799e3079620.png",
    },
    {
      name: "Victor Mwangi",
      position: "Head of Security",
      bio: "Former elite military officer with specialized training in close protection and risk assessment. Victor leads our team of security professionals ensuring client safety at all times.",
      image: "/lovable-uploads/3a23981d-2cb1-4b42-9f48-10f3737f4021.png",
    },
    {
      name: "Amina Kimani",
      position: "Client Relations Manager",
      bio: "With a background in luxury concierge services, Amina manages relationships with our VVIP clientele, ensuring their needs are anticipated and exceeded at every touchpoint.",
      image: "/lovable-uploads/63d95bee-4348-4ae7-9bb0-8dbad0fe5c95.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-navy to-navy-dark relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center">
              <h1 className="heading-xl text-white mb-6">About <span className="text-gold">OleVVIPProtocol</span></h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Setting the standard for elite protocol services in Kenya and across East Africa
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-navy mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 2020 by Sir Dennis Olele, OleVVIPProtocol was born from a vision to provide world-class protocol and security services tailored specifically for Kenya's and Africa's most distinguished clientele.
                  </p>
                  <p>
                    After years of serving in diplomatic circles and witnessing firsthand the unique needs of VVIPs in the East African context, Sir Dennis assembled a team of extraordinary professionals committed to excellence.
                  </p>
                  <p>
                    Today, OleVVIPProtocol stands as Kenya's premier provider of comprehensive protocol services for government officials, diplomats, celebrities, and high-net-worth individuals throughout the region.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">5+</span>
                    </div>
                    <span className="text-gray-700">Years of Excellence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">100+</span>
                    </div>
                    <span className="text-gray-700">VVIPs Served</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 to-navy/30 rounded-lg blur-sm"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-serif font-bold text-navy mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    To provide uncompromising protocol and security services that exceed the expectations of the most discerning clients, while maintaining the highest standards of discretion, professionalism, and cultural sensitivity.
                  </p>
                  
                  <h3 className="text-2xl font-serif font-bold text-navy mb-4">Our Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span>Excellence in every detail</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span>Unwavering discretion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span>Proactive service anticipation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span>Cultural intelligence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span>Continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-navy mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the exceptional professionals who lead OleVVIPProtocol with expertise, vision, and unwavering commitment to excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg bg-white transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                    <Avatar className="absolute inset-0 w-full h-full rounded-none">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gold">{member.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-navy text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-300">
                For inquiries about our services or to discuss your specific needs, our team is ready to assist you with the utmost discretion and professionalism.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-navy-light border-gold/20 text-white">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <MapPin className="text-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-300">
                    Diamond Plaza, 3rd Floor<br />
                    Parklands Road<br />
                    Nairobi, Kenya
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-navy-light border-gold/20 text-white">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <Phone className="text-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-300">
                    +254 712 345 678<br />
                    +254 733 987 654
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-navy-light border-gold/20 text-white">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <Mail className="text-gold" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-300">
                    info@olevvipprotocol.com<br />
                    vip@olevvipprotocol.com
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-16">
              <Button asChild className="bg-gradient-to-r from-gold to-gold-light text-navy hover:opacity-90 text-lg py-6 px-10 shadow-md">
                <a href="#contact">Contact Us Now</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
