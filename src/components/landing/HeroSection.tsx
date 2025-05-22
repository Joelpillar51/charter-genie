
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiLz48Y2lyY2xlIHN0cm9rZT0iI0YzRjNGMyIgc3Ryb2tlLXdpZHRoPSIyNCIgY3g9IjcyMCIgY3k9IjM4NCIgcj0iMjk1LjUiLz48Y2lyY2xlIHN0cm9rZT0iI0YzRjNGMyIgc3Ryb2tlLXdpZHRoPSIyNCIgY3g9IjcyMCIgY3k9IjM4NCIgcj0iMzQ3LjUiLz48Y2lyY2xlIHN0cm9rZT0iI0YzRjNGMyIgc3Ryb2tlLXdpZHRoPSIyNCIgY3g9IjcyMCIgY3k9IjM4NCIgcj0iMzk5LjUiLz48L2c+PC9zdmc+')]" style={{ opacity: 0.05 }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="space-y-6 text-left">
            <div className="text-primary font-medium mb-2 animate-slide-in-right">All-In-One Legal Solution</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-primary">Generate bulletproof</span> legal documents with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Create legally compliant privacy policies, terms of service, and GDPR documentation in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in pt-4" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="font-medium">
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">CCPA Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Legal Approved</span>
              </div>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="relative">
            <div className="w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in animate-float" style={{ animationDelay: "0.4s" }}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="CharterGenie Dashboard Preview"
                className="w-full h-auto object-cover border rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
