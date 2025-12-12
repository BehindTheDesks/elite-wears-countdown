"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface TimeUnits {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownPage() {
  const [time, setTime] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTime = () => {
      const targetDate = new Date("2025-12-13T12:59:59").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
  <main className="min-h-screen bg-[#25231d] flex flex-col items-center justify-center px-4">
      <div className="mb-12">
        <Image src="/logo.png" alt="Elite Wears" width={120} height={120} className="w-28 h-28 object-contain rounded-md" />
      </div>

      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-7xl md:text-8xl font-serif text-[#E6AF2E] tracking-tight mb-6 leading-none">
          Website Launches <span className="font-light">Soon!!!</span>
        </h1>
        <p className="text-lg md:text-xl text-[#E6AF2E] font-light tracking-wide uppercase letter-spacing">
          Coming Soon
        </p>
      </div>

      {/* Countdown Grid */}
      <div className="w-full max-w-4xl mb-20">
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-stone-900 rounded-lg flex items-center justify-center mb-4 border border-stone-800 hover:border-stone-700 transition-colors duration-300">
              <span className="text-4xl md:text-6xl font-serif text-stone-50 font-light">
                {String(time.days).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#E6AF2E] font-light">Days</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-stone-900 rounded-lg flex items-center justify-center mb-4 border border-stone-800 hover:border-stone-700 transition-colors duration-300">
              <span className="text-4xl md:text-6xl font-serif text-stone-50 font-light">
                {String(time.hours).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#E6AF2E] font-light">Hours</p>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-stone-900 rounded-lg flex items-center justify-center mb-4 border border-stone-800 hover:border-stone-700 transition-colors duration-300">
              <span className="text-4xl md:text-6xl font-serif text-stone-50 font-light">
                {String(time.minutes).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#E6AF2E] font-light">Minutes</p>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-stone-900 rounded-lg flex items-center justify-center mb-4 border border-stone-800 hover:border-stone-700 transition-colors duration-300">
              <span className="text-4xl md:text-6xl font-serif text-stone-50 font-light">
                {String(time.seconds).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#E6AF2E] font-light">Seconds</p>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </main>
  )
}
