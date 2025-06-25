'use client'

import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'
import Image from 'next/image'

export function Hero() {
  const hero = eventContent.hero;
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Bold geometric accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>

      <div className="relative z-10 pt-24 pb-32 min-h-[90vh] flex items-center">
        <Container className="relative h-full flex flex-col justify-center">
          <div className="mx-auto max-w-5xl px-6 text-center">
            {hero.preHeadline && (
              <div className="mb-12 text-xl font-light text-gray-600">{hero.preHeadline}</div>
            )}
                         <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 leading-tight mb-12">
               Discover The Art of <span className="font-bold">Thinking Brilliantly</span>
             </h1>
            {hero.subtitle && (
              <p className="text-2xl sm:text-3xl text-gray-600 font-light mb-12 leading-relaxed max-w-4xl mx-auto">{hero.subtitle}</p>
            )}
            <div className="text-xl sm:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-16">
              <p className="leading-relaxed">{hero.intro}</p>
            </div>
            <div>
              <GradientCTAButton href="https://deals.brilliantperspectives.com/brilliantlythinking" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
