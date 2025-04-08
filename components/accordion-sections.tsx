"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Calendar, FileText, Newspaper } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Updated projects data to match the two categories
const projects = [
  { id: "ml-projects", title: "Machine Learning Projects" },
  { id: "side-projects", title: "Side Projects" },
]

const blogs = [
  {
    date: "Dec 3, 2024",
    title: "Different Types of Attention Mechanisms",
    link: "https://general-share-c6c.notion.site/Different-Types-of-Attention-Mechanisms-1ac1f019fccc80c9adc5d7149da2a2f1",
  },
  {
    date: "Dec 13, 2024",
    title: "Decoding Einsum",
    link: "https://general-share-c6c.notion.site/Decoding-Einsum-1ac1f019fccc803bb781f2de8063614a",
  },
]

const research = [
  {
    title: "Something related to EV Charging Infrastructure (Work in Progress)",
    
  },
  
]

export function AccordionSections() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
      <AccordionItem value="projects" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("projects") ? "rotate-90" : ""}`}
            />
            Projects
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <Link
                  href={`/project/${project.id}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {project.title}
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="blog" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("blog") ? "rotate-90" : ""}`}
            />
            Blog
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex items-center text-gray-400 min-w-32">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blog.date}</span>
                </div>
                <Link 
                  href={blog.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Newspaper className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                  {blog.title}
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="research" className="border-none">
        <AccordionTrigger className="text-xl font-medium py-2 hover:no-underline">
          <div className="flex items-center">
            <ChevronRight
              className={`mr-2 h-5 w-5 transition-transform ${openItems.includes("research") ? "rotate-90" : ""}`}
            />
            Research
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-7 pt-2">
          <div className="space-y-3">
            {research.map((paper, index) => (
              <div key={index} className="group">
                {paper.link ? (
                  <Link href={paper.link} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <FileText className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                    {paper.title}
                  </Link>
                ) : (
                  <div className="text-gray-300 flex items-center">
                    <FileText className="h-4 w-4 mr-2 opacity-70" />
                    {paper.title}
                  </div>
                )}
                {paper.publication && (
                  <p className="text-sm text-gray-500 ml-6 mt-1">{paper.publication}</p>
                )}
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

