'use client'

import React, { useEffect, useState } from 'react'
import karanPortrait from '@/assets/images/karan.jpeg'
import RainSound from '../RainSound'

const links = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About Me', icon: '◎' },
  { id: 'portfolio', label: 'Portfolio', icon: '▣' },
  { id: 'resume', label: 'Resume', icon: '▤' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setDarkMode(useDark)
    document.documentElement.dataset.theme = useDark ? 'dark' : 'light'
  }, [])

  const toggleTheme = () => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
    document.documentElement.dataset.theme = nextDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light')
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id))
    }, { rootMargin: '-35% 0px -55% 0px' })
    links.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return <>
    <RainSound />
    <aside className="side-rail">
      <a className="brand-lockup" href="#home"><span className="brand-mark"><img src={karanPortrait.src} alt="" /></span><span><strong>Karan Sharma</strong><small>WEB DEV &amp; REACT SPECIALIST</small></span></a>
      <span className="availability"><i /> Available for opportunities</span>
      <nav className="side-nav" aria-label="Main navigation">
        {links.map(({ id, label, icon }) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}><span aria-hidden="true">{icon}</span>{label}</a>)}
      </nav>
      <div className="side-connect"><span className="eyebrow">Connect</span><div className="social-row">
        <a href="https://github.com/karan1304" aria-label="GitHub" target="_blank" rel="noreferrer">GH</a>
        <a href="https://www.linkedin.com/in/karan-sharma-524768238/" aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
        <a href="mailto:ksharma1342000@gmail.com" aria-label="Email">@</a>
      </div><small>© 2026 Karan Sharma</small></div>
    </aside>
    <header className="topbar"><button className="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰ <span>Karan Sharma</span></button><span className="file-label"><span aria-hidden="true">▣</span> developer_portfolio.tsx</span><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} aria-pressed={darkMode}><span aria-hidden="true">{darkMode ? '☀' : '☾'}</span><span className="theme-toggle-label">{darkMode ? 'Light mode' : 'Dark mode'}</span></button><a className="topbar-cta" href="#contact">↗ <span>Get in touch</span></a><span className="top-avatar"><img src={karanPortrait.src} alt="" /></span>
      {menuOpen && <nav className="mobile-nav">{links.map(({ id, label }) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`}>{label}</a>)}</nav>}
    </header>
  </>
}
