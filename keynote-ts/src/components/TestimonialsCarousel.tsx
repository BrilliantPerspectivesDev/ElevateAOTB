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
    <div className="relative w-full max-w-xl mx-auto">
      {/* Arrows - absolutely positioned, vertically centered */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bone text-charcoal hover:bg-ochre focus:outline-none z-10"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bone text-charcoal hover:bg-ochre focus:outline-none z-10"
      >
        &#8594;
      </button>
      <div className="flex flex-col items-center">
        <figure className="rounded-2xl bg-sand p-8 text-base/6 flex flex-col items-center text-center w-full h-full">
          <blockquote className="text-charcoal">
            <p className="text-center">{testimonials[current].quote}</p>
          </blockquote>
          <figcaption className="mt-6 flex flex-col items-center gap-y-2">
            <img
              className="size-10 rounded-full bg-bone mx-auto"
              src={testimonials[current].image}
              alt={testimonials[current].name}
            />
            <div className="font-semibold text-charcoal">{testimonials[current].name}</div>
            <div className="text-celadon">{testimonials[current].handle}</div>
          </figcaption>
        </figure>
        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2 h-2 rounded-full ${idx === current ? 'bg-charcoal' : 'bg-celadon'} transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 