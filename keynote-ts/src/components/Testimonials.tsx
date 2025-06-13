'use client'

import { Container } from '@/components/Container'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import eventContent from '@/content/eventContent.json'

export function Testimonials() {
  const testimonials = eventContent.testimonials;
  
  return (
    <section className="bg-celadon py-24 sm:py-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base/7 font-semibold text-moss uppercase tracking-widest">
            {testimonials.smallHeading}
          </h2>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {testimonials.mainHeading}
          </p>
        </div>
        <TestimonialsCarousel testimonials={testimonials.items} />
      </Container>
    </section>
  )
} 