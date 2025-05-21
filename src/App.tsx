
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthProvider } from "@/components/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import GeneratePolicy from "./pages/GeneratePolicy";
import Documents from "./pages/Documents";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Disclaimer from "./pages/legal/Disclaimer";
import SignOut from "./pages/SignOut";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Sign Out Route */}
              <Route path="/signout" element={<SignOut />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              
              {/* Protected Dashboard Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/generate" element={
                <ProtectedRoute>
                  <GeneratePolicy />
                </ProtectedRoute>
              } />
              <Route path="/documents" element={
                <ProtectedRoute>
                  <Documents />
                </ProtectedRoute>
              } />
              <Route path="/account" element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
