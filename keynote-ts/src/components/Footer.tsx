import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import eventContent from '@/content/eventContent.json'

export function Footer() {
  const footer = eventContent.footer;
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          {footer.text}
        </p>
      </Container>
    </footer>
  )
}
