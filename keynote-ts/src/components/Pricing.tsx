import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export function Pricing() {
  const pricing = eventContent.pricing;
  
  return (
    <section id="pricing" aria-label="Pricing" className="py-32 sm:py-40 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl px-6">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-8">
              {pricing.headline}
            </h2>
          </div>
          
          {/* Pricing card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black text-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-center">
                <p className="text-white font-medium text-lg">
                  Limited Time Offer
                </p>
              </div>
              
              <div className="p-12">
                {/* Price display */}
                <div className="text-center mb-12">
                  {pricing.originalPrice && (
                    <div className="mb-2">
                      <span className="text-2xl text-gray-400 line-through font-light">
                        {pricing.originalPrice}
                      </span>
                      {pricing.discount && (
                        <span className="ml-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {pricing.discount}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="text-7xl font-light text-white mb-4">
                    {pricing.price}
                  </div>
                  <p className="text-xl text-gray-300 font-light">
                    {pricing.priceNote}
                  </p>
                </div>
                
                {/* Value comparison */}
                <div className="space-y-6 mb-12">
                  {pricing.comparisonItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-lg text-gray-200 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center mb-12">
                  <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
                </div>
                
                {/* Guarantee section */}
                <div className="text-center p-8 bg-gray-900 rounded-2xl">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-light text-white">
                      100% Money-Back Guarantee
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {pricing.guarantee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 