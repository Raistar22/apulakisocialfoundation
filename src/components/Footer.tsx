import { useState } from "react";
import { MapPin, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Organization Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Organization Details</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              We are dedicated to the holistic development of communities across Maharashtra, with a primary focus on environmental sustainability.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Area of Operation:</p>
                  <p className="text-muted-foreground">Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Location:</p>
                  <p className="text-muted-foreground">Waghapur, Tal. Purandar, Dist. Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get Updates</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay informed about our latest projects and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-muted border-border"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
