import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'

export function SeriesOverview() {
  const seriesOverview = eventContent.seriesOverview;
  
  return (
        <section id="series-overview" aria-label="Series Overview" className="py-32 sm:py-40 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-8">
              {seriesOverview.headline}
            </h2>
            <p className="text-2xl text-gray-600 font-light mb-8">
              {seriesOverview.subheading}
            </p>
            {/* Modern duration badge */}
            <div className="inline-flex items-center px-8 py-4 bg-black text-white text-lg font-medium rounded-full">
              {seriesOverview.totalDuration}
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-3xl font-light text-gray-900 text-center mb-16">
              {seriesOverview.subheading2}
            </h3>
            
            {/* Clean benefits list */}
            <div className="grid gap-8 max-w-4xl mx-auto">
              {seriesOverview.benefits.map((benefit, index) => (
                <div key={index} className="group flex items-start gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Clean CTA */}
            <div className="mt-20 text-center">
              <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 