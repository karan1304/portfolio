import React from 'react'
import Reveal from '../Reveal/Reveal'

import { education, experience, skills } from '@/data/resume'

export default function Resume() {
  return <section id="resume" className="content-section scroll-mt-20"><Reveal>
    <div className="resume-header"><div><p className="eyebrow">Curriculum vitae · Professional path</p><h2 className="section-title !mb-2">Experience &amp; education</h2><p className="section-intro">A snapshot of my work, learning, and technical toolkit.</p></div><a href="/Resume.pdf" download className="button button-primary">↓ Download CV (PDF)</a></div>
    <div className="resume-metrics"><div><small>EXPERIENCE</small><b>2024 – Now</b><span>Frontend development</span></div><div><small>EDUCATION</small><b>MCA</b><span>Currently pursuing · IGNOU</span></div><div><small>CORE FOCUS</small><b>React ecosystem</b><span>Next.js · TypeScript</span></div><div><small>PROJECT WORK</small><b>Frontend builds</b><span>Personal projects in progress</span></div></div>
    <div className="resume-columns"><div><div className="subsection-heading"><span>▱</span><div><h3>Work experience</h3><small>Professional experience &amp; delivery</small></div></div><div className="timeline">{experience.map((item) => <article key={item.title} className="timeline-card"><span className="date-pill">{item.date}</span><h4>{item.title}</h4><p className="timeline-company">{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></div>
      <div><div className="subsection-heading"><span>⌂</span><div><h3>Education</h3><small>Academic foundations</small></div></div><div className="education-list">{education.map((item) => <article key={item.title}><h4>{item.title}</h4><p>{item.school}</p>{item.date && <small>{item.date}</small>}</article>)}</div><article className="objective-card"><span className="eyebrow">Current focus</span><p>Building thoughtful frontend experiences while expanding into full stack development.</p></article></div>
    </div>
    <div className="skills-panel"><div className="skills-title"><div><p className="eyebrow">Technical toolkit</p><h3>Skills &amp; technologies</h3></div><span>Frontend · Backend · Tools</span></div><div className="resume-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
    <div className="resume-cta"><span className="strength-icon">⌘</span><div><h3>Want to see what I can build?</h3><p>Explore my recent projects or get in touch.</p></div><a href="#portfolio" className="button button-primary">Explore portfolio</a><a href="#contact" className="button">Contact Karan</a></div>
  </Reveal></section>
}
