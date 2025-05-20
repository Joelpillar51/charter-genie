
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 pb-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground">
                  <a href="mailto:hello@chartergenie.com" className="hover:text-primary transition-colors">
                    hello@chartergenie.com
                  </a>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  We typically respond within 24 hours on business days.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground">
                  <a href="tel:+15555555555" className="hover:text-primary transition-colors">
                    +1 (555) 555-5555
                  </a>
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Available Monday-Friday, 9 AM - 5 PM EST.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground">
                  123 Tech Drive, Suite 500<br />
                  San Francisco, CA 94107
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  By appointment only.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">How quickly can I get my legal documents?</h3>
                <p className="text-muted-foreground mt-2">
                  With CharterGenie, you can generate legal documents in minutes. Simply answer a few questions 
                  about your business, and our AI will create customized documents ready for immediate use.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Are my documents legally binding?</h3>
                <p className="text-muted-foreground mt-2">
                  Yes, all documents generated by CharterGenie are designed to be legally binding. However, 
                  for complex legal situations, we recommend consulting with a legal professional.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">How do I update my documents if regulations change?</h3>
                <p className="text-muted-foreground mt-2">
                  Paid plans include automatic notifications when regulations affecting your documents change. 
                  You can then regenerate your documents with the latest requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
