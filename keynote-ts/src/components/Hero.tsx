'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CountdownTimer } from '@/components/CountdownTimer'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'
import Image from 'next/image'
import backgroundImage from '@/images/background-newsletter.png'

export function Hero() {
  const hero = eventContent.hero;
  return (
    <div className="relative w-full overflow-hidden">
      {/* Abstract Blurred SVG Background */}
      <svg
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-40%] top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{ filter: 'blur(60px)', opacity: 0.7 }}
        aria-hidden="true"
      >
        <ellipse cx="400" cy="360" rx="360" ry="240" fill="#A3D9C9" />
        <ellipse cx="900" cy="500" rx="320" ry="200" fill="#E9C46A" />
        <ellipse cx="700" cy="220" rx="200" ry="120" fill="#7CA982" />
      </svg>
      <div className="relative z-10 pt-24 pb-16">
        <Container className="relative h-full flex flex-col justify-center">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 text-center">
            {hero.preHeadline && (
              <div className="mb-4 text-lg font-semibold text-moss uppercase tracking-widest">{hero.preHeadline}</div>
            )}
            <h1 className="font-display text-5xl font-bold tracking-tighter text-bone sm:text-7xl">
              <span className="sr-only">The 3 Permissions Event - </span>{hero.headline}
            </h1>
            <p className="mt-6 text-xl font-semibold text-ochre sm:text-2xl">{hero.dateLocation}</p>
            <div className="mt-8 space-y-6 font-display text-2xl tracking-tight text-sand">
              <p>{hero.intro}</p>
            </div>
            <div className="mt-6">
              <GradientCTAButton href="https://brilliantperspectives.clickfunnels.com/optind6zcv83l" />
            </div>
            <CountdownTimer targetDate={hero.countdownDate} />
          </div>
        </Container>
      </div>
    </div>
  )
}
