import React from 'react'
import Reveal from '../Reveal/Reveal'

const steps = [
  { title: 'Discover', desc: 'Goals, users and constraints.' },
  { title: 'Design', desc: 'Wireframes and a clickable prototype.' },
  { title: 'Build', desc: 'Weekly demos, clean tested code.' },
  { title: 'Launch', desc: 'Deploy, monitor, hand over.' },
]

const Process = () => (
  <section id="process" className="wrap scroll-mt-20 pb-24">
    <Reveal>
      <p className="eyebrow">How I work</p>
      <h2 className="section-title">From idea to launch</h2>
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t-[3px] border-accent pt-5">
            <div className="mb-2 font-mono font-medium text-accent">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="mb-1.5 text-xl font-extrabold">{s.title}</h3>
            <p className="text-[15px] text-muted">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  </section>
)

export default Process
