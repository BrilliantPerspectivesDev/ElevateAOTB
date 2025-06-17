'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GradientCTAButton } from './GradientCTAButton'
import eventContent from '@/content/eventContent.json'

export function SalesLetter() {
  const sales = eventContent.salesLetter;
  return (
    <section className="bg-sand py-24 sm:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-charcoal sm:text-5xl mb-8">
          {sales.headline}
        </h2>
        {sales.paragraphs.map((p, i) => (
          <p key={i} className="mb-6 text-lg text-charcoal">{p}</p>
        ))}
        <GradientCTAButton href="https://brilliantperspectives.clickfunnels.com/optind6zcv83l" />
      </div>
    </section>
  )
} 