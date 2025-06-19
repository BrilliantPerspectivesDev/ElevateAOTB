import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'

export function ValueProposition() {
  const valueProposition = eventContent.valueProposition;
  
  return (
    <section id="value-proposition" aria-label="Value Proposition" className="py-32 sm:py-40 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-16">
              {valueProposition.headline}
            </h2>
          </div>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            {valueProposition.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl sm:text-2xl leading-relaxed text-gray-600 font-light">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
          </div>
        </div>
      </Container>
    </section>
  )
} 