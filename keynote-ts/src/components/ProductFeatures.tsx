import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'
import { CheckCircleIcon, PlayCircleIcon, DevicePhoneMobileIcon, CloudIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const featureIcons = [
  CheckCircleIcon,
  PlayCircleIcon, 
  CloudIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon
];

const featureColors = [
  'from-moss to-celadon',
  'from-ochre to-sand', 
  'from-celadon to-moss',
  'from-sand to-ochre',
  'from-moss to-sand'
];

export function ProductFeatures() {
  const productFeatures = eventContent.productFeatures;
  
  return (
    <section id="product-features" aria-label="Product Features" className="py-32 sm:py-40 bg-black text-white">
      <Container>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-white mb-8">
              {productFeatures.headline}
            </h2>
          </div>
          
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {productFeatures.items.map((item, index) => {
              const IconComponent = featureIcons[index] || CheckCircleIcon;
              
              return (
                <div key={index} className="group text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-4">
                    {item.feature}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Clean CTA */}
          <div className="mt-20 text-center">
            <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
          </div>
        </div>
      </Container>
    </section>
  )
} 