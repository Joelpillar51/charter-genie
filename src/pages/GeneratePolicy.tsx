
import Sidebar from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { toast } from "@/components/ui/use-toast";

const GeneratePolicy = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    documentType: "",
    companyName: "",
    website: "",
    industry: "",
    country: "",
    email: "",
    additionalInfo: "",
  });
  const [generatedText, setGeneratedText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Placeholder generated text for demo purposes
      setGeneratedText(
        `# Privacy Policy for ${formData.companyName}

## Introduction
This Privacy Policy explains how ${formData.companyName} ("we," "us," or "our") collects, uses, and discloses information about you when you visit our website at ${formData.website}.

## Information We Collect
We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, contact us for support, or otherwise communicate with us.

## How We Use Your Information
We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information
- Send you technical notices, updates, security alerts, and support messages
- Respond to your comments, questions, and requests
- Develop new products and services

## Contact Us
If you have any questions about this Privacy Policy, please contact us at: ${formData.email}

Last updated: ${new Date().toLocaleDateString()}`
      );

      toast({
        title: "Document generated successfully",
        description: "Your document has been generated and is ready for review.",
      });
    }, 2000);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Generate Policy</h1>
          </div>
          <ThemeToggle />
        </header>

        <main className="p-4 md:p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="documentType">Document Type</Label>
                      <Select
                        value={formData.documentType}
                        onValueChange={(value) =>
                          handleSelectChange("documentType", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="privacy-policy">Privacy Policy</SelectItem>
                          <SelectItem value="terms-of-service">Terms of Service</SelectItem>
                          <SelectItem value="gdpr">GDPR Compliance Document</SelectItem>
                          <SelectItem value="cookie-policy">Cookie Policy</SelectItem>
                          <SelectItem value="disclaimer">Disclaimer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          handleSelectChange("industry", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px] overflow-y-auto">
                          <SelectItem value="e-commerce">E-commerce</SelectItem>
                          <SelectItem value="ecommerce-dropshipping">eCommerce & Dropshipping</SelectItem>
                          <SelectItem value="saas">SaaS (Software-as-a-Service) Startups</SelectItem>
                          <SelectItem value="digital-agency">Digital Agencies</SelectItem>
                          <SelectItem value="freelancer">Freelancers (Designers, Developers, Marketers)</SelectItem>
                          <SelectItem value="online-courses">Online Course Creators / Info Product Sellers</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Developers</SelectItem>
                          <SelectItem value="chrome-extension">Chrome Extension Developers</SelectItem>
                          <SelectItem value="bloggers">Bloggers & Content Creators</SelectItem>
                          <SelectItem value="affiliate-marketing">Affiliate Marketers</SelectItem>
                          <SelectItem value="fintech">Fintech & Crypto Platforms</SelectItem>
                          <SelectItem value="defi">DeFi Apps</SelectItem>
                          <SelectItem value="healthcare">Healthcare & Wellness Platforms</SelectItem>
                          <SelectItem value="real-estate">Real Estate Websites</SelectItem>
                          <SelectItem value="education">Educational Platforms & EdTech</SelectItem>
                          <SelectItem value="no-code">No-Code and Low-Code App Builders</SelectItem>
                          <SelectItem value="legal-tech">LegalTech Startups</SelectItem>
                          <SelectItem value="travel">Travel & Booking Platforms</SelectItem>
                          <SelectItem value="marketplaces">Marketplaces & Classified Ad Sites</SelectItem>
                          <SelectItem value="job-boards">Job Boards & HR Tools</SelectItem>
                          <SelectItem value="influencers">Influencers with Websites or Newsletters</SelectItem>
                          <SelectItem value="membership">Membership Sites / Community Platforms</SelectItem>
                          <SelectItem value="lead-generation">Lead Generation Sites</SelectItem>
                          <SelectItem value="web-hosting">Web Hosting & Domain Providers</SelectItem>
                          <SelectItem value="nonprofits">Nonprofits Collecting Data</SelectItem>
                          <SelectItem value="event-management">Event Management & Ticketing Platforms</SelectItem>
                          <SelectItem value="software">Software/SaaS</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="country">Country of Operation</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleSelectChange("country", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="eu">European Union</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="email">Contact Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any specific requirements or details you'd like to include"
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Generating..." : "Generate Document"}
                  </Button>
                </form>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <Tabs defaultValue="preview" className="h-full">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="markdown">Markdown</TabsTrigger>
                    </TabsList>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!generatedText}
                        onClick={() => {
                          toast({
                            title: "Document copied to clipboard",
                            description: "You can now paste it wherever you need.",
                          });
                        }}
                      >
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!generatedText}
                        onClick={() => {
                          toast({
                            title: "Document downloaded",
                            description: "Your document has been saved to your device.",
                          });
                        }}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                  <TabsContent value="preview" className="p-4 h-[calc(100%-48px)] overflow-auto">
                    {generatedText ? (
                      <div className="prose dark:prose-invert max-w-none">
                        {generatedText.split("\n").map((line, i) => {
                          if (line.startsWith("# ")) {
                            return <h1 key={i} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                          } else if (line.startsWith("## ")) {
                            return <h2 key={i} className="text-xl font-semibold mt-5 mb-3">{line.substring(3)}</h2>;
                          } else if (line.startsWith("- ")) {
                            return <li key={i} className="ml-6 mb-1">{line.substring(2)}</li>;
                          } else if (line === "") {
                            return <br key={i} />;
                          } else {
                            return <p key={i} className="mb-4">{line}</p>;
                          }
                        })}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-center p-6">
                        <div className="max-w-md space-y-2">
                          <h3 className="text-lg font-medium">No document generated yet</h3>
                          <p className="text-muted-foreground">
                            Fill out the form and click "Generate Document" to create your legal document.
                          </p>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="markdown" className="p-0 h-[calc(100%-48px)]">
                    <div className="h-full">
                      <Textarea
                        className="h-full border-0 p-4 resize-none font-mono text-sm"
                        value={generatedText}
                        readOnly
                        placeholder="Generated markdown will appear here"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GeneratePolicy;
