// import { Separator } from "@/components/ui/separator"
// import { AccordionSections } from "@/components/accordion-sections"
// import { TextScramble } from "@/components/text-scramble"
// export default function Home() {
//   return (
//     <main className="space-y-8">
//       <TextScramble 
//         text="Moksh Agrawal" 
//         className="text-5xl font-bold mb-8"
//         duration={1000}
//       />
//       <div className="space-y-4">
        
//         <Separator className="bg-gray-700" />
//         <p className="text-xl text-gray-300">Just a Culer interested in Machine Learning</p>
//       </div>

//       <AccordionSections />
//     </main>
//   )
// }

import { Separator } from "@/components/ui/separator"
import { AccordionSections } from "@/components/accordion-sections"

export default function Home() {
  return (
    <main className="space-y-8">
      <h1 className="text-5xl font-bold mb-8">Moksh Agrawal</h1>
      <div className="space-y-4">
        <Separator className="bg-gray-700" />
        <p className="text-xl text-gray-300">Just a Culer interested in Machine Learning</p>
      </div>

      <AccordionSections />
    </main>
  )
}

