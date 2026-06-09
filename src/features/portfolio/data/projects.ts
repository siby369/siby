import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ace-interview",
    title: "Ace-Interview",
    period: {
      start: "10.2025",
    },
    link: "https://ace-interview-2kxa.vercel.app/",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Genkit AI",
    ],
    description: `Developed an AI-powered mock interview platform enabling candidates to prepare for technical and behavioral interviews using role-specific question sets.
- Implemented audio-recording and pronunciation-analysis functionalities to give users feedback both on content and speech delivery.
- Built the frontend using Next.js (15.3.3) with React (18.3.1), TypeScript (5.9.2), Tailwind CSS (3.4.1), and Radix UI through shadcn/ui components for a clean, scalable design system.
- Integrated AI workflows using Google Genkit (1.14.1) and the @genkit-ai/googleai provider to dynamically generate interview questions and assess responses.`,
    logo: "https://raw.githubusercontent.com/siby369/Ace-Interview/refs/heads/main/src/app/favicon.ico",
    isExpanded: true,
  },
  {
    id: "text-to-image-gans",
    title: "Text-to-Image using GANs",
    period: {
      start: "10.2025",
    },
    link: "#",
    repo: "https://github.com/siby369/Text-to-Image-using-GANs",
    previewImage: "/projects/gan-preview.jpg",
    skills: [
      "Python",
      "GANs (DCGAN/CGAN)",
    ],
    description: `Built a conditional GAN pipeline that generates images from text embeddings by training paired generator–discriminator models on captioned datasets.
- Engineered preprocessing modules to convert textual descriptions into vector embeddings and aligned them with image samples for supervised adversarial training.
- Improved model stability and output quality using techniques such as label smoothing, conditional batch normalization, and performance evaluation with FID/Inception Score.`,
    logo: "https://github.com/siby369.png",
  },
  {
    id: "ableassist",
    title: "AbleAssist",
    period: {
      start: "11.2025",
    },
    link: "#",
    skills: [
      "Flutter",
      "Android (Java/Kotlin)",
      "TensorFlow Lite",
      "CameraX",
      "On-Device ML",
    ],
    description: `Engineered a fully on-device assistive technology platform supporting real-time OCR, speech-to-text captioning, scene recognition, and gesture-based control using only mobile phone hardware.
- Implemented native Android modules (CameraX, AudioRecord, TFLite) integrated with a Flutter UI via Platform Channels to deliver low-latency accessibility functions for visually, hearing, and motor-impaired users.
- Designed adaptive accessibility interfaces with high-contrast themes, large-target layouts, and hands-free interaction powered by head-pose estimation and voice commands.`,
    logo: "https://github.com/siby369.png",
  },
]
