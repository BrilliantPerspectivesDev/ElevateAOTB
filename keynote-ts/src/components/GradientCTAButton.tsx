'use client'

import Link from 'next/link'
import { clsx } from 'clsx'

interface GradientCTAButtonProps {
  href: string
  className?: string
}

export function GradientCTAButton({ href, className }: GradientCTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 px-12 py-6 text-xl font-medium text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        className
      )}
    >
      <span>Get Instant Access for $97</span>
      <span className="block text-sm font-light mt-1 text-white/90">Lifetime streaming access</span>
    </Link>
  )
} 