"use client"

import { useEffect, useState } from 'react'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

interface TextScrambleProps {
  text: string
  className?: string
  duration?: number
}

export function TextScramble({ text, className = "", duration = 1000 }: TextScrambleProps) {
  const [scrambledText, setScrambledText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(true)

  useEffect(() => {
    if (!isScrambling) return

    let iteration = 0
    const maxIterations = 10
    const iterationDelay = duration / maxIterations

    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) return text[index]
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      iteration += 1

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setScrambledText(text)
        setIsScrambling(false)
      }
    }, iterationDelay)

    return () => clearInterval(interval)
  }, [text, duration, isScrambling])

  return <h1 className={className}>{scrambledText}</h1>
}