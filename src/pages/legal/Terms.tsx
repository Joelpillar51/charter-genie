
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-8 pb-16">
        <div className="container px-4 md:px-6">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose prose-blue dark:prose-invert mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertTitle>Last Updated</AlertTitle>
              <AlertDescription>May 20, 2025</AlertDescription>
            </Alert>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  Welcome to CharterGenie. These Terms of Service ("Terms") govern your use of our website 
                  located at chartergenie.com and our legal document generation services (collectively, the "Service").
                </p>
                <p>
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with 
                  any part of the Terms, you may not access the Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and up-to-date information. 
                  You are responsible for safeguarding the password that you use to access the Service and for any 
                  activities or actions under your password.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon 
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Subscriptions and Payments</h2>
                <p>
                  Some parts of the Service are available on a subscription basis. If you choose a subscription plan, 
                  you agree to pay the subscription fees as quoted at the time of purchase.
                </p>
                <p>
                  Subscriptions will automatically renew unless canceled by you at least 24 hours before the end 
                  of the current billing period. You can cancel your subscription at any time in your account settings.
                </p>
                <p>
                  We reserve the right to modify our pricing at any time. Any price changes will be communicated 
                  to you with reasonable notice before they take effect.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Service Limitations and Disclaimer</h2>
                <p>
                  CharterGenie provides automated legal document generation based on information you provide. 
                  We are not a law firm, and the Service does not provide legal advice. The documents generated 
                  are templates only and should be reviewed by a qualified legal professional before use.
                </p>
                <p>
                  We do not guarantee that the documents generated will be suitable for your specific needs or 
                  compliant with all applicable laws. The legal requirements for your business may vary based on 
                  your location, industry, and other factors.
                </p>
                <p>
                  BY USING THE SERVICE, YOU ACKNOWLEDGE THAT CHARTERGENIE IS NOT A SUBSTITUTE FOR LEGAL COUNSEL.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive 
                  property of CharterGenie and its licensors. The Service is protected by copyright, trademark, 
                  and other laws of both the United States and foreign countries.
                </p>
                <p>
                  For documents generated by the Service, you retain ownership of any information you provide to us, 
                  and you own the final generated documents for your use. However, we retain ownership of the document 
                  templates, formatting, and generation technology.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. User Content</h2>
                <p>
                  By submitting information to generate legal documents, you grant us the right to use this information 
                  to provide the Service to you. You represent and warrant that you own or have the necessary rights 
                  to all information you provide and that such information does not violate these Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Prohibited Uses</h2>
                <p>You agree not to use the Service:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In any way that violates any applicable laws or regulations</li>
                  <li>To impersonate any person or entity or falsely represent your affiliation</li>
                  <li>To engage in any conduct that restricts or inhibits anyone's use of the Service</li>
                  <li>To attempt to gain unauthorized access to the Service or related systems</li>
                  <li>To use any automated means to access the Service without our permission</li>
                  <li>To introduce any viruses, trojans, or other harmful material</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any 
                  reason, including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate 
                  your account, you may simply discontinue using the Service or deactivate your account.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL CHARTERGENIE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, 
                  BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT 
                  LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR 
                  ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we 
                  will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p>
                  By continuing to access or use our Service after those revisions become effective, you agree to 
                  be bound by the revised terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-3">
                  Email: legal@chartergenie.com<br />
                  Address: 123 Tech Drive, Suite 500, San Francisco, CA 94107
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
