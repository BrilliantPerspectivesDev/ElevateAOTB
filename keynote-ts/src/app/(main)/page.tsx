import { Hero } from '@/components/Hero'
import { SalesLetter } from '@/components/SalesLetter'
import { SeriesOverview } from '@/components/SeriesOverview'
import { ProductFeatures } from '@/components/ProductFeatures'
import { Instructor } from '@/components/Instructor'
import { ValueProposition } from '@/components/ValueProposition'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <SalesLetter />
      <SeriesOverview />
      <ProductFeatures />
      <Instructor />
      <ValueProposition />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  )
}
