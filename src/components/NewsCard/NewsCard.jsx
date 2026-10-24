import React from 'react'
import { img } from '@/lib/img'

const NewsCard = ({ Image, Title, Desc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="card group flex flex-col overflow-hidden transition-colors hover:border-accent"
    >
      <div className="h-44 overflow-hidden bg-accent-soft">
        <img src={img(Image)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-extrabold leading-snug tracking-tight">{Title}</h3>
        <p className="mb-5 line-clamp-4 text-[15px] text-muted">{Desc}</p>
        <span className="mt-auto font-mono text-sm font-medium text-accent">Read article <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  )
}

export default NewsCard
