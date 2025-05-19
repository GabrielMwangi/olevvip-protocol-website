
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClientPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="client-portal" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 w-48 h-48 rounded-full bg-navy/5"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-gold/5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-lg mb-6 text-navy">Secure Client Portal Access</h2>
            <p className="text-gray-600 mb-6">
              Our exclusive client portal provides secure access to your personalized services, 
              itineraries, and support team. Manage your protocols, track arrangements, and 
              communicate with your dedicated service representatives in a fully encrypted 
              environment.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">End-to-End Encryption</h3>
                  <p className="text-gray-600">All communications and data exchanges are fully secured with military-grade encryption.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">Multi-Factor Authentication</h3>
                  <p className="text-gray-600">Enhanced login security with biometric and device verification for authorized access.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">24/7 Support Access</h3>
                  <p className="text-gray-600">Direct connection to your dedicated protocol team available at any time, from anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <Tabs defaultValue="login">
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Request Access</TabsTrigger>
                  </TabsList>
                  <CardDescription className="pt-4 text-center">
                    Secure access for verified clients
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <a href="#" className="text-sm text-gold hover:underline">
                            Forgot password?
                          </a>
                        </div>
                        <Input id="password" type="password" required />
                      </div>
                      <Button type="submit" className="w-full bg-navy hover:bg-navy-light" disabled={isLoading}>
                        {isLoading ? "Authenticating..." : "Login Securely"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleRegistration} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="full-name">Full Name</Label>
                        <Input id="full-name" placeholder="John Smith" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input id="register-email" type="email" placeholder="your@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Organization/Company</Label>
                        <Input id="company" placeholder="Your organization" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Request Details</Label>
                        <textarea 
                          id="message" 
                          className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Please provide details about your service requirements"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-navy hover:bg-navy-light" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </TabsContent>
                </CardContent>

                <CardFooter className="text-xs text-gray-500 text-center">
                  All access requests are subject to verification and approval. 
                  Your information is protected by our strict privacy policy.
                </CardFooter>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;
