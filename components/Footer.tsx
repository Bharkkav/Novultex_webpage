import Link from 'next/link'
import Image from 'next/image'

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.83c0 1.74.45 3.44 1.31 4.94L2 22l5.38-1.41a9.9 9.9 0 0 0 4.65 1.18h.01c5.41 0 9.83-4.4 9.83-9.83 0-2.63-1.02-5.1-2.82-6.99ZM12.04 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.19.84.85-3.11-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.68-8.18 8.21-8.18 2.19 0 4.24.85 5.79 2.4a8.1 8.1 0 0 1 2.39 5.79c0 4.52-3.68 8.2-8.19 8.2Zm4.49-6.12c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.28.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.85.83-.85 2.02 0 1.18.87 2.33.99 2.49.12.17 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.12-.25 6.3 5.15a.9.9 0 0 0 1.16 0l6.3-5.15H5.12Zm14.38 1.94-5.81 4.75a2.4 2.4 0 0 1-3.04 0L4.5 8.44v8.81c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V8.44Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white/85 border-t border-sky-100">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
              <Image
                src="/assets/company-logo.png"
                alt="Novultex logo"
                width={76}
                height={76}
                className="h-[58px] w-[58px] md:h-[76px] md:w-[76px] object-contain flex-shrink-0"
              />
              <span className="font-bold text-base md:text-lg">Novultex</span>
            </Link>
            <p className="text-slate-600 text-sm mb-4">
              Engineering embedded, IoT, and software solutions that connect the physical and digital world.
            </p>
            <p className="text-slate-500 text-sm mb-2">
              <a href="mailto:info@novultex.com" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                <span className="text-primary">
                  <MailIcon />
                </span>
                <span>info@novultex.com</span>
              </a>
            </p>
            <p className="text-slate-500 text-sm">
              <a href="https://wa.me/94707099955" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                <span className="text-accent">
                  <WhatsAppIcon />
                </span>
                <span>+94 70 709 9955</span>
              </a>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold mb-4 text-slate-900">Company</h5>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-slate-600 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-primary transition-colors text-sm">
                Projects
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-semibold mb-4 text-slate-900">Services</h5>
            <nav className="flex flex-col gap-3">
              <Link href="/services#embedded" className="text-slate-600 hover:text-primary transition-colors text-sm">
                Embedded Systems
              </Link>
              <Link href="/services#pcb" className="text-slate-600 hover:text-primary transition-colors text-sm">
                PCB Design
              </Link>
              <Link href="/services#complete-iot" className="text-slate-600 hover:text-primary transition-colors text-sm">
                IoT Projects
              </Link>
              <Link href="/services#software" className="text-slate-600 hover:text-primary transition-colors text-sm">
                Software Dev
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h5 className="font-semibold mb-4 text-slate-900">Start a Project</h5>
            <p className="text-slate-600 text-sm mb-4">Have an idea? Let&apos;s talk about making it real.</p>
            <Link href="/contact#quote" className="btn btn--primary text-sm">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sky-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Novultex (PVT) LTD. All rights reserved.</p>
            <p>Built by Bharkkav</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
