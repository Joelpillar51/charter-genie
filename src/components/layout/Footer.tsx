
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CharterGenie</h3>
            <p className="text-muted-foreground text-sm">
              AI-powered legal document generator for your business.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground text-sm hover:text-foreground transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CharterGenie. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="text-muted-foreground text-xs hover:text-foreground transition">
              Twitter
            </Link>
            <Link to="#" className="text-muted-foreground text-xs hover:text-foreground transition">
              LinkedIn
            </Link>
            <Link to="#" className="text-muted-foreground text-xs hover:text-foreground transition">
              Facebook
            </Link>
            <Link to="#" className="text-muted-foreground text-xs hover:text-foreground transition">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
