'use client'

import { useEffect, useState } from 'react'

export function CountdownTimer({ targetDate = '2024-10-10T09:00:00' }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function updateCountdown() {
      const now = new Date()
      const target = new Date(targetDate)
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setTimeLeft({ days, hours, minutes, seconds })
    }
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="flex gap-3 text-2xl font-bold text-ochre">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm font-medium text-celadon">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm font-medium text-celadon">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm font-medium text-celadon">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm font-medium text-celadon">Seconds</span>
        </div>
      </div>
      <p className="mt-2 text-base font-semibold text-moss">Tickets close soon!</p>
    </div>
  )
} 