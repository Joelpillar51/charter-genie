
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "What is GDPR and Why It Matters for Your Business?",
    excerpt: "Learn about the General Data Protection Regulation and how it affects businesses around the world.",
    date: "May 15, 2025",
    category: "Compliance",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "How to Create an Effective Privacy Policy",
    excerpt: "A step-by-step guide to creating a privacy policy that builds trust with your users and meets legal requirements.",
    date: "May 10, 2025",
    category: "Guides",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "5 Common Legal Mistakes Startups Make",
    excerpt: "Avoid these legal pitfalls that could cost your startup time, money, and reputation.",
    date: "May 5, 2025",
    category: "Startups",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "The CCPA Explained: California Consumer Privacy Act",
    excerpt: "What businesses need to know about California's comprehensive consumer privacy law.",
    date: "April 28, 2025",
    category: "Compliance",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Why Every Website Needs Terms of Service",
    excerpt: "Protect your business and clarify user expectations with a solid terms of service agreement.",
    date: "April 20, 2025",
    category: "Legal Tips",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "How AI is Transforming Legal Document Creation",
    excerpt: "The revolution in legal tech that's making compliance accessible to businesses of all sizes.",
    date: "April 15, 2025",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 pb-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">CharterGenie Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Updates, guides, and insights about legal compliance for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link to={`/blog/${post.id}`} className="flex items-center text-primary hover:text-primary/80">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="mx-auto">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
