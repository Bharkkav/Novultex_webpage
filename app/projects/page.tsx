'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      num: 'P—01',
      title: 'Smart Environmental Monitor',
      cats: ['iot', 'embedded'],
      desc: 'A multi-sensor IoT device measuring temperature, humidity, CO₂, and air quality — transmitting data every 60 seconds to a cloud dashboard with alert thresholds and historical graphing.',
      tech: ['ESP32', 'MQTT', 'React Dashboard'],
      tags: ['IoT', 'Embedded'],
    },
    {
      id: 2,
      num: 'P—02',
      title: 'Industrial Motor Controller PCB',
      cats: ['pcb', 'embedded'],
      desc: 'Custom 4-layer PCB design for a brushless DC motor controller with CAN bus interface, overcurrent protection, and thermal shutdown — designed for a manufacturing client.',
      tech: ['STM32', 'CAN Bus', 'KiCad'],
      tags: ['PCB', 'Embedded'],
    },
    {
      id: 3,
      num: 'P—03',
      title: 'Asset Tracking Platform',
      cats: ['iot', 'software'],
      desc: 'GPS-based asset tracking system with hardware tracker nodes, a Node.js backend, real-time map dashboard, and mobile app — deployed for a logistics company managing a 200-unit fleet.',
      tech: ['GPS Module', 'Node.js', 'React Native'],
      tags: ['IoT', 'Software'],
    },
    {
      id: 4,
      num: 'P—04',
      title: 'Automated Irrigation Controller',
      cats: ['embedded'],
      desc: 'A soil-moisture-driven irrigation controller with scheduled watering, manual override, and a local LCD display — designed for a small-scale agricultural automation client.',
      tech: ['Arduino', 'Soil Sensors', 'Relay Control'],
      tags: ['Embedded'],
    },
    {
      id: 5,
      num: 'P—05',
      title: 'Device Management Portal',
      cats: ['software', 'iot'],
      desc: 'A web-based admin portal for managing fleets of IoT devices — OTA firmware updates, live status monitoring, configuration push, and historical logs with export features.',
      tech: ['React', 'FastAPI', 'PostgreSQL'],
      tags: ['Software', 'IoT'],
    },
    {
      id: 6,
      num: 'P—06',
      title: 'LoRa Gateway Shield',
      cats: ['pcb'],
      desc: 'A custom shield PCB for Raspberry Pi integrating a LoRa transceiver module, GPS, and LTE modem — enabling a complete portable IoT gateway for field deployment.',
      tech: ['LoRa SX1276', 'RPi Hat', 'Altium'],
      tags: ['PCB'],
    },
    {
      id: 7,
      num: 'P—07',
      title: 'Smart Access Control System',
      cats: ['iot', 'embedded', 'pcb'],
      desc: 'End-to-end access control solution: custom PCB with RFID and fingerprint reader, ESP32 firmware, cloud backend, and an admin portal for permission management — deployed in an office complex.',
      tech: ['ESP32', 'RFID', 'Firebase', 'React'],
      tags: ['Complete IoT'],
    },
    {
      id: 8,
      num: 'P—08',
      title: 'Inventory Management System',
      cats: ['software'],
      desc: 'A web-based inventory and component management system for electronics manufacturing — with barcode scanning support, stock alerts, and purchase order tracking.',
      tech: ['Vue.js', 'Express', 'MongoDB'],
      tags: ['Software'],
    },
  ]

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'iot', label: 'IoT' },
    { key: 'embedded', label: 'Embedded' },
    { key: 'pcb', label: 'PCB' },
    { key: 'software', label: 'Software' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.cats.includes(activeFilter))

  return (
    <main className="bg-dark text-white">
      <Navigation />

      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="container text-center">
          <span className="section__tag">Our Work</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Projects That<br /><em className="text-accent">Speak for Themselves</em>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of systems we&apos;ve built - embedded hardware, IoT platforms, PCB designs, and software solutions delivered to clients across the globe.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="section py-8">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-accent text-black'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge mr-2">{tag}</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-500">{project.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">{t}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* PROJECT MODAL */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-white"
                >
                  ×
                </button>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag: string) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{selectedProject.desc}</p>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-accent">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">{t}</span>
                    ))}
                  </div>
                </div>

                <Link href="/contact#quote" className="btn btn--primary">
                  Discuss This Project
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BUILD WITH US */}
      <section className="section bg-black bg-opacity-30">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            These are just examples. Novultex has worked across automotive, agriculture, healthcare, logistics, home automation, industrial, and more. If your project involves embedded systems, IoT, PCB, or software - we&apos;re the right team.
          </p>
          <Link href="/contact" className="btn btn--primary btn--lg">
            Tell Us About Your Project
          </Link>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-black py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Build Your Project?</h2>
              <p className="text-lg opacity-90">Start with a conversation. We&apos;ll assess your needs and propose the right approach.</p>
            </div>
            <Link href="/contact#quote" className="btn bg-black text-white hover:bg-opacity-90 text-lg flex-shrink-0">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
