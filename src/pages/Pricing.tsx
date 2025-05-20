
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const PricingFeature = ({ included, children }: { included: boolean; children: React.ReactNode }) => (
  <div className="flex items-start space-x-2 mb-2">
    {included ? (
      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
    )}
    <span className={included ? "text-foreground" : "text-muted-foreground"}>{children}</span>
  </div>
);

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 pb-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that works best for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <CardDescription>Forever Free</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Perfect for individuals just starting out</p>
                <div className="pt-4 space-y-1">
                  <PricingFeature included={true}>1 hosted legal document (Privacy Policy, ToS, etc.)</PricingFeature>
                  <PricingFeature included={true}>Basic customization (Company name, Website)</PricingFeature>
                  <PricingFeature included={true}>Public hosted link</PricingFeature>
                  <PricingFeature included={true}>"Powered by CharterGenie" branding</PricingFeature>
                  <PricingFeature included={false}>No logo / PDF export</PricingFeature>
                  <PricingFeature included={false}>No updates</PricingFeature>
                  <PricingFeature included={false}>No analytics</PricingFeature>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Starter Plan */}
            <Card className="border border-primary shadow-md relative bg-primary/5 hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="px-3 py-1 bg-primary text-white font-medium">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Starter Plan</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Everything in Free, plus:</p>
                <div className="pt-4 space-y-1">
                  <PricingFeature included={true}>Up to 10 hosted policies</PricingFeature>
                  <PricingFeature included={true}>Custom logo & styling</PricingFeature>
                  <PricingFeature included={true}>Export to PDF</PricingFeature>
                  <PricingFeature included={true}>Remove CharterGenie branding</PricingFeature>
                  <PricingFeature included={true}>Automatic update reminders</PricingFeature>
                  <PricingFeature included={true}>Email support</PricingFeature>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Agency Plan */}
            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Agency Plan</CardTitle>
                <CardDescription>For teams and agencies</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Everything in Starter, plus:</p>
                <div className="pt-4 space-y-1">
                  <PricingFeature included={true}>Unlimited hosted policies</PricingFeature>
                  <PricingFeature included={true}>Team / client folders</PricingFeature>
                  <PricingFeature included={true}>White-labeled links (your domain)</PricingFeature>
                  <PricingFeature included={true}>Embed on client sites (iframe or JS)</PricingFeature>
                  <PricingFeature included={true}>Custom AI prompt templates</PricingFeature>
                  <PricingFeature included={true}>Priority support</PricingFeature>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ or CTA Section */}
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need something custom?</h2>
            <p className="text-muted-foreground mb-6">
              Reach out to our team for custom enterprise solutions or special requirements.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
