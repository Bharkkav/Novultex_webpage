'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.83c0 1.74.45 3.44 1.31 4.94L2 22l5.38-1.41a9.9 9.9 0 0 0 4.65 1.18h.01c5.41 0 9.83-4.4 9.83-9.83 0-2.63-1.02-5.1-2.82-6.99ZM12.04 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.19.84.85-3.11-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.68-8.18 8.21-8.18 2.19 0 4.24.85 5.79 2.4a8.1 8.1 0 0 1 2.39 5.79c0 4.52-3.68 8.2-8.19 8.2Zm4.49-6.12c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.28.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.85.83-.85 2.02 0 1.18.87 2.33.99 2.49.12.17 1.69 2.57 4.09 3.61.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget || 'Prefer to discuss'}\n\n` +
      `Project details:\n${formData.message}`
    )

    window.location.href = `mailto:info@Novultex.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="site-shell">
      <Navigation />

      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="container text-center">
          <span className="section__tag">Contact</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Let&apos;s Build Something<br /><em className="text-accent">Together</em>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Share your project idea, ask a technical question, or request a quote. We respond to every message personally — usually within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section" id="quote">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill in the details below and we&apos;ll get back to you with a thoughtful response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service You&apos;re Interested In <span className="text-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Embedded & IoT Systems</option>
                    <option>PCB Design & Prototyping</option>
                    <option>Software Development</option>
                    <option>Complete IoT Project</option>
                    <option>System Customization</option>
                    <option>Technical Consultation</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Approximate Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all"
                  >
                    <option value="">Select a range</option>
                    <option>Under $500</option>
                    <option>$500 – $2,000</option>
                    <option>$2,000 – $10,000</option>
                    <option>$10,000 – $50,000</option>
                    <option>$50,000+</option>
                    <option>Prefer to discuss</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Description <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project — what you're building, what problem you're solving, and any technical details you already know."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sky-100 text-slate-900 placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-sky-200 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--primary btn--lg w-full"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="text-sm text-slate-500">
                  We&apos;ll respond within 24 hours. Your information is never shared.
                </p>

                {submitted && (
                  <div className="bg-green-500 bg-opacity-10 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                    <span>✓</span> Thank you! Your message has been sent. We&apos;ll be in touch shortly.
                  </div>
                )}
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* BOOK A CALL */}
              <div id="call" className="card-surface p-6">
                <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                <p className="text-slate-600 mb-4">
                  Prefer to talk? We offer free 30-minute discovery calls to understand your project and see if we&apos;re the right fit.
                </p>
                <Link
                  href="mailto:info@Novultex.com?subject=Book a Call with Novultex"
                  className="btn btn--primary text-sm w-full text-center"
                >
                  Schedule a Call →
                </Link>
              </div>

              {/* DIRECT CONTACT */}
              <div className="card-surface p-6">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-500">Email</span>
                    <p>
                      <a href="mailto:info@Novultex.com" className="text-accent hover:underline inline-flex items-center gap-2">
                        <span aria-hidden="true">✉</span>
                        <span>info@Novultex.com</span>
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500">WhatsApp</span>
                    <p>
                      <a href="https://wa.me/94707099955" className="text-accent hover:underline inline-flex items-center gap-2">
                        <span aria-hidden="true">
                          <WhatsAppIcon />
                        </span>
                        <span>+94 70 709 9955</span>
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-500">Response Time</span>
                    <p className="text-slate-900">Within 24 hours</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Time Zone</span>
                    <p className="text-slate-900">IST (Sri Lanka)</p>
                  </div>
                </div>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="card-surface p-6">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">1.</span>
                    <span>You send us your project details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">2.</span>
                    <span>We review and respond within 24 hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">3.</span>
                    <span>We schedule a discovery call if needed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">4.</span>
                    <span>We propose a clear plan and timeline</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">5.</span>
                    <span>We get to work</span>
                  </li>
                </ol>
              </div>

              {/* WORKING WITH US */}
              <div className="card-surface p-6">
                <h3 className="text-xl font-bold mb-3">Working With Us</h3>
                <p className="text-sm text-slate-600">
                  Novultex works with clients globally. We communicate in English, use modern collaboration tools, and adapt to your time zone for key meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
