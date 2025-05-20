
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
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
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="prose prose-blue dark:prose-invert mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertTitle>Last Updated</AlertTitle>
              <AlertDescription>May 20, 2025</AlertDescription>
            </Alert>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  At CharterGenie ("we," "our," or "us"), we respect your privacy and are committed to protecting 
                  the personal information you share with us. This Privacy Policy explains how we collect, use, 
                  and safeguard your information when you visit our website at chartergenie.com or use our services.
                </p>
                <p>
                  By accessing or using our Service, you agree to this Privacy Policy. If you do not agree with 
                  any part of this policy, please do not use our website or services.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <h3 className="text-lg font-medium text-foreground">2.1 Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name, email address, and contact details</li>
                  <li>Billing information and transaction history</li>
                  <li>Company information provided in document generation</li>
                  <li>Account credentials</li>
                  <li>Communication data when you contact us</li>
                </ul>
                
                <h3 className="text-lg font-medium text-foreground mt-4">2.2 Usage Information</h3>
                <p>We automatically collect certain information when you visit our website, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral sources</li>
                  <li>Operating system information</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and sending transaction notifications</li>
                  <li>Personalizing your experience</li>
                  <li>Generating legal documents based on your inputs</li>
                  <li>Responding to inquiries and providing customer support</li>
                  <li>Sending service updates and administrative messages</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Ensuring security and preventing fraud</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service providers who help us deliver our services</li>
                  <li>Payment processors for processing transactions</li>
                  <li>Legal and regulatory authorities when required by law</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Potential buyers in case of a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Security of Your Information</h2>
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the 
                  Internet or electronic storage is 100% secure.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at privacy@chartergenie.com.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect information about your browsing 
                  activities. You can manage your cookie preferences through your browser settings.
                </p>
                <p className="mt-3">
                  For more information, please see our <a href="/cookies" className="text-primary hover:underline">Cookies Policy</a>.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 16. We do not knowingly collect personal 
                  information from children under 16. If you believe a child has provided us with personal 
                  information, please contact us immediately.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
