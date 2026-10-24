'use client'

import { motion } from 'motion/react'

// Fades and lifts its children in once, when they scroll into view.
const Reveal = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default Reveal
