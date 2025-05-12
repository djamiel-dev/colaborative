# Collaborative – Powerlifting Coaching Website

## 🧠 Over het project

Deze website is gebouwd als eindproject binnen mijn opleiding, met als doel het aanbieden van **persoonlijke powerlifting coaching** via een moderne en doordachte user interface. Hoewel het plan initieel was om de volledige website te bouwen, is er vanwege de tijdsdruk gekozen om te focussen op de **homepage** – deze is volledig uitgewerkt en bevat diverse interactieve elementen en animaties.

De site is gebouwd met **Next.js**, **Tailwind CSS** en **Framer Motion**, en gestructureerd in overzichtelijke componenten. Tijdens het bouwen heb ik veel geleerd over component-based development, state management met `useState`/`useEffect`, en het gebruiken van animaties voor een rijkere beleving.

## ⚙️ Technologieën

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com/) (voor hosting)
- Git & GitHub (versiebeheer)

## 📁 Structuur

De code is opgesplitst in herbruikbare componenten zoals knoppen, scroll indicators, navigatie en inhoudssecties. De mappenstructuur is overzichtelijk opgezet, met aparte mappen voor:

- `components/` – herbruikbare UI-componenten
- `pages/` – routing via Next.js
- `public/` – afbeeldingen en video's
- `styles/` – globale styling via Tailwind-config

## 🎨 Gebruikte animaties

De homepage bevat verschillende geavanceerde animaties via Framer Motion:

- **Parallax scrolling**: Afbeeldingen bewegen mee op basis van de scrollpositie (`useScroll` + `useTransform`)
- **Fade-in on scroll**: Elementen verschijnen met fade-in wanneer ze in beeld komen
- **Scroll indicator**: Visuele hint voor gebruikers om verder te scrollen
- **Dynamische navbar (optioneel)**: (Toekomstige uitbreiding) met kleurverandering op scroll

## 🤖 Gebruik van AI

Voor dit project heb ik AI-tools zoals **ChatGPT** en **Cursor** op een ondersteunende manier ingezet. In plaats van de volledige code door AI te laten genereren, heb ik bewust gekozen om:

- Eerst zelf na te denken over de gewenste structuur en logica
- Pas daarna AI stap voor stap te gebruiken als hulp bij het uitwerken
- Alle gegenereerde code volledig te begrijpen en indien nodig aan te passen

Zo heb ik niet alleen een werkend product opgeleverd, maar ben ik ook technisch sterker geworden in React/Next.js en moderne webontwikkeling.

## 🚀 Installatie

1. Clone deze repository  
   ```bash
   git clone https://github.com/djamiel-dev/colaborative.git
   cd colaborative
