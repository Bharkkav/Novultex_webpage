'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

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

    window.location.href = `mailto:hello@Novultex.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="bg-dark text-white">
      <Navigation />

      {/* PAGE HERO */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="container text-center">
          <span className="section__tag">Contact</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Let's Build Something<br /><em className="text-accent">Together</em>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
              <p className="text-gray-300 mb-8">
                Fill in the details below and we'll get back to you with a thoughtful response.
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service You're Interested In <span className="text-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700 text-white placeholder-gray-500 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--primary btn--lg w-full"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="text-sm text-gray-400">
                  We'll respond within 24 hours. Your information is never shared.
                </p>

                {submitted && (
                  <div className="bg-green-500 bg-opacity-10 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                    <span>✓</span> Thank you! Your message has been sent. We'll be in touch shortly.
                  </div>
                )}
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* BOOK A CALL */}
              <div id="call" className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                <p className="text-gray-300 mb-4">
                  Prefer to talk? We offer free 30-minute discovery calls to understand your project and see if we're the right fit.
                </p>
                <Link
                  href="mailto:hello@Novultex.com?subject=Book a Call with Novultex"
                  className="btn btn--primary text-sm w-full text-center"
                >
                  Schedule a Call →
                </Link>
              </div>

              {/* DIRECT CONTACT */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Email</span>
                    <p>
                      <a href="mailto:hello@Novultex.com" className="text-accent hover:underline">
                        hello@Novultex.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Response Time</span>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Time Zone</span>
                    <p className="text-white">IST (Sri Lanka)</p>
                  </div>
                </div>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-gray-300">
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
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Working With Us</h3>
                <p className="text-sm text-gray-300">
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
