'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GsapEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.hero-panel .status-pill', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 })
        .fromTo('.hero-panel > .eyebrow', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45 }, '-=0.22')
        .fromTo('.hero-panel .hero-actions .button', { autoAlpha: 0, y: 12, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 }, '-=0.2')
        .fromTo('.hero-panel .stat-card', { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.07 }, '-=0.15')

      gsap.to('.focus-illustration', { y: -5, duration: 2.4, ease: 'sine.inOut', repeat: -1, yoyo: true })

      gsap.utils.toArray('.project-card, .strength-grid article, .timeline-card, .education-list article, .toolkit').forEach((card, index) => {
        gsap.fromTo(card, { autoAlpha: 0, y: 22 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          delay: (index % 3) * 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 92%', once: true },
        })
      })
    })

    return () => context.revert()
  }, [])

  return null
}
