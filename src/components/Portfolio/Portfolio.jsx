'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { SVG } from '@/assets/images'
import mentorAiHero from '@/assets/images/Mentor AI Learning Platform Hero.png'
import lexAiHero from '@/assets/images/Lex AI Legal Research Hero Banner.png'
import { img } from '@/lib/img'
import { education, experience, skills } from '@/data/resume'
import Reveal from '../Reveal/Reveal'

const allItems = [
  { id: 1, category: 'Full Stack', img: mentorAiHero, repo: 'https://github.com/', repoAvailable: true, repoPrivate: true, live: 'https://frontend-ten-eta-56.vercel.app/', label: 'Mentor AI', modalSubtitle: 'Personal Project · Under Development', description: 'An AI-driven learning platform designed to provide personalized guidance, answer user queries, and assist learners with intelligent recommendations.', stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AI API Integration'], highlights: [{ title: 'AI-Powered Learning', description: 'Personalized guidance, answers to learner questions, and intelligent recommendations.' }, { title: 'Modern User Experience', description: 'A fast, responsive, and intuitive interface built with React.js, Next.js, TypeScript, and Tailwind CSS.' }, { title: 'Scalable Architecture', description: 'Reusable components, API integration, and modular architecture support maintainability and future AI features.' }], status: 'In development', modal: true },
  { id: 2, category: 'Full Stack', img: lexAiHero, repoAvailable: false, label: 'Lex AI', modalSubtitle: 'Personal Project · Under Development', description: 'An AI-powered application focused on enhancing productivity through intelligent conversations and workflow automation.', stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AI API Integration'], highlights: [{ title: 'Intelligent AI Assistant', description: 'Intelligent conversations and workflow automation help improve productivity.' }, { title: 'Responsive Interface', description: 'A clean, responsive, and user-friendly interface built using React.js, Next.js, TypeScript, and Tailwind CSS.' }, { title: 'Performance & Scalability', description: 'Reusable components, optimized rendering, and seamless API integration support an efficient, scalable experience.' }], status: 'In development', modal: true },
  { id: 3, category: 'Frontend', img: SVG.Groco, link: 'https://66276239f876e3987419e417--scintillating-pastelito-981abe.netlify.app/', label: 'GrocGo', description: 'A friendly grocery shopping experience for browsing products and managing a shopping list.', stack: ['React', 'JavaScript', 'CSS'], status: 'Live project' },
  { id: 4, category: 'Frontend', img: SVG.TailorMan, link: 'https://tailorman-chd6.vercel.app/', label: 'Tailorman', description: 'A premium fashion storefront with responsive layouts, a custom top bar, and reusable React components.', stack: ['React', 'Figma', 'Responsive UI'], status: 'Live project' },
  { id: 5, category: 'Design', img: SVG.TailorManFigma, link: 'https://www.figma.com/design/ZAMH8RqGAJ9mrtoknxyeWn/React-project?node-id=0-1&t=y17f2e71TUin0rot-1', label: 'Tailorman UI concept', description: 'The interface design behind a polished, premium clothing brand experience.', stack: ['Figma', 'UI design'], status: 'Design file' },
  { id: 7, category: 'Development', img: SVG.FitClub, link: 'https://subtle-halva-896b47.netlify.app/', label: 'Fit Club', description: 'A responsive fitness experience with an energetic visual system.', stack: ['React', 'JavaScript'], status: 'Live project' },
  { id: 8, category: 'Development', img: SVG.StepLuke, link: 'https://66339564a526c90ef119885c--cerulean-meerkat-36f6ac.netlify.app/', label: 'StepLuke', description: 'A clean, responsive web experience built with modern frontend tools.', stack: ['React', 'CSS'], status: 'Live project' },
  { id: 9, category: 'Development', img: SVG.Mausam, link: 'https://keen-granita-2d2fa9.netlify.app/', label: 'Mausam', description: 'A lightweight weather interface focused on quick, readable information.', stack: ['JavaScript', 'API'], status: 'Live project' },
  { id: 10, category: 'Development', img: SVG.Notes, link: 'https://663c5cfea718f75abdbe01f5--fluffy-cendol-19687b.netlify.app/', label: 'Notes', description: 'A simple notes app for capturing thoughts in a clear, focused interface.', stack: ['React', 'JavaScript'], status: 'Live project' },
]

const filters = ['All', 'Frontend', 'Full Stack', 'Development', 'Design']

function ProjectCardContent({ item }) {
  return <>
    <div className="project-image"><img src={img(item.img)} alt={`${item.label} project preview`} loading="lazy" /><span>{item.status}</span></div>
    <div className="project-body"><div className="project-title-row"><h3>{item.label}</h3><span aria-hidden="true">{item.modal ? '+' : '↗'}</span></div><p className="project-description">{item.description}</p><div className="project-tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-link">{item.modal ? 'View project details' : 'Explore project'} <span aria-hidden="true">→</span></div></div>
  </>
}

export default function Portfolio() {
  const [selected, setSelected] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const dialogRef = useRef(null)
  const filtered = selected === 'All' ? allItems : allItems.filter((item) => item.category === selected || item.category.startsWith(`${selected} &`))

  useEffect(() => {
    const dialog = dialogRef.current
    if (activeProject && dialog && !dialog.open) dialog.showModal()
    if (!activeProject && dialog?.open) dialog.close()
  }, [activeProject])
  return <>
  <section id="portfolio" className="content-section scroll-mt-20"><Reveal>
    <div className="portfolio-heading"><div><p className="eyebrow">Selected projects · Personal work</p><h2 className="section-title !mb-3">Things I’m building</h2><p className="section-intro">A mix of product ideas, frontend builds, and experiments in the React ecosystem.</p></div><span className="project-count">{String(allItems.length).padStart(2, '0')} PROJECTS</span></div>
    <div className="filter-row" role="group" aria-label="Filter projects">{filters.map((filter) => <motion.button key={filter} type="button" onClick={() => setSelected(filter)} aria-pressed={selected === filter} className={selected === filter ? 'selected' : ''} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.16 }}>{filter}</motion.button>)}</div>
        <div className="project-grid">{filtered.map((item) => item.modal ? (
      <motion.article layout key={item.id} role="button" tabIndex={0} aria-haspopup="dialog" aria-label={`View details for ${item.label}`} onClick={() => setActiveProject(item)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveProject(item) } }} className="project-card group" whileHover={{ y: -5, scale: 1.012 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
        <ProjectCardContent item={item} />
      </motion.article>
    ) : (
      <motion.a layout key={item.id} href={item.link} target="_blank" rel="noreferrer" className="project-card group" whileHover={{ y: -5, scale: 1.012 }} whileTap={{ scale: 0.99 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
        <ProjectCardContent item={item} />
      </motion.a>
    ))}</div>
  </Reveal></section>
  <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" onClose={() => setActiveProject(null)} onClick={(event) => { if (event.target === event.currentTarget) setActiveProject(null) }}>
    {activeProject && <div className="project-modal-content">
      <div className="project-modal-top"><span className="project-modal-kicker">{activeProject.category} · {activeProject.modalSubtitle}</span><button type="button" className="project-modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details">×</button></div>
      <div className="project-modal-project">
        <img className="project-modal-image" src={img(activeProject.img)} alt={`${activeProject.label} preview`} />
        <div className="project-modal-intro"><h2 id="project-modal-title">{activeProject.label}</h2><p>{activeProject.description}</p><h3>Project details</h3><ul className="project-modal-highlights">{activeProject.highlights.map((highlight) => <li key={highlight.title}><strong>{highlight.title}:</strong> {highlight.description}</li>)}</ul><h3>Tech stack</h3><div className="project-modal-tags">{activeProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-modal-actions">{activeProject.repoAvailable && activeProject.repo ? <a className="button button-primary" href={activeProject.repo} target="_blank" rel="noreferrer">{activeProject.repoPrivate ? 'Private GitHub repository' : 'GitHub repository'} <span aria-hidden="true">↗</span></a> : <button className="button" type="button" disabled aria-disabled="true">GitHub repository (coming soon)</button>}{activeProject.live && <a className="button button-primary" href={activeProject.live} target="_blank" rel="noreferrer">Live preview <span aria-hidden="true">↗</span></a>}</div></div>
      </div>
      <section className="project-modal-resume" aria-labelledby="modal-resume-title">
        <div className="project-modal-resume-heading"><div><p className="eyebrow">Resume</p><h3 id="modal-resume-title">Experience, education &amp; skills</h3></div><a href="/Resume.pdf" target="_blank" rel="noreferrer" className="button">View full CV ↗</a></div>
        <div className="project-modal-metrics"><div><small>EXPERIENCE</small><b>2024 – Now</b><span>Frontend development</span></div><div><small>EDUCATION</small><b>MCA</b><span>Currently pursuing · IGNOU</span></div><div><small>CORE FOCUS</small><b>React ecosystem</b><span>Next.js · TypeScript</span></div><div><small>PROJECT WORK</small><b>Frontend builds</b><span>Personal projects in progress</span></div></div>
        <div className="project-modal-resume-columns">
          <div><h4>Work experience</h4>{experience.map((item) => <article className="project-modal-resume-item" key={item.title}><span>{item.date}</span><strong>{item.title}</strong><small>{item.company}</small><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
          <div><h4>Education</h4>{education.map((item) => <article className="project-modal-education" key={item.title}><strong>{item.title}</strong><span>{item.school}</span>{item.date && <small>{item.date}</small>}</article>)}<h4 className="project-modal-skills-heading">Technical toolkit</h4><div className="project-modal-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div><p className="project-modal-focus"><strong>Current focus:</strong> Building thoughtful frontend experiences while expanding into full stack development.</p></div>
        </div>
      </section>
    </div>}
  </dialog>
  </>
}
