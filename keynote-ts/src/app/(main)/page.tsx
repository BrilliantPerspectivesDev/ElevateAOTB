import { Hero } from '@/components/Hero'
import { Speakers } from '@/components/Speakers'
import { CTA } from '@/components/CTA'
import { SalesLetter } from '@/components/SalesLetter'
import { EventDays } from '@/components/EventDays'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <EventDays />
      <SalesLetter />
      <Speakers />
      <CTA />
      <Testimonials />
      <FAQ />
    </>
  )
}
