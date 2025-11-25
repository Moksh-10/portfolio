"use client"

import { useState, useEffect } from "react"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, Twitter, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="py-6 px-4">
      <Separator className="bg-gray-700 mb-6" />
      <div className="container mx-auto max-w-3xl flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="mailto:mokshagrawal42@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="https://github.com/Moksh-10" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/agmoksh10" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/moksh-agrawal-805ab424a/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://drive.google.com/file/d/1hBvuGCgJTuepnJIDxOBCjKCYypSDBKYm/view?usp=sharing" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <FileText className="h-5 w-5" />
            <span className="sr-only">Resume</span>
          </Link>
        </div>
        <div className="text-gray-400">{currentTime}</div>
      </div>
    </footer>
  )
}

