'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 'embedded',
      num: '01',
      title: 'Embedded & IoT Systems',
      subtitle: 'Customized hardware intelligence for the connected world',
      desc: 'We design and develop custom embedded systems tailored precisely to your application. Whether you need a simple sensor node or a complex multi-device IoT platform, Novultex handles the full stack — from bare-metal firmware to cloud connectivity.',
      desc2: 'Our embedded expertise covers a wide range of microcontrollers and platforms including ESP32, STM32, Arduino, Raspberry Pi, and more. We implement communication protocols including MQTT, HTTP, BLE, Zigbee, LoRaWAN, and ModBus.',
      items: [
        'Microcontroller firmware development',
        'Wireless communication (WiFi, BLE, Zigbee, LoRa, GSM)',
        'Sensor integration and calibration',
        'Real-time operating systems (RTOS)',
        'OTA (Over-the-Air) update systems',
        'Cloud platform integration (AWS IoT, Firebase, custom)',
      ],
      ideal: 'Product companies, startups, and innovators who need custom connected hardware built right.',
      deliverable: 'Firmware source, documentation, deployment support, and optional post-launch maintenance.',
    },
    {
      id: 'pcb',
      num: '02',
      title: 'PCB Design & Prototyping',
      subtitle: 'From schematic to a board you can hold in your hand',
      desc: 'Our PCB design service covers everything from initial schematic capture through multi-layer layout, DRC verification, and manufacturing file generation. We follow industry best practices for signal integrity, power management, and thermal performance.',
      desc2: 'Whether you need a simple 2-layer board or a complex high-speed multi-layer design, we work with you to ensure the board is manufacturable, testable, and performs to spec.',
      items: [
        'Schematic design and review',
        '2-layer to multi-layer PCB layout',
        'High-speed and RF design considerations',
        'BOM (Bill of Materials) generation',
        'Gerber and manufacturing file delivery',
        'Design for Manufacture (DFM) review',
      ],
      ideal: 'Hardware startups, prototype developers, and companies moving from breadboard to production.',
      deliverable: 'Schematic files, PCB layout, Gerber files, BOM, and assembly notes.',
    },
    {
      id: 'software',
      num: '03',
      title: 'Software Development',
      subtitle: 'Clean, functional, scalable software for your product or business',
      desc: 'Beyond hardware, Novultex builds the software layer that makes everything visible and controllable. We develop web applications, dashboards, mobile apps, REST APIs, and backend systems — using modern frameworks and clean architecture.',
      desc2: 'Our software work often connects directly to embedded hardware — real-time data visualization, device control interfaces, and cloud data pipelines are common deliverables.',
      items: [
        'Web application frontend (React, Vue, Vanilla JS)',
        'Backend APIs (Node.js, Python/FastAPI, Express)',
        'IoT dashboards and device management portals',
        'Mobile applications (React Native)',
        'Database design and integration',
        'Cloud deployment and DevOps',
      ],
      ideal: 'Companies needing a software layer for their hardware product, or businesses needing custom web tools.',
      deliverable: 'Source code, deployed application, documentation, and support plan.',
    },
    {
      id: 'complete-iot',
      num: '04',
      title: 'Complete IoT Projects',
      subtitle: 'Full-stack IoT delivery — hardware to cloud to dashboard',
      desc: 'This is our flagship offering. We take your IoT concept and deliver a complete, working system: PCB design, firmware, gateway logic, cloud backend, and a polished user-facing application — all from one team, all integrated, all tested together.',
      desc2: 'Working with a single vendor for the full stack eliminates integration risk and shortens the path from idea to working prototype dramatically.',
      items: [
        'End-to-end system architecture',
        'Hardware design + firmware development',
        'Gateway and edge computing integration',
        'Cloud backend and data storage',
        'User dashboard and mobile app',
        'System testing, validation, and handover',
      ],
      ideal: 'Startups and product companies launching a connected hardware product from scratch.',
      deliverable: 'Fully working system: hardware files, firmware, backend, dashboard, and full documentation.',
    },
    {
      id: 'customization',
      num: '05',
      title: 'System Customization',
      subtitle: 'Adapting and extending what already exists',
      desc: 'Not every project starts from zero. Novultex specializes in taking existing embedded or software systems and extending, upgrading, or integrating them into new environments. We reverse-engineer, document, refactor, and enhance systems that need to evolve.',
      items: [
        'Firmware upgrades and feature additions',
        'Legacy system integration',
        'Protocol migration and bridging',
        'Hardware redesign and cost optimization',
        'Software refactoring and modernization',
        'Performance tuning and optimization',
      ],
      ideal: 'Companies with existing products that need upgrades, fixes, or new functionality added.',
      deliverable: 'Updated system with documentation of all changes and a handover session.',
    },
    {
      id: 'consultation',
      num: '06',
      title: 'Technical Consultation',
      subtitle: 'Expert guidance so you build the right thing, the right way',
      desc: 'Sometimes you just need an expert to look at what you\'re doing and tell you honestly whether it will work. Novultex provides technical consultation sessions for teams who need architecture reviews, component selection guidance, or a second opinion before committing to a design.',
      items: [
        'System architecture review',
        'Component and platform selection',
        'Feasibility analysis',
        'Toolchain and workflow recommendations',
        'Risk identification and mitigation',
        'Scalability planning',
      ],
      ideal: 'Technical teams making critical architecture decisions or product managers evaluating feasibility.',
      deliverable: 'Video call, written report, or both — scoped to your needs.',
    },
  ]

  return (
    <main className="site-shell">
      <Navigation />

      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="container text-center">
          <span className="section__tag">Services</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            What Novultex<br /><em className="text-accent">Builds For You</em>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From a single embedded component to a complete IoT ecosystem — we deliver engineering with depth, precision, and professionalism.
          </p>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          {services.map((service, idx) => (
            <div key={service.id} id={service.id}>
              <div className="mb-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-5xl font-bold text-accent">{service.num}</div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
                    <p className="text-lg text-slate-600">{service.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-slate-600 mb-4 text-lg">{service.desc}</p>
                    {service.desc2 && <p className="text-slate-600 mb-6 text-lg">{service.desc2}</p>}
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-600">
                          <span className="text-accent mt-1 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="card-surface p-6">
                      <h4 className="font-bold mb-3 text-accent">Ideal For</h4>
                      <p className="text-sm text-slate-600">{service.ideal}</p>
                    </div>
                    <div className="card-surface p-6">
                      <h4 className="font-bold mb-3 text-accent">Deliverables</h4>
                      <p className="text-sm text-slate-600">{service.deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>

              {idx < services.length - 1 && <div className="border-t border-sky-100 my-12"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Not Sure Which Service You Need?</h2>
              <p className="text-lg text-white/90">Tell us about your project and we&apos;ll recommend the right approach - honestly and without pressure.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact#quote" className="btn btn--white text-lg">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
