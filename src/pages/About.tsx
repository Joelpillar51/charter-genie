
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former legal tech advisor with 10+ years experience in compliance software.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "AI expert who previously built document generation systems for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Legal Content",
    bio: "Corporate lawyer turned tech enthusiast, ensuring all documents meet legal standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Williams",
    role: "Product Manager",
    bio: "User experience specialist focused on making complex legal concepts simple.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                At CharterGenie, we're building the easiest way for businesses to create, manage, and update their legal documents.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2023, CharterGenie emerged from a simple frustration: 
                    why is it so hard for small businesses to create proper legal documents?
                  </p>
                  <p>
                    Our founders experienced this problem firsthand while launching their own 
                    startups and realized that existing solutions were either too expensive, 
                    too complex, or too generic.
                  </p>
                  <p>
                    We set out to build something different — a platform that combines cutting-edge 
                    AI with legal expertise, designed specifically for entrepreneurs, developers, 
                    and creators who need professional legal documents without the complexity.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Landscape"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary text-xl font-bold mb-2">Simplicity</div>
                  <p className="text-muted-foreground">
                    We believe legal compliance shouldn't require a law degree to understand.
                    Everything we build focuses on making complex requirements simple.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary text-xl font-bold mb-2">Accessibility</div>
                  <p className="text-muted-foreground">
                    Quality legal protection should be available to everyone, not just 
                    those who can afford expensive legal teams.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary text-xl font-bold mb-2">Accuracy</div>
                  <p className="text-muted-foreground">
                    We don't compromise on the quality of our documents. Our AI is trained 
                    on the latest regulations to keep your business compliant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Legal Documents?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of businesses that trust CharterGenie for their legal compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/signup">Get Started for Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
