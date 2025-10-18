import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TalentAI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#for-recruiters" className="text-foreground hover:text-primary transition-colors">
              For Recruiters
            </a>
            <a href="#for-candidates" className="text-foreground hover:text-primary transition-colors">
              For Job Seekers
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#for-recruiters" className="block text-foreground hover:text-primary transition-colors">
              For Recruiters
            </a>
            <a href="#for-candidates" className="block text-foreground hover:text-primary transition-colors">
              For Job Seekers
            </a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button variant="hero" className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
