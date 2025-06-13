import { Hero } from '@/components/Hero'
import { Speakers } from '@/components/Speakers'
import { CTA } from '@/components/CTA'
import { SalesLetter } from '@/components/SalesLetter'
import { EventDays } from '@/components/EventDays'
import { FAQ } from '@/components/FAQ'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <SalesLetter />
      <Speakers />
      <EventDays />
      <CTA />
      <TestimonialsCarousel testimonials={[
        {
          quote: "First time I felt permission to BE who God says I am instead of trying to become worthy. The relief was immediate, transformation ongoing.",
          name: "Sarah M.",
          handle: "BSOL Graduate",
          image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
          quote: "Graham and Dionne gave me a new way to live. The permission framework revolutionized my daily walk with God.",
          name: "Michael T.",
          handle: "Movement Member",
          image: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
          quote: "Came exhausted from performance Christianity, left with permission to live from rest. This weekend literally changed my life.",
          name: "Jennifer L.",
          handle: "Small Group Leader",
          image: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
          quote: "After 20 years trying to be better, I learned to BE the Christian God made me. This is the breakthrough I'd been searching for.",
          name: "David R.",
          handle: "Ministry Leader",
          image: "https://randomuser.me/api/portraits/men/4.jpg"
        }
      ]} />
      <FAQ />
    </>
  )
}
