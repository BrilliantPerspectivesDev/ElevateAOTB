'use client'

import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'

export function CTA() {
  const cta = eventContent.ctaSection;
  return (
    <div className="relative bg-ochre py-24 sm:py-36 overflow-hidden">
      {/* Abstract Blurred SVG Background for CTA */}
      <svg
        width="500"
        height="350"
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-1/2 bottom-0 translate-x-1/2 z-0 pointer-events-none"
        style={{ filter: 'blur(36px)', opacity: 0.7 }}
        aria-hidden="true"
      >
        <ellipse cx="120" cy="200" rx="140" ry="90" fill="#F4E1B6" />
        <ellipse cx="380" cy="120" rx="110" ry="70" fill="#7CA982" />
        <ellipse cx="250" cy="250" rx="80" ry="50" fill="#E9C46A" />
      </svg>
      <Container>
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-charcoal sm:text-5xl">
            {cta.headline}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg/8 text-pretty text-bone">
            {cta.description}
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <GradientCTAButton href="https://brilliantperspectives.clickfunnels.com/optind6zcv83l" />
          </div>
        </div>
      </Container>
    </div>
  )
} 