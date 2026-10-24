'use client'

import { useEffect, useRef } from 'react'

export default function RainSound() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let disposed = false
    const events = ['pointerdown', 'keydown', 'touchstart']
    const removeUnlockListeners = () => {
      events.forEach((eventName) => window.removeEventListener(eventName, startRain))
    }
    const startRain = () => {
      if (disposed) return
      audio.play().then(removeUnlockListeners).catch(() => {
        // Wait for a user gesture if the browser blocks autoplay.
      })
    }

    audio.volume = 0.2
    events.forEach((eventName) => window.addEventListener(eventName, startRain))
    startRain()

    return () => {
      disposed = true
      removeUnlockListeners()
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
    }
  }, [])

  return <audio ref={audioRef} src="/audio/rain.mp3" preload="none" loop aria-hidden="true" />
}
