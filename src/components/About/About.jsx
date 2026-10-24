import React from 'react'
import Reveal from '../Reveal/Reveal'

const details = [['Current role', 'Junior Frontend Developer'], ['Company', 'Shubpy Pvt. Ltd.'], ['Email', 'ksharma1342000@gmail.com'], ['Based in', 'North West Delhi, India']]
const strengths = [['Frontend craft', 'Building reusable interfaces with React, Next.js, and TypeScript.'], ['Product thinking', 'Making responsive experiences that are clear and useful.'], ['Continuous learning', 'Expanding into backend development and full stack web applications.']]

export default function About() {
  return <section id="about" className="content-section scroll-mt-20"><Reveal>
    <div className="center-heading"><p className="eyebrow">Get to know me</p><h2 className="section-title">A little about Karan</h2><p className="section-intro">Frontend developer based in Delhi, India</p></div>
    <div className="about-grid"><article className="about-story"><span className="eyebrow">bio_overview.md</span><h3>I’m Karan Sharma, a <span>Frontend Developer</span></h3><p>I build responsive web applications with React.js, Next.js, TypeScript, and Tailwind CSS. I currently work remotely with Shubpy Pvt. Ltd., where I develop reusable interfaces, integrate REST APIs, and maintain features across devices and browsers.</p><p>Previously, I worked as a Web Developer Intern at Techlanz. Outside my day to day work, I’m developing personal web projects, while continuing to grow my skills across the JavaScript stack.</p><div className="about-highlights"><span><b>React</b><small>&amp; Next.js focus</small></span><span><b>TypeScript</b><small>Modern frontend</small></span><span><b>Web projects</b><small>Personal builds</small></span></div></article>
      <aside className="profile-card"><div className="profile-title"><h3>Personal profile</h3><span>Frontend dev</span></div><dl>{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{label === 'Email' ? <a href="mailto:ksharma1342000@gmail.com">{value}</a> : value}</dd></div>)}</dl><a href="/Resume.pdf" download className="button button-primary download-full">↓ Download resume <small>PDF</small></a><p className="profile-footnote">Open to frontend, backend &amp; full stack opportunities</p></aside>
    </div><div className="strength-grid">{strengths.map(([title, copy], index) => <article key={title}><span className="strength-icon">{['⌘', '◇', '↗'][index]}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </Reveal></section>
}
