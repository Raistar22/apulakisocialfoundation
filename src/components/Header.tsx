import { useState } from "react";
import { ChevronDown, Menu, X, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Who We Are",
      hasDropdown: true,
      items: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Our Story", href: "#story" },
      ],
    },
    {
      name: "Get Involved",
      hasDropdown: true,
      items: [
        { label: "Volunteer", href: "#volunteer" },
        { label: "Donate", href: "#donate" },
        { label: "Partner With Us", href: "#partner" },
      ],
    },
    {
      name: "Projects",
      hasDropdown: true,
      items: [
        { label: "Tree Plantation", href: "#tree-plantation" },
        { label: "Education Programs", href: "#education-programs" },
        { label: "Health Camps", href: "#health-camps" },
      ],
    },
    { name: "Contact", hasDropdown: false, href: "#contact" },
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
            {navItems.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border shadow-lg z-50">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.label}
                        className="cursor-pointer hover:bg-muted focus:bg-muted"
                        asChild
                      >
                        <a href={subItem.href}>{subItem.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
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
              <div key={item.name} className="border-b border-border">
                {item.hasDropdown ? (
                  <MobileDropdown name={item.name} items={item.items || []} />
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground"
                  >
                    {item.name}
                  </a>
                )}
              </div>
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

const MobileDropdown = ({ name, items }: { name: string; items: { label: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground"
      >
        {name}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 pb-2 space-y-2">
          {items.map((subItem) => (
            <a
              key={subItem.label}
              href={subItem.href}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
