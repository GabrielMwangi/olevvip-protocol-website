
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Lock } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-lg mb-6 text-navy">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Our dedicated team is ready to discuss your protocol and security requirements 
              with the utmost discretion. Reach out to us through our secure channels, and 
              a senior representative will be in touch within 24 hours.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Phone className="text-navy" size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">TELEPHONE</h3>
                  <p className="text-navy">+1 (555) 123-4567 (24/7 Secure Line)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Mail className="text-navy" size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">EMAIL</h3>
                  <p className="text-navy">inquiries@olevvipprotocol.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <MapPin className="text-navy" size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">GLOBAL HEADQUARTERS</h3>
                  <p className="text-navy">London • New York • Dubai • Singapore</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <Clock className="text-navy" size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">AVAILABILITY</h3>
                  <p className="text-navy">24 hours, 7 days a week</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-navy/5 rounded-lg">
              <Lock className="text-navy mr-3" size={18} />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-navy">Secure Communications:</span> All contact methods are encrypted and protected by our strict confidentiality protocols.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="border-0 shadow-lg">
              <div className="p-6">
                <h3 className="heading-md mb-6 text-navy">Request Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-first-name">First Name</Label>
                      <Input id="contact-first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-last-name">Last Name</Label>
                      <Input id="contact-last-name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" type="tel" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-company">Organization/Company</Label>
                    <Input id="contact-company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service of Interest</Label>
                    <select 
                      id="service-type" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Airport Protocol">Airport Protocol</option>
                      <option value="Secure Transportation">Secure Transportation</option>
                      <option value="Event Security">Event Security</option>
                      <option value="Diplomatic Logistics">Diplomatic Logistics</option>
                      <option value="Concierge Services">Concierge Services</option>
                      <option value="Crisis Management">Crisis Management</option>
                      <option value="Custom Solution">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <textarea 
                      id="contact-message" 
                      className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please provide details about your requirements"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Input type="checkbox" id="contact-privacy" className="w-4 h-4" required />
                    <Label htmlFor="contact-privacy" className="text-sm">
                      I consent to OleVVIPProtocol processing my data to respond to my inquiry
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-navy hover:bg-navy-light" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Secure Inquiry"}
                  </Button>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Lock className="mr-1" size={12} />
                    <span>All communications are encrypted and confidential</span>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
