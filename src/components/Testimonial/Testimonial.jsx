import React from 'react'
import Reveal from '../Reveal/Reveal'

// Replace with a real client quote.
const testimonial = {
  quote: 'A short client quote about how you worked together and what changed for their business.',
  name: '[Client name]',
  role: '[Role], [Company]',
}

const Testimonial = () => (
  <section className="wrap pb-24">
    <Reveal>
      <figure className="card flex flex-wrap items-center gap-8 p-8 sm:p-12">
        <span aria-hidden="true" className="h-10 text-7xl font-extrabold leading-[0.6] text-accent">“</span>
        <div className="min-w-0 flex-1 basis-[360px]">
          <blockquote className="mb-5 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold leading-snug tracking-tight">
            {testimonial.quote}
          </blockquote>
          <figcaption className="flex items-center gap-3.5">
            <span className="h-11 w-11 rounded-full bg-accent-soft" />
            <span>
              <span className="block font-bold">{testimonial.name}</span>
              <span className="text-[15px] text-muted">{testimonial.role}</span>
            </span>
          </figcaption>
        </div>
      </figure>
    </Reveal>
  </section>
)

export default Testimonial
