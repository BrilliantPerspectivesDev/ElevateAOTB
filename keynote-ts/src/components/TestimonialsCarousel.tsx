'use client'

import { useState } from 'react'

interface Testimonial {
  quote: string
  name: string
  handle: string
  image: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const goTo = (idx: number) => setCurrent((idx + total) % total)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Arrows - absolutely positioned, vertically centered */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-bone text-charcoal hover:bg-ochre focus:outline-none z-10 shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-bone text-charcoal hover:bg-ochre focus:outline-none z-10 shadow-lg"
      >
        &#8594;
      </button>
      <div className="flex flex-col items-center">
        <figure className="rounded-3xl bg-sand p-12 text-lg/8 flex flex-col items-center text-center w-full shadow-xl">
          <blockquote className="text-charcoal">
            <p className="text-center text-xl font-medium italic leading-relaxed">"{testimonials[current].quote}"</p>
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-y-3">
            <div className="text-xl font-bold text-charcoal">— {testimonials[current].name}</div>
            <div className="text-lg text-moss font-semibold">{testimonials[current].handle}</div>
          </figcaption>
        </figure>
        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-charcoal' : 'bg-celadon'} transition-colors hover:scale-110`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 