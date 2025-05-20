
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Generate bulletproof legal documents with AI
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Create legally compliant privacy policies, terms of service, and GDPR documentation in minutes, not days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-medium">
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/demo">Watch Demo</Link>
                </Button>
              </div>
              <div className="pt-8 w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="CharterGenie Dashboard Preview"
                  className="w-full h-auto object-cover border rounded-xl"
                />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="border rounded-xl p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground mt-2">
                    For individuals and startups
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>3 document generations per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Basic customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>

              {/* Pro Plan */}
              <div className="border border-primary rounded-xl p-8 flex flex-col h-full bg-primary/5">
                <div className="absolute -mt-10 ml-6 px-2 py-1 rounded-md text-xs font-semibold bg-primary text-white">
                  MOST POPULAR
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground mt-2">
                    For growing businesses
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited document generations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Remove CharterGenie branding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Document version history</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
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
