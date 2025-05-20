
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Cookies = () => {
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
                <BreadcrumbPage>Cookies Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose prose-blue dark:prose-invert mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
            
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertTitle>Last Updated</AlertTitle>
              <AlertDescription>May 20, 2025</AlertDescription>
            </Alert>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  This Cookies Policy explains how CharterGenie ("we", "us", or "our") uses cookies and similar 
                  technologies when you visit our website at chartergenie.com or use our services.
                </p>
                <p>
                  By continuing to use our website, you are agreeing to our use of cookies as described in this 
                  Cookies Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when 
                  you visit websites. They are widely used to make websites work more efficiently, provide a better 
                  user experience, and provide information to the website owners.
                </p>
                <p>
                  Cookies help us understand how visitors use our website, which allows us to improve our services 
                  and provide you with a better experience.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Types of Cookies We Use</h2>
                <p>We use the following types of cookies on our website:</p>
                
                <h3 className="text-lg font-medium text-foreground mt-4">3.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core functionality 
                  such as security, network management, and account access. You cannot opt out of these cookies.
                </p>
                
                <h3 className="text-lg font-medium text-foreground mt-4">3.2 Preference Cookies</h3>
                <p>
                  These cookies allow us to remember choices you make when you visit our website, such as your login 
                  information, language preference, or other display settings. They help provide a more personalized 
                  experience and avoid you having to re-enter your preferences every time you visit.
                </p>
                
                <h3 className="text-lg font-medium text-foreground mt-4">3.3 Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously. This helps us improve our website structure and content.
                </p>
                
                <h3 className="text-lg font-medium text-foreground mt-4">3.4 Marketing Cookies</h3>
                <p>
                  These cookies track your online activity to help advertisers deliver more relevant advertising or 
                  to limit how many times you see an ad. They can share this information with other organizations or 
                  advertisers.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Cookies</h2>
                <p>
                  In addition to our own cookies, we may use various third-party cookies for reporting and analytics 
                  purposes. These are cookies from a domain different than our website. The third-party services we 
                  use that may place cookies include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Analytics (for website analytics)</li>
                  <li>Stripe (for payment processing)</li>
                  <li>Intercom (for customer support chat)</li>
                  <li>HubSpot (for marketing)</li>
                </ul>
                <p className="mt-3">
                  Each third party has its own privacy and cookies policies. We encourage you to review these policies.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. How to Manage Cookies</h2>
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. However, 
                  if you limit the ability of websites to set cookies, you may impact your overall user experience.
                </p>
                <p>
                  To manage cookies through your browser settings, please use the help function in your browser or 
                  visit the following links:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-primary">Microsoft Edge</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary">Safari</a></li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookie Consent</h2>
                <p>
                  When you first visit our website, you will be shown a cookie banner requesting your consent to 
                  set non-essential cookies. You can change your cookie preferences at any time by clicking on 
                  the "Cookie Settings" link in the footer of our website.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to this Cookie Policy</h2>
                <p>
                  We may update our Cookies Policy from time to time to reflect changes in technology, regulation, 
                  or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-3">
                  Email: privacy@chartergenie.com<br />
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

export default Cookies;
