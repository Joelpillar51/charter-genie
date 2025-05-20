
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Plus,
  Search,
  Eye,
  Pencil,
  Trash,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for documents
  const allDocuments = [
    {
      id: 1,
      name: "E-commerce Privacy Policy",
      type: "Privacy Policy",
      created: "May 10, 2023",
      updated: "May 15, 2023",
    },
    {
      id: 2,
      name: "Blog Terms of Service",
      type: "Terms of Service",
      created: "Apr 22, 2023",
      updated: "Apr 22, 2023",
    },
    {
      id: 3,
      name: "Mobile App GDPR Notice",
      type: "GDPR Compliance",
      created: "Mar 15, 2023",
      updated: "Mar 20, 2023",
    },
    {
      id: 4,
      name: "SaaS Cookie Policy",
      type: "Cookie Policy",
      created: "Feb 8, 2023",
      updated: "Mar 1, 2023",
    },
    {
      id: 5,
      name: "Website Disclaimer",
      type: "Disclaimer",
      created: "Jan 22, 2023",
      updated: "Jan 25, 2023",
    },
  ];

  // Filter documents based on search query
  const filteredDocuments = allDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    toast({
      title: "Document deleted",
      description: "The document has been permanently deleted.",
    });
    // In a real app, we would remove the document from the list
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Saved Documents</h1>
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

        <main className="p-4 md:p-6 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                Showing {filteredDocuments.length} of {allDocuments.length} documents
              </span>
            </div>
          </div>

          {filteredDocuments.length > 0 ? (
            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="p-4 document-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start md:items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <span>{doc.type}</span>
                          <span className="mx-2">•</span>
                          <span>Created {doc.created}</span>
                          <span className="mx-2">•</span>
                          <span>Last updated {doc.updated}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto md:ml-0">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/documents/${doc.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/documents/${doc.id}/edit`}>
                          <Pencil className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(doc.id)}
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">No documents found</h3>
                <p className="text-muted-foreground">
                  {searchQuery
                    ? `No results for "${searchQuery}". Try a different search term.`
                    : "You haven't created any documents yet."}
                </p>
                {!searchQuery && (
                  <Button asChild>
                    <Link to="/generate">
                      <Plus className="mr-1 h-4 w-4" />
                      Create Your First Document
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Documents;
