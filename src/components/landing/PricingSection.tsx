
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that's right for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="border rounded-xl p-8 flex flex-col h-full">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Free Plan</h3>
              <p className="text-muted-foreground mt-2">
                Forever Free
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>1 hosted legal document</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Basic customization</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Public hosted link</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">No logo / PDF export</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Starter Plan */}
          <div className="border border-primary rounded-xl p-8 flex flex-col h-full bg-primary/5 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              MOST POPULAR
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-muted-foreground mt-2">
                For growing businesses
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Up to 10 hosted policies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Custom logo & styling</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Export to PDF</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Remove CharterGenie branding</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Agency Plan */}
          <div className="border rounded-xl p-8 flex flex-col h-full">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Agency</h3>
              <p className="text-muted-foreground mt-2">
                For teams and agencies
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Unlimited hosted policies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Team / client folders</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>White-labeled links</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/pricing">View Full Pricing Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
