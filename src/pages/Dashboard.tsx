
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Dashboard = () => {
  // Mocked document types for UI
  const documentTypes = [
    { id: 1, name: "Privacy Policy", icon: FileText },
    { id: 2, name: "Terms of Service", icon: FileText },
    { id: 3, name: "GDPR Compliance", icon: FileText },
    { id: 4, name: "Cookie Policy", icon: FileText },
  ];

  // Mocked recent documents for UI
  const recentDocuments = [
    { id: 1, name: "E-commerce Privacy Policy", date: "May 10, 2023" },
    { id: 2, name: "Blog Terms of Service", date: "Apr 22, 2023" },
    { id: 3, name: "Mobile App GDPR Notice", date: "Mar 15, 2023" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="default" size="sm">
              <Link to="/generate">
                <Plus className="mr-1 h-4 w-4" />
                New Document
              </Link>
            </Button>
          </div>
        </header>
        <main className="grid gap-6 p-4 md:p-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Quick Generate</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {documentTypes.map((type) => (
                  <Link to={`/generate?type=${type.id}`} key={type.id}>
                    <Card className="h-full document-card">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <type.icon className="h-10 w-10 text-muted-foreground mb-2" />
                        <h3 className="font-medium">{type.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Documents</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/documents">
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {recentDocuments.length > 0 ? (
                <div className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <Card key={doc.id} className="document-card">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-muted-foreground mr-3" />
                          <div>
                            <h3 className="font-medium">{doc.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Created: {doc.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/documents/${doc.id}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                    <FileText className="h-10 w-10 text-muted-foreground mb-3" />
                    <h3 className="font-medium mb-2">No documents yet</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create your first document to see it here
                    </p>
                    <Button asChild>
                      <Link to="/generate">Create Document</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>
          <div className="col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Summary</CardTitle>
                <CardDescription>Your current plan usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Document Generations
                    </span>
                    <span className="text-sm text-muted-foreground">3/5</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/account">Upgrade Plan</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
                <CardDescription>
                  Get the most out of CharterGenie
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">
                      Customize your documents
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Add your company details for more personalized documents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Save your templates</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Create templates for your most used document types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Share with your team</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Invite team members to collaborate on documents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
