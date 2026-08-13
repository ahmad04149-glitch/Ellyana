import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContact = () => {
    window.open("https://wa.me/628122770902", "_blank");
  };

  const handleNavigation = (href: string) => {
    setMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-xl border transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="flex min-h-14 items-center justify-between px-4 py-2 sm:px-5">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("#top")}
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Nila Ellyana
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavigation(item.href)}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="rounded-md"
            onClick={handleContact}
          >
            <MessageCircle className="mr-2 h-3.5 w-3.5" />
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-md md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-border px-4 pb-4 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="w-full rounded-md px-3 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </button>
            ))}

            <Button
              type="button"
              className="mt-2 w-full rounded-md"
              onClick={handleContact}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}