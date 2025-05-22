
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, CheckIcon, ShieldCheck, ShieldCheckIcon, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Gradient and Animation */}
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

        {/* Features Section */}
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

        {/* Why CharterGenie Section */}
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

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Trusted by businesses worldwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                    MB
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Michael Brown</h4>
                    <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "CharterGenie saved us thousands in legal fees. We created all our company policies in less than a day."
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                    SJ
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Founder, EcoGoods</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The compliance guarantee gives me peace of mind knowing our documents are always up to date with regulations."
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold">
                    DP
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">David Parker</h4>
                    <p className="text-sm text-muted-foreground">Legal Director, MediaCorp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a legal professional, I'm impressed by the accuracy and comprehensiveness of CharterGenie's documents."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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

        {/* CTA Section */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
