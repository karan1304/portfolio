// PLACEHOLDER IMAGES so the project runs out of the box.
// Replace this file with your own src/assets/images/index.js (and image files) —
// e.g.  import Karan from './karan.svg'  →  export const SVG = { Karan, ... }
const make = (label) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#E4EBFF"/><text x="50%" y="50%" fill="#4A5675" font-family="monospace" font-size="24" text-anchor="middle">${label}</text></svg>`
  )

const keys = [
  'Karan', 'TailorMan', 'Groco', 'TailorManFigma', 'HeyGen', 'Dashboard', 'Portfolio',
  'FitClub', 'StepLuke', 'Mausam', 'Notes', 'NewsOne', 'NewsTwo', 'NewsThree',
]

export const SVG = Object.fromEntries(keys.map((k) => [k, make(k)]))
