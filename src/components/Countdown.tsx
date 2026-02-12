"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center items-center gap-4 text-center">
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="text-sm uppercase tracking-wide">Days</span>
      </div>
      <span className="text-4xl md:text-5xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="text-sm uppercase tracking-wide">Hours</span>
      </div>
      <span className="text-4xl md:text-5xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-sm uppercase tracking-wide">Minutes</span>
      </div>
      <span className="text-4xl md:text-5xl font-bold">:</span>
      <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-sm uppercase tracking-wide">Seconds</span>
      </div>
    </div>
  )
}
