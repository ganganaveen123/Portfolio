import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12">
      <div className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} Naveen.co. All rights reserved.
        </div>
        <div>
          Built with <span className="text-red-500">❤️</span> by Ganga Naveen. This portfolio showcases my work, projects, and technical journey.
        </div>
        <a
          href="#hero"
          className="mt-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
