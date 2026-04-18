'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  const values = [
    { title: 'Precision', desc: 'We sweat the details others overlook. Signal integrity, edge cases, error handling — all of it matters to us.' },
    { title: 'Transparency', desc: 'Honest timelines, clear communication, and no surprises. You always know where your project stands.' },
    { title: 'Ownership', desc: 'We treat your project as if it were ours. Success is not just your goal — it\'s ours too.' },
    { title: 'Innovation', desc: 'We stay current with technology so our solutions are never outdated before they launch.' },
    { title: 'Reliability', desc: 'Deadlines matter. Commitments are kept. Our track record speaks for this.' },
    { title: 'Collaboration', desc: 'We work with you, not just for you. Your domain knowledge combined with our technical depth produces better results.' },
  ]

  return (
    <main className="site-shell">
      <Navigation />

      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24 md:pt-32">
        <div className="container text-center">
          <span className="section__tag">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            The Team Behind<br /><em className="text-accent">Novultex Technologies</em>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We are a focused engineering company dedicated to building customized embedded, IoT, and software systems that actually work — in the real world, for real clients.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="section__tag">Our Story</span>
              <h2 className="section__title">Founded on Engineering,<br />Driven by Purpose</h2>
              <p className="text-slate-600 mb-4">
                Novultex Technologies was founded by Bharkkav with one clear goal: to bridge the gap between complex engineering and practical outcomes. Too many innovative ideas fail not because the concept is wrong, but because the execution lacks depth.
              </p>
              <p className="text-slate-600 mb-4">
                We started with embedded systems — writing firmware, designing circuits, building hardware that interacts with the physical world. Over time, our scope grew: IoT connectivity, PCB design, software platforms, and end-to-end system delivery became our signature.
              </p>
              <p className="text-slate-600">
                Today, Novultex serves clients across borders, bringing a level of precision and care that larger firms often miss. We keep our team tight and our standards high.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { num: '01', title: 'Founded', desc: 'Built from the ground up with a singular focus on high-quality embedded and IoT engineering.' },
                { num: '02', title: 'Evolved', desc: 'Expanded into PCB design, complete IoT projects, and full-stack software development.' },
                { num: '03', title: 'Growing', desc: 'Now serving clients globally — with the same personal attention as day one.' },
              ].map((card) => (
                <div key={card.num} className="card-surface p-8">
                  <div className="text-4xl font-bold text-brand mb-4">{card.num}</div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900">{card.title}</h4>
                  <p className="text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section-soft">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-surface p-10">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-4">Mission</div>
              <h3 className="text-2xl font-bold mb-4">To deliver engineering solutions that are not just functional, but exceptional — built to last, built to perform.</h3>
              <p className="text-slate-600">
                We believe in the power of well-crafted systems. Every line of firmware, every PCB trace, every API endpoint — done with intention and pride.
              </p>
            </div>

            <div className="card-surface p-10">
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-4">Vision</div>
              <h3 className="text-2xl font-bold mb-4">To be the go-to partner for innovators who need hardware-software expertise they can trust completely.</h3>
              <p className="text-slate-600">
                We envision a world where great engineering ideas are never held back by poor execution. Novultex exists to close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section__header text-center max-w-3xl mx-auto">
            <span className="section__tag">What We Stand For</span>
            <h2 className="section__title">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-surface p-8">
                <div className="text-2xl mb-4 text-brand">◆</div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section section-soft">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
              <div className="text-5xl md:text-6xl font-bold text-accent">B</div>
            </div>

            <div>
              <span className="section__tag">Founder</span>
              <h2 className="text-4xl font-bold mt-4 mb-2">Bharkkav</h2>
              <p className="text-accent font-semibold mb-4">Founder & Lead Engineer, Novultex Technologies</p>
              <p className="text-slate-600 mb-4">
                With deep expertise across embedded systems, IoT architecture, PCB design, and software development, Bharkkav founded Novultex Technologies to create a firm where quality engineering and client satisfaction are never in conflict.
              </p>
              <blockquote className="text-lg italic text-slate-600 border-l-4 border-brand pl-4 mb-6">
                &ldquo;I started Novultex because I believe that real engineering - careful, tested, well-thought-out engineering - can solve almost any problem. Every client who brings us a challenge gets my personal commitment to making it work.&rdquo;
              </blockquote>
              <Link href="/contact" className="btn btn--primary">
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Have a Project in Mind?</h2>
              <p className="text-lg text-white/90">We&apos;d love to hear about it. Share your idea and let&apos;s explore how Novultex can bring it to life.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
              <Link href="/contact#quote" className="btn btn--white">
                Get a Quote
              </Link>
              <Link href="/services" className="btn btn--ghost-white">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
