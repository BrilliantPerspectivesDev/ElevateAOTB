import { Container } from '@/components/Container'
import { GradientCTAButton } from '@/components/GradientCTAButton'
import eventContent from '@/content/eventContent.json'
import Image from 'next/image'

export function Instructor() {
  const instructor = eventContent.instructor;
  
  return (
    <section id="instructor" aria-label="Instructor" className="py-32 sm:py-40 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-8">
              {instructor.headline}
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              {instructor.subheading}
            </p>
          </div>
          
          <div className="lg:flex lg:items-center lg:gap-20">
            <div className="lg:w-1/3">
              <div className="mx-auto w-80 h-80 lg:w-full lg:h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/speakers/${instructor.bio.image}`}
                  alt={instructor.bio.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 lg:w-2/3">
              <h3 className="text-4xl font-light text-gray-900 mb-4">
                {instructor.bio.name}
              </h3>
              <p className="text-xl text-gray-600 font-light mb-8">
                {instructor.bio.role}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                {instructor.bio.description}
              </p>
              
              <div className="mt-12">
                <GradientCTAButton href="https://deals.brilliantperspectives.com/optin1750344852174" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 