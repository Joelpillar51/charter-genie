
import React from "react";
import { CheckIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Legal documents simplified
          </h2>
          <p className="text-muted-foreground text-lg">
            Create, customize, and manage all your legal documents in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="p-3 mb-4 rounded-full bg-primary/10">
              <CheckIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Legally Compliant</h3>
            <p className="text-muted-foreground text-center">
              Up-to-date documents that comply with global regulations and laws.
            </p>
          </div>
          <div className="feature-card">
            <div className="p-3 mb-4 rounded-full bg-primary/10">
              <CheckIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
            <p className="text-muted-foreground text-center">
              Tailor documents to your specific business needs and branding.
            </p>
          </div>
          <div className="feature-card">
            <div className="p-3 mb-4 rounded-full bg-primary/10">
              <CheckIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground text-center">
              Generate complete documents in seconds instead of hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
