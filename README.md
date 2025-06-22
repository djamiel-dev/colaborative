# Powerlifting Coach Website

Een website voor mijn powerlifting coaching - gebouwd als persoonlijk project voor mijn studie.

![Website Preview](./screenshot.png)

## Over het project

Dit project begon als een idee voor een complete website, maar door tijdsbeperkingen heb ik me gefocust op het zo goed mogelijkuitwerken van de homepage. Ik wilde laten zien wat ik kan met moderne web technologieën, dus heb ik ingezet op animaties en een strakke user interface.

De site is bedoeld voor mensen die via mijn instagram geinteresseerd zijn geraakt in mijn coaching en meer willen weten. De homepage geeft bezoekers een goede eerste indruk van wat ik te bieden heeft.

## Wat ik heb gebouwd

- **Smooth animaties** - Met Framer Motion voor professionele uitstraling
- **Parallax scrolling** - Achtergrond beweegt mee tijdens scrollen
- **Fade-in effecten** - Elementen komen mooi in beeld
- **Scroll indicator** - Laat zien dat er meer content naar beneden is

## Technische stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) - Voor de React framework en routing

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) - Voor snelle en consistente styling

![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue) - Voor alle animaties en transitions

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) - Voor deployment en hosting

## Wat ik heb geleerd

Tijdens dit project ben ik veel beter geworden in:
- Component-based denken (alles opdelen in herbruikbare stukjes)
- React hooks zoals `useState` en `useEffect`
- Animaties implementeren zonder dat de site traag wordt
- Git workflow en commits

## Projectstructuur

```
colaborative/
├── public/             # Favicon en andere statische bestanden
├── src/
│   └── app/           # Next.js 13+ app directory
│       ├── components/ # Alle herbruikbare componenten
│       ├── globals.css
│       ├── layout.js
│       └── page.js    # Homepage
├── .gitattributes
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## Lokaal draaien

Om het project zelf te proberen:

```bash
git clone https://github.com/djamiel-dev/colaborative.git
cd colaborative
npm install
npm run dev
```

Open dan [http://localhost:3000](http://localhost:3000) in je browser.

## Toekomstplannen

Als ik meer tijd had gehad, zou ik nog willen toevoegen:
- Meer pagina's (over, contact, services)
- Een booking systeem
- Blog functionaliteit

## Deployment

De site is automatisch gedeployed via Vercel. Elke push naar main branch wordt automatisch live gezet.

---

**Gebouwd door:** [djamiel-dev](https://github.com/djamiel-dev)  
**Live versie:** [Bekijk de website](https://colaborative.vercel.app)

*Dit project is onderdeel van mijn studie en gemaakt om te laten zien wat ik kan met moderne web development.*
