'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { GradientCTAButton } from './GradientCTAButton'
import eventContent from '@/content/eventContent.json'

export function SalesLetter() {
  const sales = eventContent.salesLetter;
  return (
    <section className="bg-white py-32 sm:py-40 relative">
      {/* Bold geometric accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>
      
      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        {/* Modern minimal headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-16 leading-tight">
          {sales.headline}
        </h2>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {sales.paragraphs.map((p, i) => (
            <p key={i} className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
              {p}
            </p>
          ))}
        </div>
        
        {/* Clean CTA */}
        <div className="mt-16">
          <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
        </div>
      </div>
    </section>
  )
} 