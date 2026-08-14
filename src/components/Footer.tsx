export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div>
          <p className="text-sm font-medium text-foreground">
            Nila Ellyana
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Customer Success & Client Onboarding Professional
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://www.linkedin.com/in/nila-ellyana-15659176/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/628122770902"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 sm:px-10 lg:px-16">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nila Ellyana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}