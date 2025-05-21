
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/components/AuthProvider";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error("Failed to sign in", {
          description: error.message,
        });
      } else {
        toast.success("Successfully signed in");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Sign in error:", err);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google sign in error:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to your CharterGenie account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            type="button" 
            className="w-full"
            onClick={handleGoogleSignIn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 186.69 190.5" className="mr-2">
              <path fill="#4285f4" d="M95.25 77.932v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" />
              <path fill="#34a853" d="M41.87 113.317l-6.849 5.302-24.022 18.67c15.712 31.122 47.987 52.529 84.837 52.529 25.505 0 46.887-8.485 62.523-22.999l-30.913-23.986c-8.546 5.765-19.54 9.153-31.61 9.153-24.317 0-44.944-16.419-52.298-38.469z" />
              <path fill="#fbbc05" d="M41.87 76.9l30.913-23.986C80.266 38.081 101.39 28.45 125.613 28.45c19.686 0 37.29 6.995 51.142 18.273l27.593-26.404C182.284 7.319 154.691 0 125.613 0 77.626 0 36.027 29.225 16.323 70.385L41.87 76.9z" />
              <path fill="#ea4335" d="M125.613 190.5c28.811 0 56.143-7.319 77.742-20.318l-30.913-23.986c-14.179 9.557-31.476 15.036-46.829 15.036-36.85 0-69.126-21.408-84.837-52.529l-25.547 6.514C35.73 161.384 77.626 190.5 125.613 190.5z" />
            </svg>
            Sign in with Google
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
