'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from '../Reveal/Reveal'

const socials = [
  { label: 'GitHub', href: 'https://github.com/karan1304' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/karan13sharma/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karan-sharma-524768238/' },
  { label: 'X', href: 'https://x.com/KaranSh06487718?t=MED3jTlcZB_PfeQPyW0jPg&s=08' },
]

const inputClass =
  'w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/60 focus:border-accent focus:ring-2 focus:ring-accent/30'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus('sent')
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error(error?.text ?? error)
          setStatus('error')
        }
      )
  }

  return (
    <section id="contact" className="home-section scroll-mt-20">
      <Reveal>
        <div className="contact-panel gradient-surface relative overflow-hidden rounded-[28px] border border-[#d8e3e6] p-8 text-white shadow-card sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 font-mono text-[13px] font-medium uppercase tracking-wider text-accent">Contact</p>
              <h2 className="mb-8 max-w-[560px] text-[clamp(2.125rem,5.5vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
                Have a project in mind? Let’s talk.
              </h2>

              <dl className="mb-8 space-y-5">
                <div>
                  <dt className="mb-1 font-mono text-sm font-medium">Based in</dt>
                  <dd className="max-w-[420px]">North West Delhi, India · Available for remote work</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-sm font-medium">Phone</dt>
                  <dd><a href="tel:+918799719698" className="font-bold underline-offset-4 hover:underline">(+91) 8799719698</a></dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-sm font-medium">Email</dt>
                  <dd><a href="mailto:ksharma1342000@gmail.com" className="break-all font-bold underline-offset-4 hover:underline">ksharma1342000@gmail.com</a></dd>
                </div>
              </dl>

              <p className="mb-3 font-mono text-sm font-medium">Follow me</p>
              <ul className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-line px-5 font-bold transition-colors hover:bg-accent hover:text-[#002e5d]"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="gradient-surface rounded-3xl border border-white/20 p-6 text-white shadow-card sm:p-8">
              <h3 className="mb-6 text-2xl font-extrabold tracking-tight">Send me a message</h3>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold">Name</label>
                  <input id="name" type="text" name="name" placeholder="Your name" className={inputClass} value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold">Email</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" className={inputClass} value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell me about your project" className={`${inputClass} resize-y`} value={formData.message} onChange={handleChange} required />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <p role="status" className={`text-sm font-bold ${status === 'error' ? 'text-coral' : 'text-mint'}`}>
                  {status === 'sent' && 'Message sent. I’ll reply as soon as I can.'}
                  {status === 'error' && 'Message not sent. Check your connection and try again.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
