'use client'

import { Lottie } from 'lottie-react'
import { useReducedMotion } from 'motion/react'

const orbitAnimation = {
  v: '5.7.4', fr: 30, ip: 0, op: 60, w: 100, h: 100, nm: 'Soft orbital pulse', ddd: 0, assets: [],
  layers: [{ ddd: 0, ind: 1, ty: 4, nm: 'Orbit', sr: 1, ks: {
    o: { a: 0, k: 100 }, r: { a: 0, k: 0 }, p: { a: 0, k: [50, 50, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 0, k: [100, 100, 100] },
  }, ao: 0, shapes: [{ ty: 'gr', nm: 'Pulsing core', it: [
    { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [62, 62] }, nm: 'Core' },
    { ty: 'fl', c: { a: 0, k: [0.0, 0.56, 0.66, 1] }, o: { a: 0, k: 55 }, r: 1, nm: 'Teal fill' },
    { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 1, k: [
      { t: 0, s: [72, 72], e: [112, 112], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } },
      { t: 30, s: [112, 112], e: [72, 72], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } },
      { t: 60, s: [72, 72] },
    ] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 }, nm: 'Pulse' },
    { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 }, nm: 'Group Transform' },
  ] }], ip: 0, op: 60, st: 0, bm: 0 }], markers: [],
}

export default function OrbitalLottie() {
  const reduceMotion = useReducedMotion()
  return <Lottie src={orbitAnimation} loop={!reduceMotion} autoplay={!reduceMotion} className="focus-lottie" aria-hidden="true" />
}
