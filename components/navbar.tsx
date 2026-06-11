import Link from "next/link";
import Container from "./container";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between border-b border-[#e6ebf1]">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="text-[32px] font-bold tracking-tight text-[#635bff]">
              K
            </span>

            <span className="text-[15px] font-semibold text-[#0a2540]">
              Kurarin
            </span>
          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-[15px]
                  font-medium
                  text-[#0a2540]
                  transition-colors
                  hover:text-[#635bff]
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="
                hidden
                md:inline-flex
                text-[15px]
                font-medium
                text-[#0a2540]
                hover:text-[#635bff]
                transition-colors
              "
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-[#635bff]
                px-4
                py-2
                text-[15px]
                font-medium
                text-white
                transition-all
                hover:opacity-95
              "
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}