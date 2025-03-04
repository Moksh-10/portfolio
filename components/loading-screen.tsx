"use client"

import { useEffect, useState } from 'react'
import { TextScramble } from './text-scramble'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <TextScramble text="Welcome" duration={1000} />
    </div>
  )
}