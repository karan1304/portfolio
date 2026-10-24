import React from 'react'

const Card = ({ branch, institution, desc, duration }) => {
  return (
    <div className="card p-6">
      <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 font-mono text-[13px] font-medium text-accent-deep">
        {duration}
      </span>
      <h3 className="text-xl font-extrabold tracking-tight">{branch}</h3>
      <p className="mb-3 mt-0.5 font-bold text-accent">{institution}</p>
      <p className="text-[15px] text-muted">{desc}</p>
    </div>
  )
}

export default Card
