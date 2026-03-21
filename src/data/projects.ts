import {
  GraduationCap, Camera, FileText, Mic, PartyPopper,
  Rocket, Paintbrush, Presentation,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  accentColor: string
  gradientFrom: string
  features: string[]
  stack: string[]
  url?: string
  client?: { name: string; logo: string }
}

export const projects: Project[] = [
  {
    id: 'serata-perfetta',
    title: 'SerataPerfetta.it',
    tagline: 'Generatore intelligente di serate',
    description: 'Scegli budget e tema, e l\'app ti genera un programma serale completo con ristoranti, cinema, eventi e attività — tutto con dati reali e mappe.',
    icon: PartyPopper,
    accentColor: 'bg-fuchsia-500',
    gradientFrom: 'from-fuchsia-500',
    features: ['6 temi', 'Budget smart', '1345+ attività reali'],
    stack: ['Next.js', 'React', 'Google Places API'],
    url: 'https://serataperfetta.it',
    client: { name: 'SerataPerfetta', logo: '/logos/serataperfetta-logo.png' },
  },
  {
    id: 'vibecoded-tools',
    title: 'VibeCoded Tools',
    tagline: 'Agenzia software AI-first',
    description: 'Suite di tool desktop che funzionano offline: trascrizioni, conversioni file, presentazioni automatiche e grafica vettoriale. Tutto locale, senza cloud.',
    icon: Rocket,
    accentColor: 'bg-purple-500',
    gradientFrom: 'from-purple-500',
    features: ['Privacy-first', 'Offline', '5+ prodotti'],
    stack: ['Python', 'React', 'Tauri'],
    client: { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  },
  {
    id: 'counseling-academy',
    title: 'Counseling Academy',
    tagline: 'Piattaforma per scuola di counseling',
    description: 'Sito completo con gestione studenti, corsi a livelli, materiali didattici e calendario eventi integrato con Google Calendar.',
    icon: GraduationCap,
    accentColor: 'bg-indigo-500',
    gradientFrom: 'from-indigo-500',
    features: ['Area studenti', 'Google Calendar', 'Plugin custom'],
    stack: ['WordPress', 'PHP', 'JavaScript'],
    client: { name: 'DocPozz', logo: '/logos/counseling-academy.logo.png' },
  },
  {
    id: 'frameaboutyou',
    title: 'FrameAboutYou',
    tagline: 'App fotografica per eventi',
    description: 'I fotografi gestiscono le foto in tempo reale, gli ospiti le vedono subito sul tablet. Funziona anche senza internet.',
    icon: Camera,
    accentColor: 'bg-rose-500',
    gradientFrom: 'from-rose-500',
    features: ['Sync real-time', 'Offline-first', 'Desktop + Web'],
    stack: ['React', 'Tauri', 'Flask'],
    client: { name: 'Arzillibus', logo: '/logos/arzillibus.png' },
  },
  {
    id: 'transcrypt',
    title: 'Transcrypt',
    tagline: 'Trascrizione audio con AI',
    description: 'Registri una riunione o un\'intervista, e l\'app la trascrive automaticamente sul tuo PC. Riconosce chi parla e corregge gli errori con AI.',
    icon: Mic,
    accentColor: 'bg-violet-500',
    gradientFrom: 'from-violet-500',
    features: ['100% locale', 'Riconosce speaker', 'Correzione AI'],
    stack: ['Python', 'faster-whisper', 'Tauri'],
    client: { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  },
  {
    id: 'convertifacile',
    title: 'ConvertiFacile',
    tagline: 'Convertitore file universale',
    description: 'Trascina un file e lo converte in qualsiasi formato: foto, PDF, audio, video. Tutto sul tuo PC, senza caricare nulla online.',
    icon: FileText,
    accentColor: 'bg-emerald-500',
    gradientFrom: 'from-emerald-500',
    features: ['Drag & drop', '30+ formati', 'Zero cloud'],
    stack: ['Python', 'FastAPI', 'FFmpeg'],
    client: { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  },
  {
    id: 'lineart-studio',
    title: 'LineArt Studio',
    tagline: 'Da foto a disegno vettoriale',
    description: 'Carica una foto e la trasforma in un\'illustrazione vettoriale SVG stile line art. Perfetto per loghi, stampe e grafiche.',
    icon: Paintbrush,
    accentColor: 'bg-amber-500',
    gradientFrom: 'from-amber-500',
    features: ['Foto → SVG', 'Editor integrato', 'Export vettoriale'],
    stack: ['React', 'FastAPI', 'Potrace'],
    client: { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  },
  {
    id: 'slide-maker',
    title: 'SlideMaker',
    tagline: 'Presentazioni da foto in un click',
    description: 'Dai una cartella di foto e crea automaticamente presentazioni PPTX o video MP4 con transizioni, musica e stili personalizzabili.',
    icon: Presentation,
    accentColor: 'bg-cyan-500',
    gradientFrom: 'from-cyan-500',
    features: ['PPTX + Video', 'Musica di sfondo', 'Stili custom'],
    stack: ['Python', 'python-pptx', 'moviepy'],
    client: { name: 'VibeCoded Tools', logo: '/logos/vibecoded-tools-logo.jpeg' },
  },
]
