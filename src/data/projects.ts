import {
  GraduationCap, Camera, FileText, Mic, Paintbrush,
  Presentation, PartyPopper, Building2, Ticket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  features: string[]
  techStack: string[]
  accentColor: string   // tailwind gradient from
  glowColor: string     // rgba for GlowCard
  featured?: boolean     // show on homepage
}

export const projects: Project[] = [
  {
    id: 'counseling-academy',
    icon: GraduationCap,
    title: 'Counseling Academy',
    tagline: 'Piattaforma completa per accademia di counseling',
    description: 'Piattaforma WordPress con gestione studenti, corsi, materiali didattici a livelli e comunicazione eventi. Integrazione Google Calendar, sistema annunci e area riservata con accesso differenziato per anno di corso.',
    features: [
      'Google Calendar con eventi prossimi 20 giorni',
      'Registrazione e login con plugin PHP custom',
      'Carosello annunci e seminari sopra header',
      'Area materiali con visibilità per anno di corso',
      'Collegamento automatico al Drive della scuola',
      'Sezione "Olistica" — nuovo ramo di business',
    ],
    techStack: ['WordPress', 'PHP', 'JavaScript', 'Google Calendar API', 'Custom Plugins'],
    accentColor: 'from-indigo-500 to-indigo-700',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    featured: true,
  },
  {
    id: 'frameaboutyou',
    icon: Camera,
    title: 'FrameAboutYou',
    tagline: 'App fotografica per eventi, dalla versione web al desktop nativo',
    description: 'App peer-to-peer per gestione foto ad eventi con sync real-time multi-dispositivo. Due versioni: la web app originale e la migrazione completa a Tauri desktop con backend Flask e architettura offline-first.',
    features: [
      'Sync real-time multi-PC offline',
      'Galleria, crop, filtri e stampa diretta',
      'QR code per accesso rapido tablet',
      'Slideshow secondo schermo fullscreen',
      'Migrazione completa a Tauri desktop',
      'Face recognition support',
    ],
    techStack: ['React', 'TypeScript', 'Tauri', 'Flask', 'Python', 'Rust', 'C#'],
    accentColor: 'from-pink-500 to-rose-700',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    featured: true,
  },
  {
    id: 'convertifacile',
    icon: FileText,
    title: 'ConvertiFacile',
    tagline: 'Convertitore universale di file con interfaccia desktop',
    description: 'Tool desktop per conversione di qualsiasi formato: immagini, audio, video, documenti e PDF. Interfaccia drag-and-drop con coda di conversione e supporto batch.',
    features: [
      'Immagini: PNG, JPG, WebP, TIFF, GIF, ICO → PDF',
      'Audio/Video: MP3, WAV, MP4, AVI, MKV',
      'Documenti: DOCX, ODT, PPTX → PDF',
      'Drag-and-drop con coda batch',
    ],
    techStack: ['Python', 'FastAPI', 'Alpine.js', 'Tailwind CSS', 'FFmpeg', 'LibreOffice'],
    accentColor: 'from-emerald-500 to-emerald-700',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    featured: true,
  },
  {
    id: 'transcrypt',
    icon: Mic,
    title: 'Transcrypt',
    tagline: 'Trascrizione audio con intelligenza artificiale',
    description: 'Tool di trascrizione audio locale con correzione LLM, generazione vocabolario specifico, identificazione speaker e verbali automatici. CLI potente + GUI desktop in Tauri.',
    features: [
      'Trascrizione locale (CPU/GPU auto)',
      'Correzione errori con LLM (Claude/Ollama)',
      'Vocabolario specifico per dominio',
      'Identificazione e diarizzazione speaker',
      'Generazione verbali e mappe concettuali',
    ],
    techStack: ['Python', 'faster-whisper', 'Tauri', 'React', 'FastAPI', 'Claude API', 'Ollama'],
    accentColor: 'from-violet-500 to-violet-700',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    featured: true,
  },
  {
    id: 'lineart-studio',
    icon: Paintbrush,
    title: 'LineArt Studio',
    tagline: 'Trasforma immagini in SVG vettoriali',
    description: 'Tool di vectorizzazione che converte immagini raster in illustrazioni SVG line art. Upload, elaborazione automatica e download del vettoriale.',
    features: [
      'Conversione immagine → SVG vettoriale',
      'Elaborazione automatica line art',
      'Anteprima real-time del risultato',
      'API REST per integrazione esterna',
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Pillow', 'Vite'],
    accentColor: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'crea-presentazioni',
    icon: Presentation,
    title: 'CreaPresentazioni',
    tagline: 'Presentazioni e video da foto in un click',
    description: 'Generatore automatico di presentazioni PPTX e video MP4 partendo da foto. Stili personalizzabili, transizioni, musica di sottofondo e watermark.',
    features: [
      'Slide auto da cartella foto',
      'Stili dark/light personalizzabili',
      'Transizioni: fade, dissolve, wipe, push',
      'Export PPTX e video MP4',
      'Musica di sottofondo e watermark',
    ],
    techStack: ['Python', 'python-pptx', 'Pillow', 'Streamlit', 'moviepy'],
    accentColor: 'from-cyan-500 to-cyan-700',
    glowColor: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: 'serata-perfetta',
    icon: PartyPopper,
    title: 'SerataPerfetta',
    tagline: 'Genera la serata perfetta in qualsiasi città italiana',
    description: 'Generatore intelligente di serate per 11+ città italiane. Seleziona tema, budget e città: l\'app combina ristoranti, cinema, eventi, bowling e altro in un programma serale completo con dati reali da Google Places, TMDB e scraping eventi.',
    features: [
      '6 temi: Cena & Drink, Club, Romantica, Amici, Avventura, Arte',
      '9 tipi di attività combinabili senza duplicati',
      '1345+ attività reali da Google Places + TMDB',
      'Filtro budget, meteo e storico preferenze',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Turso', 'Google Places API', 'TMDB', 'Vercel'],
    accentColor: 'from-fuchsia-500 to-fuchsia-700',
    glowColor: 'rgba(217, 70, 239, 0.15)',
  },
  {
    id: 'gestionale-coisystem',
    icon: Building2,
    title: 'Gestionale Coisystem',
    tagline: 'Gestione commesse con integrazione ERP Mexal',
    description: 'Gestionale web completo per Coisystem: commesse, clienti, fornitori, fatture, DDT e materiali. Integrato con ERP Mexal via WebAPI per sincronizzazione dati bidirezionale.',
    features: [
      'CRUD commesse, clienti, fornitori, fatture',
      'Integrazione Mexal WebAPI (GET + POST)',
      'Import PDF automatico',
      'Gestione DDT, bolle, materiali e lavorazioni',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Mexal WebAPI', 'Docker'],
    accentColor: 'from-blue-500 to-blue-700',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 'arzillibus-ticketing',
    icon: Ticket,
    title: 'Arzillibus Ticketing',
    tagline: 'Sistema di biglietteria con pagamenti e QR code',
    description: 'Piattaforma di ticketing completa per Arzillibus: generazione biglietti PDF con QR code, pagamenti online, invio email automatico e gestione eventi.',
    features: [
      'Biglietti PDF con QR code univoci',
      'Pagamenti online integrati',
      'Email automatica con biglietto',
      'Dashboard gestione eventi',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'NextAuth', 'Nodemailer', 'PDFKit'],
    accentColor: 'from-teal-500 to-teal-700',
    glowColor: 'rgba(20, 184, 166, 0.15)',
  },
]

export const clients = [
  { name: 'Coisystem', logo: '/logos/coisystem.svg' },
  { name: 'Arzillibus', logo: '/logos/arzillibus.svg' },
  { name: 'Counseling Academy', logo: '/logos/counseling-academy.svg' },
  { name: 'VibeCoded Tools', logo: '/logos/vibecodedtools.svg' },
]
