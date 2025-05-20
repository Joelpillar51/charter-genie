
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send a password reset email
    console.log("Request password reset for:", email);
    toast({
      title: "Password reset link sent",
      description: "Check your email for a link to reset your password.",
    });
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-8">
          {!submitted ? (
            <>
              <div className="text-center">
                <h1 className="text-3xl font-bold">Reset your password</h1>
                <p className="text-muted-foreground mt-2">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-semibold">Check your email</h1>
              <p className="text-muted-foreground">
                We've sent a password reset link to {email}
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:underline"
                >
                  try again
                </button>
              </p>
            </div>
          )}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link to="/signin" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
