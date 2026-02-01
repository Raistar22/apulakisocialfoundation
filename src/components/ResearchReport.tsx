import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchReport = () => {
    return (
        <section id="research" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Research & Publications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our commitment to biodiversity conservation is backed by extensive fieldwork and research.
                        Explore our latest reports and findings.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow">
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                            <BookOpen className="w-12 h-12 text-primary" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap items-center gap-2 mb-2 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wider">
                                    Featured Report
                                </span>
                                <span className="text-xs text-muted-foreground">PDF Report • 2024</span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Butterflies of Waghapur</h3>
                            <p className="text-muted-foreground mb-6">
                                A comprehensive study and visual report of the diverse butterfly species found in the Waghapur region,
                                documenting the local biodiversity and conservation efforts.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                                    <a
                                        href="https://drive.google.com/file/d/1-ftrnUDjxsCN0r0gXH7Q9g4vixbvfP1G/view?usp=drive_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FileText className="w-4 h-4" />
                                        View Full Report
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchReport;
