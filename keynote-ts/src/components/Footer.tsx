import { Container } from '@/components/Container'
import Image from 'next/image'
import eventContent from '@/content/eventContent.json'

export function Footer() {
  const footer = eventContent.footer;
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image 
          src="/Brilliant_Full-Color_Dark.png" 
          alt="Brilliant Perspectives" 
          width={200} 
          height={48} 
          className="h-12 w-auto" 
        />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          {footer.text}
        </p>
      </Container>
    </footer>
  )
}
