'use client'

import { useState } from 'react'
import eventContent from '@/content/eventContent.json'

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)
  const banner = eventContent.announcementBanner;
  if (!visible) return null
  return (
    <div className="sticky top-0 z-50 w-full bg-black text-white text-center py-3 px-4 flex items-center justify-center gap-4">
      <span className="font-semibold">{banner.message}</span>
              <a href="https://brilliantperspectives.clickfunnels.com/optind6zcv83l" className="ml-4 underline font-bold hover:text-moss">{banner.cta}</a>
      <button onClick={() => setVisible(false)} aria-label="Dismiss" className="ml-4 text-xl font-bold">×</button>
    </div>
  )
} 