'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useIntersectionObserver } from '@/lib/hooks'

export default function Home() {
  const marqueeItems = [
    'Embedded Systems',
    'IoT Development',
    'PCB Design',
    'Software Solutions',
    'System Customization',
    'Firmware Engineering',
  ]

  const serviceCards = [
    {
      num: '01',
      icon: '⌁',
      title: 'Embedded & IoT Systems',
      desc: 'Custom microcontroller programming, sensor integration, wireless communication (WiFi, BLE, Zigbee, LoRa), and cloud-connected hardware built to your exact specifications.',
    },
    {
      num: '02',
      icon: '▦',
      title: 'PCB Design & Prototyping',
      desc: 'Schematic capture, multi-layer PCB layout, signal integrity analysis, and prototype manufacturing — from concept to a board you can hold in your hand.',
    },
    {
      num: '03',
      icon: '</>',
      title: 'Software Development',
      desc: 'Web platforms, mobile applications, dashboards, and APIs. Clean, maintainable code on the frontend and backend — built to scale with your business.',
    },
    {
      num: '04',
      icon: '◎',
      title: 'Complete IoT Projects',
      desc: 'Full-stack IoT delivery: hardware design, firmware, gateway logic, cloud backend, and user-facing dashboard — everything integrated and tested as one system.',
    },
    {
      num: '05',
      icon: '⚙',
      title: 'System Customization',
      desc: 'We adapt and extend existing embedded or software systems — firmware upgrades, hardware retrofits, integration with new protocols, and performance tuning.',
    },
    {
      num: '06',
      icon: '◌',
      title: 'Technical Consultation',
      desc: 'Expert guidance on architecture decisions, component selection, toolchain setup, and project feasibility — so you build the right thing, the right way, from day one.',
    },
  ]

  const whyCards = [
    { icon: '✦', title: 'Tailored, Not Template', desc: 'Every solution we build is designed specifically for your requirements — no copy-paste projects.' },
    { icon: '✦', title: 'Dual Expertise', desc: 'We work fluently across hardware and software — rare in the industry and invaluable for IoT projects.' },
    { icon: '✦', title: 'Full Transparency', desc: 'Regular updates, honest timelines, and open communication from kickoff to delivery.' },
    { icon: '✦', title: 'Post-Launch Support', desc: 'We don\'t disappear after delivery. Updates, fixes, and improvements are part of our commitment.' },
    { icon: '✦', title: 'Quality Engineering', desc: 'Tested in realistic conditions. Built to standards you can be proud to ship to customers.' },
    { icon: '✦', title: 'Global Reach', desc: 'We collaborate with clients across time zones — communicating clearly and delivering consistently.' },
  ]

  const { setRefs } = useIntersectionObserver()

  return (
    <main className="site-shell">
      <Navigation />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(22,150,219,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(31,184,122,0.18),transparent_30%)]"></div>
        <div className="container text-center relative z-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-[0.25em] mb-4">Embedded · IoT · Software · PCB</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Engineering Ideas<br /><em className="text-primary not-italic">Into Reality</em>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Novultex Technologies builds customized embedded systems, complete IoT solutions, professional PCB designs, and software that powers your vision — from concept to deployment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link href="/contact#quote" className="btn btn--primary btn--lg">
              Start Your Project
            </Link>
            <Link href="/services" className="btn btn--ghost btn--lg">
              Explore Services
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Embedded Systems', 'IoT Solutions', 'PCB Design', 'Software Dev'].map((badge) => (
              <span key={badge} className="badge">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8 overflow-hidden bg-white/70 border-y border-sky-100">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-slate-600">{item}</span>
              <span className="text-brand">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section__header text-center max-w-3xl mx-auto">
            <span className="section__tag">What We Do</span>
            <h2 className="section__title">End-to-End Engineering<br />From Idea to Deployment</h2>
            <p className="section__sub">Every project at Novultex is handled with precision — hardware meets software, and embedded meets cloud.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <div
                key={card.num}
                ref={(el) => setRefs(el, card.num)}
                className="fade-in card-surface p-8 hover:border-brand hover:shadow-lg hover:shadow-sky-100 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-primary">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{card.title}</h3>
                <p className="text-slate-600 mb-6">{card.desc}</p>
                <Link href="/services" className="link-arrow">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section__header text-center max-w-3xl mx-auto">
            <span className="section__tag">How We Work</span>
            <h2 className="section__title">Our Process</h2>
            <p className="section__sub">Structured. Transparent. Reliable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discovery Call', desc: 'We understand your goals, constraints, and vision in a focused conversation before touching any tools.' },
              { num: '02', title: 'Design & Architecture', desc: 'We propose a detailed system design — hardware schematics, software architecture, and a clear timeline.' },
              { num: '03', title: 'Build & Iterate', desc: 'Development with regular milestones and updates. You see progress every step of the way.' },
              { num: '04', title: 'Test & Deploy', desc: 'Rigorous testing, real-world validation, and a smooth handover with full documentation.' },
            ].map((step) => (
              <div key={step.num} className="fade-in">
                <div className="text-4xl font-bold text-brand mb-4">{step.num}</div>
                <h4 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY Novultex */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section__tag">Why Choose Us</span>
              <h2 className="section__title">Where Precision<br />Meets Passion</h2>
              <p className="text-slate-600 text-lg mb-8">
                Novultex Technologies is built on a simple belief: great engineering solves real problems elegantly. We bring hardware-software expertise, transparent communication, and genuine care to every project — no matter its scale.
              </p>
              <Link href="/about" className="btn btn--primary">
                About Us →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {whyCards.map((card) => (
                <div key={card.title} className="fade-in flex gap-4">
                  <div className="text-2xl flex-shrink-0">{card.icon}</div>
                  <div>
                    <h4 className="font-bold mb-2 text-slate-900">{card.title}</h4>
                    <p className="text-slate-600 text-sm">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Build Something Exceptional?</h2>
              <p className="text-lg text-white/90">Let&apos;s turn your idea into a working system. Share your concept and we&apos;ll tell you exactly how we&apos;d approach it.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
              <Link href="/contact#quote" className="btn btn--white">
                Request a Quote
              </Link>
              <Link href="/contact#call" className="btn btn--ghost-white">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
