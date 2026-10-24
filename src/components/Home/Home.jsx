'use client'

import React from 'react'
import { motion } from 'motion/react'
import OrbitalLottie from '../OrbitalLottie'

const stats = [ ['2+', 'Years building for the web'], ['9+', 'Web apps & projects'], ['2024', 'Frontend experience'], ['100%', 'Focus on quality'] ]
const skills = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git & GitHub']
const titleWords = ['Frontend', 'developer', 'crafting', 'thoughtful', 'web', 'experiences.']
const titleReveal = { hidden: {}, visible: { transition: { delayChildren: 0.25, staggerChildren: 0.09 } } }
const wordReveal = { hidden: { opacity: 0, y: 24, filter: 'blur(5px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }

export default function Home() {
  return <section id="home" className="home-section">
    <div className="hero-panel">
      <span className="status-pill"><i /> DELHI, INDIA · OPEN TO OPPORTUNITIES</span>
      <p className="eyebrow">Welcome to my digital workspace</p>
      <motion.h1 aria-label="Frontend developer crafting thoughtful web experiences." variants={titleReveal} initial="hidden" animate="visible">{titleWords.map((word) => <motion.span key={word} variants={wordReveal} className={word === 'thoughtful' ? 'title-word title-word-accent' : 'title-word'} aria-hidden="true">{word}</motion.span>)}</motion.h1>
      <motion.p className="hero-copy" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.55, ease: 'easeOut' }}>I’m Karan Sharma, a Junior Frontend Developer building responsive, accessible web applications with React, Next.js, and TypeScript.</motion.p>
      <div className="hero-actions"><a className="button button-primary" href="#contact">Let’s work together <span>→</span></a><a className="button" href="#portfolio">Explore my work</a><a className="button" href="/Resume.pdf" download>↓ Download resume</a></div>
      <div className="stat-grid">{stats.map(([value, label]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
    </div>
    <div className="intro-grid">
      <article className="code-card"><div className="window-bar"><span /><span /><span /><b>karan-sharma.config.ts</b><small>React · TypeScript · Delhi, IN</small></div><pre><span className="code-comment">// Building useful things for the web</span>{'\n'}<span className="code-key">const</span> karan = {'{'}{'\n'}  role: <span className="code-string">'Junior Frontend Developer'</span>,{'\n'}  company: <span className="code-string">'Shubpy Pvt. Ltd.'</span>,{'\n'}  location: <span className="code-string">'Delhi, India'</span>,{'\n'}  stack: [<span className="code-string">'React'</span>, <span className="code-string">'Next.js'</span>, <span className="code-string">'TypeScript'</span>],{'\n'}  currently: <span className="code-string">'Building responsive web experiences'</span>,{'\n'}{'}'}{'\n'}<span className="code-key">export default</span> karan;</pre><div className="code-status">● Available for frontend, backend & full stack roles <span>main · ready to build</span></div></article>
      <article className="focus-card"><div className="focus-illustration"><span>✳</span><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><OrbitalLottie/><b>UI<br/>×<br/>CODE</b></div><div><span className="eyebrow">Frontend focused · Full stack curious</span><h2>Design aware. Detail driven.</h2><p>Turning ideas and interface designs into clean, responsive experiences. Growing every day across the modern JavaScript ecosystem.</p></div></article>
    </div>
    <section className="toolkit"><div className="section-heading"><div><span className="eyebrow">Toolkit &amp; expertise</span><h2>Technologies I build with</h2></div><span className="heading-note">Modern · Responsive · Thoughtful</span></div><div className="skill-chips">{skills.map((skill, index) => <span key={skill}><b>{['⚛','◇','TS','JS','CSS','⬡','◉','⌘'][index]}</b>{skill}</span>)}</div></section>
  </section>
}
