import React from 'react'
import Reveal from '../Reveal/Reveal'

const services = [
  { icon: '</>', tone: 'bg-accent-soft text-accent', title: 'Front-end development', desc: 'Responsive, accessible interfaces built with React and Next.js.' },
  { icon: '{ }', tone: 'bg-coral-soft text-coral', title: 'Full-stack apps', desc: 'Node and Express back ends connected to the interfaces I build.' },
  { icon: 'Aa', tone: 'bg-mint-soft text-mint', title: 'Figma to code', desc: 'Designs turned into clean, pixel-accurate pages, with AI tools speeding up the routine work.' },
]

const Services = () => (
  <section id="services" className="wrap scroll-mt-20 pb-24">
    <Reveal>
      <p className="eyebrow">What I do</p>
      <h2 className="section-title">Services</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
        {services.map((s) => (
          <div key={s.title} className="card p-8">
            <div className={`mb-5 grid h-12 w-12 place-items-center rounded-[14px] text-xl font-extrabold ${s.tone}`}>{s.icon}</div>
            <h3 className="mb-2 text-[22px] font-extrabold">{s.title}</h3>
            <p className="text-[15px] text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
)

export default Services
