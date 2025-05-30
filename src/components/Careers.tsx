
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
}

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>("");

  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Protocol Officer",
      department: "VIP Services",
      location: "Nairobi, Kenya",
      description: "Lead and coordinate elite protocol services for VVIP clients, ensuring flawless execution and the highest levels of service standards.",
      requirements: [
        "5+ years experience in diplomatic protocol or luxury hospitality",
        "Fluency in multiple languages (English and Kiswahili required)",
        "Exceptional communication and problem-solving skills",
        "Valid passport and flexibility to travel within East Africa",
        "Security clearance eligibility"
      ]
    },
    {
      id: 2,
      title: "Security Specialist",
      department: "Protection Services",
      location: "Nairobi with travel throughout Kenya",
      description: "Provide comprehensive security solutions for high-profile clients in diverse environments while maintaining low visibility and high effectiveness.",
      requirements: [
        "Military or law enforcement background",
        "Advanced training in close protection",
        "Risk assessment and threat mitigation expertise",
        "Clean driving record and advanced driving skills",
        "Cultural sensitivity and diplomatic demeanor"
      ]
    },
    {
      id: 3,
      title: "Client Relations Manager",
      department: "Client Services",
      location: "Nairobi, Kenya",
      description: "Manage relationships with elite clientele, coordinating their service needs and ensuring exceptional delivery across all touchpoints.",
      requirements: [
        "Proven experience in luxury client management",
        "Strong network and relationship-building skills",
        "Ability to handle confidential information with discretion",
        "Experience in high-net-worth individual services",
        "Available for client communications 24/7"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. Our team will review it and contact you shortly.",
      });
      // Reset form
      setSelectedPosition("");
      setSelectedFile(null);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleApplyForPosition = (jobTitle: string) => {
    setSelectedPosition(jobTitle);
    // Scroll to application form
    const applicationForm = document.getElementById("application-form");
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: `Applying for ${jobTitle}`,
      description: "Please complete the application form below.",
    });
  };

  return (
    <section id="careers" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-navy">Join Our Elite Team</h2>
          <p className="text-gray-600 text-lg">
            We're seeking exceptional professionals who thrive in high-pressure environments and are 
            committed to providing unparalleled service to Kenya's most discerning clients.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h3 className="heading-md mb-6 text-navy">Current Opportunities</h3>
            
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {jobPositions.map((job) => (
                  <AccordionItem key={job.id} value={`item-${job.id}`} className="border border-gold/20 bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
                    <AccordionTrigger className="hover:text-gold px-6">
                      <div className="text-left">
                        <h4 className="font-semibold text-navy">{job.title}</h4>
                        <p className="text-sm text-gray-500">{job.department} • {job.location}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4 pt-2">
                        <p className="text-gray-600">{job.description}</p>
                        <div>
                          <h5 className="font-semibold mb-2">Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-gray-600">{req}</li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="bg-gold hover:bg-gold-light text-white"
                          onClick={() => handleApplyForPosition(job.title)}
                        >
                          Apply for this Position
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2" id="application-form">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="pt-6">
                <h3 className="heading-md mb-6 text-navy">Submit Your Application</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Kenyan Format)</Label>
                    <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest</Label>
                    <select 
                      id="position" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                    >
                      <option value="">Select a position</option>
                      {jobPositions.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other (specify in message)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume">Upload Resume/CV (PDF)</Label>
                    <Input 
                      id="resume" 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {selectedFile ? `Selected file: ${selectedFile.name}` : "Max file size: 5MB"}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <textarea 
                      id="message" 
                      className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Please share any additional qualifications or information relevant to your application"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Input type="checkbox" id="privacy-policy" className="w-4 h-4" required />
                    <Label htmlFor="privacy-policy" className="text-sm">
                      I consent to OleVVIPProtocol processing my personal data for recruitment purposes
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-navy font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    All applications are treated with strict confidentiality.
                    Background checks are required for all positions.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
