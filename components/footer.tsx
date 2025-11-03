import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Gurukulam", href: "/about" },
    { name: "About Shree Easanamma", href: "/about-easanamma" },
    { name: "Chita Viruthi Nirodha", href: "/chita-viruthi-nirodha" },
    { name: "Panchaagni Vithai", href: "/panchaagni-vithai" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="py-20 md:py-28 min-h-[240px] bg-gradient-to-r from-[#ff6b00] to-[#ffeb3b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-center">
            <Image
              src="/Easanamma-Name-Logo-2-Black.png"
              alt="Shree Easanamma Gurukulam"
              width={200}
              height={60}
              className="h-auto w-auto object-contain mx-auto"
            />
            <p className="text-sm text-black/70 mt-4">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
