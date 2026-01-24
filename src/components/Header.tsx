import { useState } from "react";
import { ChevronDown, Menu, X, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Who We Are", hasDropdown: true },
    { name: "Get Involved", hasDropdown: true },
    { name: "Projects", hasDropdown: true },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <TreePine className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary">Apulaki Social Foundation</h1>
              <p className="text-xs text-muted-foreground">Trees & Biodiversity Conservation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          {/* Donate Button */}
          <Button className="hidden md:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium">
            DONATE NOW
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground border-b border-border"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              DONATE NOW
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
