export type SectionId = "progettazione" | "documentazione" | "prossimi-step";

export const menuItems: { id: SectionId; label: string; subtitle: string }[] = [
  { id: "progettazione", label: "Progettazione", subtitle: "Architettura & flussi" },
  { id: "documentazione", label: "Documentazione", subtitle: "Setup & deploy" },
  { id: "prossimi-step", label: "Prossimi step", subtitle: "Roadmap immediata" }
];

export type AccordionItem = {
  title: string;
  description: string;
  highlights?: string[];
};

export const sectionContent: Record<SectionId, { hero: string; summary: string; accordions: AccordionItem[] }> = {
  "progettazione": {
    hero: "Sofy Gallery — Totem conversazionale con avatar 3D e voce naturale",
    summary:
      "Il frontend Next.js coordina l'avatar in React Three Fiber, mentre il gateway Fastify media la conversazione in streaming con Gemini AI e Google TTS.",
    accordions: [
      {
        title: "Architettura generale",
        description:
          "Pila modulare containerizzata: frontend Next.js + React Three Fiber per interfaccia kiosk e lip sync, backend Fastify come gateway WS/REST, integrazione Gemini AI e Google TTS con cache MP3 on-disk per risposte ultra reattive.",
        highlights: [
          "Frontend: animazione avatar, visemi e sincronizzazione testo",
          "Backend: Fastify con coda messaggi e sessioni",
          "AI: Gemini per NLU e Google TTS per la voce"
        ]
      },
      {
        title: "Flusso operativo end-to-end",
        description:
          "Dalla frase dell'utente allo streaming token-by-token, il sistema aggiorna live UI e avatar; al completamento, viene generato e sincronizzato l'audio con timeline dei visemi.",
        highlights: [
          "WS dal frontend al gateway per input vocali/testuali",
          "Streaming `chat.delta` verso UI per testo e lip sync",
          "Trigger TTS su `chat.done` con MP3 + keyframe ARKit"
        ]
      },
      {
        title: "Componenti chiave",
        description:
          "Gateway Fastify, servizi dedicati a Gemini, TTS e timeline visemi, oltre alla scena R3F con librerie come wawa-lipsync che rifiniscono il lip-sync dell'avatar.",
        highlights: [
          "`gemini.ts` con retry/fallback sui modelli",
          "`tts.ts` per Google TTS e timepoint SSML",
          "`timeline.ts` per tradurre audio in morph target"
        ]
      }
    ]
  },
  "documentazione": {
    hero: "Parametri condivisi tra frontend e backend governano l'orchestrazione del kiosk",
    summary:
      "Le variabili d'ambiente definiscono chiavi AI, voce, cache e URL, mentre il deploy può vivere in Docker Compose o bare metal con unit systemd.",
    accordions: [
      {
        title: "Variabili critiche",
        description:
          "Configurazione tramite .env per chiavi e percorsi condivisi: Gemini API, credenziali Google, lingua/voce, directory cache e endpoint pubblici WS/API.",
        highlights: [
          "`GEMINI_API_KEY`, `GEMINI_MODEL`, fallback",
          "`GOOGLE_APPLICATION_CREDENTIALS`, `TTS_LANG`, `TTS_VOICE`",
          "`TTS_CACHE_DIR`, `NEXT_PUBLIC_WS_URL`, `NEXT_PUBLIC_API_BASE`"
        ]
      },
      {
        title: "Modalità di deploy",
        description:
          "Container Docker Compose per ambienti replicabili e setup bare metal supervisionato da systemd per kiosk permanenti.",
        highlights: ["Docker Compose", "Unit systemd con restart", "Monitoraggio health check e log rotation"]
      },
      {
        title: "Ops & osservabilità",
        description:
          "Monitoraggio continuo con metriche, log e manutenzione della cache audio per tenere la latenza sotto controllo e prevenire regressioni.",
        highlights: ["Prometheus + Grafana per latenza e TTFB", "Test automatici e scenari di regressione", "Pulizia cache programmata"]
      }
    ]
  },
  "prossimi-step": {
    hero: "Roadmap pratica per elevare l'esperienza Sofy Gallery",
    summary:
      "Integrazione con n8n, ingresso vocale completo, ottimizzazioni audio e osservabilità avanzata sono gli step già definiti per il prossimo ciclo.",
    accordions: [
      {
        title: "Integrazione con n8n",
        description:
          "Delegare log, cache e analisi a flussi asincroni esterni per alleggerire il gateway e rendere il sistema più stabile durante i picchi.",
        highlights: ["Automazioni per log & pre-warm", "Riduzione carico Fastify", "Scalabilità prevedibile"]
      },
      {
        title: "Interazione voce a voce",
        description:
          "Aggiunta di pipeline Speech-to-Text basate su Google STT o Whisper per input microfonico con barge-in e conversazione naturale.",
        highlights: ["STT realtime", "Microfono integrato nel totem", "Barge-in sulle risposte"]
      },
      {
        title: "Pipeline audio & monitoring",
        description:
          "Buffering, pre-roll e analisi visemi dinamica migliorano la sincronia; osservabilità potenziata con metriche e dashboard dedicate.",
        highlights: ["Buffer TTS tra `chat.done` e playback", "Lip-sync locale migliorato", "Dashboard Grafana specifiche"]
      },
      {
        title: "Integrazione e ampliamento multilingua",
        description:
          "Estendere la pipeline di AI e TTS per supportare in modo nativo più lingue, consentendo interazioni in inglese, spagnolo, cinese e russo con voce e sincronizzazione labiale coerenti.",
        highlights: [
          "Supporto Gemini multilingua",
          "Selezione lingua automatica o da menu kiosk",
          "TTS multilingua con visemi adattivi",
          "Internazionalizzazione UI (i18n)"
        ]
      }
    ]
  }
};
