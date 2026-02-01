import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Smartphone, Building2, TreePine, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const donationAmounts = [100, 500, 1000, 5000];

const paymentMethods = [
  { id: "upi", label: "UPI", icon: Smartphone, description: "Pay via UPI apps" },
  { id: "card", label: "Card", icon: CreditCard, description: "Credit/Debit Card" },
  { id: "bank", label: "Bank Transfer", icon: Building2, description: "Direct bank transfer" },
];

const DonationModal = ({ open, onOpenChange }: DonationModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDonate = () => {
    setIsProcessing(true);
    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
        setSelectedAmount(500);
        setCustomAmount("");
      }, 2000);
    }, 1500);
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your donation of ₹{finalAmount?.toLocaleString()} has been received.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <TreePine className="w-5 h-5 text-secondary" />
            Make a Donation
          </DialogTitle>
          <DialogDescription>
            Your contribution helps us plant more trees and protect biodiversity.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Amount Selection */}
          <div className="space-y-3">
            <Label className="text-foreground">Select Amount (₹)</Label>
            <div className="grid grid-cols-4 gap-2">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
                  className={cn(
                    "h-12",
                    selectedAmount === amount && !customAmount && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                >
                  ₹{amount.toLocaleString()}
                </Button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                type="number"
                placeholder="Enter custom amount"
                className="pl-7"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <Label className="text-foreground">Payment Method</Label>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-lg border transition-all",
                    selectedMethod === method.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      selectedMethod === method.id ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  {selectedMethod === method.id && (
                    <Check className="w-5 h-5 text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details (QR / Bank) */}
          {selectedMethod === "upi" && (
            <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-muted/30">
              <p className="text-sm font-medium text-foreground">Scan QR to Pay via any UPI App</p>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img
                  src="/donation_qr.jpg"
                  alt="Donation QR Code"
                  className="w-48 h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground">APULAKI SOCIAL FOUNDATION</p>
            </div>
          )}

          {selectedMethod === "bank" && (
            <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
              <p className="text-sm font-medium text-foreground border-b pb-2">Bank Account Details</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Name:</span>
                  <span className="font-medium text-foreground">APULAKI SOCIAL FOUNDATION</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Number:</span>
                  <span className="font-mono font-medium text-foreground">060610210000245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IFSC Code:</span>
                  <span className="font-mono font-medium text-foreground">BKID0000606</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bank:</span>
                  <span className="font-medium text-foreground">Bank of India</span>
                </div>
              </div>
            </div>
          )}

          {/* Donate Button */}
          <Button
            className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium"
            onClick={handleDonate}
            disabled={!finalAmount || finalAmount <= 0 || isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                Done
              </span>
            ) : (
              `I have donated ₹${finalAmount?.toLocaleString() || 0}`
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Please share a screenshot of your payment on our WhatsApp after donating.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
