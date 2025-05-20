
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckIcon, GlobeIcon, SaveIcon, FileTextIcon, Settings2Icon, CodeIcon, UsersIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Features — What You Get with CharterGenie
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our AI-powered platform makes legal document generation simple, fast, and compliant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Feature 1 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <FileTextIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Policy Generator</h3>
                <p className="text-muted-foreground mb-3">
                  Effortlessly create <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>Privacy Policy</strong>, <strong>Terms of Service</strong>, and <strong>Cookie Policies</strong> with just a few prompts.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  ⚡ No legal jargon needed — we simplify it for your audience and your jurisdiction.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <Settings2Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Click Document Customization</h3>
                <p className="text-muted-foreground mb-3">
                  Add your business name, industry, and compliance needs — and CharterGenie adapts the language instantly.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  ✍️ Tailored legal content without needing a lawyer.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <GlobeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Built for Global Compliance</h3>
                <p className="text-muted-foreground mb-3">
                  Generate policies that align with laws across <strong>the US, EU, Canada, UK</strong>, and more.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  🌍 Stay compliant anywhere your users are.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <SaveIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save & Manage Documents in One Place</h3>
                <p className="text-muted-foreground mb-3">
                  Your dashboard stores every policy you've ever generated — edit, re-download, or export anytime.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  🗃️ No more digging through emails or outdated docs.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <Settings2Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Auto-Sync Updates (Coming Soon)</h3>
                <p className="text-muted-foreground mb-3">
                  We'll notify you (or auto-update) when regulations change — so your policies stay compliant.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  🔄 Stay future-proof with zero effort.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <CodeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Simple Embed Code</h3>
                <p className="text-muted-foreground mb-3">
                  Drop a lightweight code snippet into your site to display your legal policies automatically.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  💡 No developer? No problem.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="feature-card border-0 shadow-none hover:shadow-none p-0 items-start text-left col-span-1 md:col-span-2">
                <div className="p-3 mb-4 rounded-full bg-primary/10 inline-flex">
                  <UsersIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Friendly for Non-Lawyers</h3>
                <p className="text-muted-foreground mb-3">
                  Built for solo founders, SaaS builders, agencies, and creators — not law firms.
                </p>
                <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md italic text-sm">
                  🛠️ We keep it human and practical.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes CharterGenie Different */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                What Makes CharterGenie Different?
              </h2>
            </div>
            
            <div className="overflow-x-auto mb-8">
              <Table className="border rounded-lg overflow-hidden">
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[300px] font-medium">Feature</TableHead>
                    <TableHead className="text-center font-medium">CharterGenie 🟢</TableHead>
                    <TableHead className="text-center font-medium">Competitors 🔴</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Designed for Solo/SaaS Users</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Mostly legal teams</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pay-as-you-grow pricing</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Often overpriced</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AI prompts tailored by industry</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Generic output</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auto-update policies</TableCell>
                    <TableCell className="text-center">✅ Planned</TableCell>
                    <TableCell className="text-center">❌ Manual updates required</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">No confusing legal jargon</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Hard to understand</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Modern UI & document dashboard</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Outdated/Complex UI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quick setup (under 5 mins)</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Long onboarding</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">No hidden fees or surprise paywalls</TableCell>
                    <TableCell className="text-center">✅ Yes</TableCell>
                    <TableCell className="text-center">❌ Often locked features</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Built For Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Built for:
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="p-6 border rounded-xl text-center">
                <p className="font-semibold">Solo founders launching MVPs</p>
              </div>
              <div className="p-6 border rounded-xl text-center">
                <p className="font-semibold">Designers, devs, and SaaS builders</p>
              </div>
              <div className="p-6 border rounded-xl text-center">
                <p className="font-semibold">Agencies creating multiple client sites</p>
              </div>
              <div className="p-6 border rounded-xl text-center">
                <p className="font-semibold">Indie hackers & no-code creators</p>
              </div>
              <div className="p-6 border rounded-xl text-center">
                <p className="font-semibold">Anyone who just wants to be compliant fast</p>
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

export default Features;
