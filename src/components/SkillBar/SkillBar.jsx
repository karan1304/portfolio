'use client'

import React from 'react'
import { motion } from 'motion/react'

const SkillBar = ({ skill, value }) => {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between text-[15px] font-bold">
        <span>{skill}</span>
        <span className="font-mono text-sm text-muted">{value}%</span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-label={skill}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default SkillBar
