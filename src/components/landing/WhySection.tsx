
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why CharterGenie?
          </h2>
          <p className="text-muted-foreground text-lg">
            We're built differently from traditional legal document generators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Designed for builders, not lawyers</h3>
                <p className="text-muted-foreground">
                  Our platform is built for founders, developers, and creators who need legal documents without the legal headache.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pay as you grow</h3>
                <p className="text-muted-foreground">
                  Start with our free plan and only upgrade when you need to. No surprise fees or hidden costs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Industry-specific AI</h3>
                <p className="text-muted-foreground">
                  Our AI adapts to your specific industry needs, creating tailored policies that make sense for your business.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Modern, user-friendly interface</h3>
                <p className="text-muted-foreground">
                  No confusing legal forms or complex workflows. Just a clean, straightforward experience.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick setup</h3>
                <p className="text-muted-foreground">
                  Get your first policy generated in under 5 minutes. No lengthy onboarding process required.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-primary/10 h-fit">
                <ShieldCheckIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Future-proof compliance</h3>
                <p className="text-muted-foreground">
                  Coming soon: Automatic updates when regulations change, keeping your documents compliant with zero effort.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/features">View All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
