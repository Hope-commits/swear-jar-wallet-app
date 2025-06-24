
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RegisterPageProps {
  onBack: () => void;
  onRegister: () => void;
}

const RegisterPage = ({ onBack, onRegister }: RegisterPageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Register attempt:", formData);
    onRegister();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20" />
      
      <Card className="w-full max-w-md backdrop-blur-sm bg-white/80 border-white/20 shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join No Bad Words Wallet
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create your account to start your positive language journey.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="bg-white/50 border-gray-200"
              required
            />
            
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-white/50 border-gray-200"
              required
            />
            
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="bg-white/50 border-gray-200"
              required
            />
            
            <Input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="bg-white/50 border-gray-200"
              required
            />
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Create Account
            </Button>
            
            <div className="text-center">
              <button
                type="button"
                onClick={onBack}
                className="text-blue-600 hover:text-blue-700 text-sm underline"
              >
                Already have an account? Sign in
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
