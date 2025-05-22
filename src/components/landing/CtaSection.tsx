
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Ready to simplify your legal documents?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-8">
          Join thousands of businesses creating compliant legal documents in minutes.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link to="/signup">Get Started Free</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
