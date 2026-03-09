# 🚀 Guida al Deploy - Portfolio Fabio Miceli

## Deploy su Vercel (Raccomandato)

### 1. Preparazione

```bash
# Assicurati che il build funzioni
npm run build

# Testa localmente
npm start
```

### 2. Deploy con Vercel CLI

```bash
# Installa Vercel CLI globalmente
npm i -g vercel

# Login su Vercel
vercel login

# Deploy
vercel

# Deploy di produzione
vercel --prod
```

### 3. Deploy con GitHub Integration

1. Vai su [vercel.com](https://vercel.com)
2. Connetti il tuo account GitHub
3. Importa il repository
4. Vercel rileverà automaticamente Next.js
5. Clicca "Deploy"

### 4. Configurazione Vercel

Il progetto include già `vercel.json` con:
- Regione: `fra1` (Francoforte)
- Headers di sicurezza
- Ottimizzazioni performance

## Deploy su Altri Provider

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### AWS Amplify

```bash
# Build settings
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Railway

```bash
# railway.json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/"
  }
}
```

## Variabili d'Ambiente

Crea un file `.env.local` per sviluppo:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Per produzione, configura le variabili nel provider:

```env
NEXT_PUBLIC_SITE_URL=https://fabio-miceli-portfolio.vercel.app
```

## Ottimizzazioni Post-Deploy

### 1. Google Analytics (Opzionale)

Aggiungi in `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

// Nel componente
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### 2. Google Search Console

1. Vai su [Google Search Console](https://search.google.com/search-console)
2. Aggiungi la proprietà del sito
3. Verifica con il file HTML o meta tag

### 3. Performance Monitoring

Considera l'aggiunta di:
- Vercel Analytics
- Sentry per error tracking
- Hotjar per user behavior

## Checklist Pre-Deploy

- [ ] Build locale funzionante
- [ ] Test responsive su mobile/tablet/desktop
- [ ] Controllo performance Lighthouse
- [ ] Verifica SEO metadata
- [ ] Test form contatti
- [ ] Controllo link social
- [ ] Verifica immagini e font
- [ ] Test animazioni su dispositivi lenti

## Troubleshooting

### Build Errors

```bash
# Pulisci cache
rm -rf .next
npm run build
```

### Font Loading Issues

Verifica che i font Google siano caricati correttamente in `globals.css`.

### Three.js Performance

Se le animazioni 3D sono troppo pesanti, puoi disabilitarle su mobile modificando `HeroBackground.tsx`.

## Monitoraggio

Dopo il deploy, monitora:
- Core Web Vitals
- Errori JavaScript
- Tempo di caricamento
- Conversioni form contatti

---

**Buon deploy! 🚀**
