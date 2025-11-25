import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

// Define the project lists
const projectsData = {
  "ml-projects": {
    title: "Machine Learning Projects",
    projects: [
      {
        name: "Stable Diffusion",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Stable-Diffusion/sd"
      },
      {
        name: "Paligemma",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Paligemma"
      },
      {
        name: "Vanilla Transformer - Machine Translation",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Basic-Transformer"
      },
      {
        name: "GPT-2",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/GPT-2"
      },
      {
        name: "LLaMA",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/LLaMA"
      },
      {
        name: "Vision Transformer",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/ViT"
      },
      {
        name: "Quantization",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Quantization"
      },
      {
        name: "Mixture of Experts",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/MoE"
      },
      {
        name: "U Net",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/U-Net"
      },
      {
        name: "Variational Autoencoder",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/VAE"
      },

      {
        name: "MLP-Mixer",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/MLP-Mixer"
      },
      {
        name: "Transformer without Nomalization",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Trnasformer%20without%20Normalization"
      },
      {
        name: "Sliding Window Attention",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/sliding%20window%20attention"
      },

      {
        name: "Differential Transformer",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Differential-Transformer"
      },
      {
        name: "Simple GAN",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/GAN/Simple-GAN"
      },
      {
        name: "Linformer",
        link: "https://github.com/Moksh-10/ML-Projects/tree/main/Linformer"
      },


    ]
  },
  "side-projects": {
    title: "Side Projects",
    projects: [
      {
        name: "Blockchain & Solana basics",
        link: "https://github.com/Moksh-10/Blockchain"
      },
      {
        name: "Basic backend",
        link: "https://github.com/Moksh-10/backend-js"
      },
      {
        name: "Portfolio Website",
        link: "https://github.com/Moksh-10/portfolio"
      },
      {
        name: "Brain Tumor Classification (Vibe Coded)",
        link: "https://github.com/Moksh-10/Brain_Tumor_MRI_Classification"
      },

      // Add more side projects here
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const category = projectsData[params.id as keyof typeof projectsData]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="space-y-8">
      <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to home
      </Link>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{category.title}</h1>

        <div className="grid gap-4">
          {category.projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors group"
            >
              <Github className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="text-gray-300 group-hover:text-white">{project.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

