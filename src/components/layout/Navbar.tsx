
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              CharterGenie
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="header-link">
              Home
            </Link>
            <Link to="/features" className="header-link">
              Features
            </Link>
            <Link to="/pricing" className="header-link">
              Pricing
            </Link>
            <Link to="/blog" className="header-link">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="header-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" asChild>
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
            <Button asChild>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
