import Link from "next/link"

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-gurukulam" },
    { name: "Courses", href: "#chita-viruthi" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-muted/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-center text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} Shree Easanamma Gurukulam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
