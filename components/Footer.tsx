import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 border-t border-gray-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
              <div className="h-8 w-8 bg-accent rounded flex items-center justify-center">
                <span className="font-bold text-black text-sm">Z</span>
              </div>
              <span className="font-bold text-lg">Novultex</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Engineering embedded, IoT, and software solutions that connect the physical and digital world.
            </p>
            <p className="text-gray-500 text-sm">
              <a href="mailto:hello@Novultex.com" className="hover:text-accent transition-colors">
                hello@Novultex.com
              </a>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Services
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <nav className="flex flex-col gap-3">
              <Link href="/services#embedded" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Embedded Systems
              </Link>
              <Link href="/services#pcb" className="text-gray-400 hover:text-accent transition-colors text-sm">
                PCB Design
              </Link>
              <Link href="/services#complete-iot" className="text-gray-400 hover:text-accent transition-colors text-sm">
                IoT Projects
              </Link>
              <Link href="/services#software" className="text-gray-400 hover:text-accent transition-colors text-sm">
                Software Dev
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h5 className="font-semibold mb-4">Start a Project</h5>
            <p className="text-gray-400 text-sm mb-4">Have an idea? Let's talk about making it real.</p>
            <Link href="/contact#quote" className="btn btn--primary text-sm">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Novultex Technologies. All rights reserved.</p>
            <p>Built by Bharkkav</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
