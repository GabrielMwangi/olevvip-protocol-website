
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API login call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to OleVVIPProtocol secure client portal.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom max-w-md mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="h-8 bg-gradient-to-r from-purple-500 via-magenta-500 to-orange-500"></div>
            
            <CardHeader className="space-y-1 text-center pt-8">
              <CardTitle className="text-2xl font-bold text-navy">Client Portal</CardTitle>
              <CardDescription>
                Secure access to your exclusive services
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-purple-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 via-magenta-500 to-orange-500 hover:opacity-90 text-white font-bold py-2" 
                  disabled={isLoading}
                >
                  {isLoading ? "Authenticating..." : "Login Securely"}
                </Button>
              </form>
              
              <div className="flex items-center justify-between mt-6 text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-purple-600 hover:underline">
                  Need help?
                </a>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 border-t p-6">
              <div className="flex items-center justify-center text-xs text-gray-500">
                <Lock className="mr-1 h-3 w-3" />
                <span>End-to-end encrypted connection</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="text-navy h-4 w-4" />
                <span>Don't have an account? Contact your protocol officer</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClientLogin;
