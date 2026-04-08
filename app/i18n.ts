export type Lang = "en" | "es";

export const content = {
  en: {
    nav: { lang: "ES" },
    hero: {
      h1: "Stop delivering files for free.",
      h1Accent: "Stop delivering",
      h1Rest: "files for free.",
      sub: "Upload your work. Set your price. Share the link. Files unlock only after your client pays. No more ghosting. No more chasing.",
      cta: "Join the waitlist",
      success: "You're in! 🔒",
    },
    pain: {
      title: "Sound familiar?",
      cards: [
        {
          quote:
            '"The designs look great! I\'ll send payment Friday."',
          response: "Friday never comes.",
        },
        {
          quote:
            '"Can you just send the final files? We\'ll process the invoice next week."',
          response: "Next week never comes.",
        },
        {
          quote: '"We decided to go in a different direction."',
          response: "After downloading everything.",
        },
      ],
    },
    how: {
      title: "How it works",
      steps: [
        { num: "01", icon: "📁", label: "Upload your files", desc: "Drag & drop any file type — images, videos, PSDs, ZIPs, whatever." },
        { num: "02", icon: "💰", label: "Set your price", desc: "Choose how much your client needs to pay to unlock the files." },
        { num: "03", icon: "👁", label: "Share the preview link", desc: "Your client sees a watermarked preview. No downloads until payment." },
        { num: "04", icon: "✅", label: "Get paid → files unlock", desc: "Stripe processes the payment. Files unlock instantly. Done." },
      ],
    },
    pricing: {
      title: "Pricing",
      free: {
        name: "Free",
        price: "$0",
        features: ["3 deliveries/month", "50MB limit", "Lockr branding"],
      },
      pro: {
        name: "Pro",
        price: "$12/mo",
        features: [
          "Unlimited deliveries",
          "500MB",
          "Your branding",
          "Auto follow-ups",
        ],
      },
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What file types are supported?",
          a: "Everything. Images get watermarks, PDFs get a blurred first page, other files show metadata only.",
        },
        {
          q: "What's the fee?",
          a: "Free plan: 2% + Stripe's 2.9%. Pro plan: only Stripe's fee.",
        },
        {
          q: "What payment methods are accepted?",
          a: "Stripe handles cards, Apple Pay, Google Pay, and 135+ currencies.",
        },
        {
          q: "Is this escrow?",
          a: "No. Payment goes directly to you. We just lock the download until Stripe confirms.",
        },
      ],
    },
    footer: {
      line: "Built for freelancers who are tired of working for free.",
    },
  },
  es: {
    nav: { lang: "EN" },
    hero: {
      h1: "Deja de entregar archivos gratis.",
      h1Accent: "Deja de",
      h1Rest: "entregar archivos gratis.",
      sub: "Sube tu trabajo. Define el precio. Comparte el link. Los archivos se desbloquean solo cuando tu cliente paga. Sin ghosting. Sin perseguir pagos.",
      cta: "Únete a la lista de espera",
      success: "¡Estás dentro! 🔒",
    },
    pain: {
      title: "¿Te suena familiar?",
      cards: [
        {
          quote:
            '"¡Los diseños se ven geniales! Te envío el pago el viernes."',
          response: "El viernes nunca llega.",
        },
        {
          quote:
            '"¿Puedes enviar los archivos finales? Procesamos la factura la próxima semana."',
          response: "La próxima semana nunca llega.",
        },
        {
          quote: '"Decidimos ir en otra dirección."',
          response: "Después de descargar todo.",
        },
      ],
    },
    how: {
      title: "Cómo funciona",
      steps: [
        { num: "01", icon: "📁", label: "Sube tus archivos", desc: "Arrastra cualquier tipo de archivo — imágenes, videos, PSDs, ZIPs, lo que sea." },
        { num: "02", icon: "💰", label: "Define tu precio", desc: "Elige cuánto debe pagar tu cliente para desbloquear los archivos." },
        { num: "03", icon: "👁", label: "Comparte el link de preview", desc: "Tu cliente ve una vista previa con watermark. Sin descargas hasta que pague." },
        { num: "04", icon: "✅", label: "Te pagan → archivos desbloqueados", desc: "Stripe procesa el pago. Los archivos se desbloquean al instante." },
      ],
    },
    pricing: {
      title: "Precios",
      free: {
        name: "Gratis",
        price: "$0",
        features: ["3 entregas/mes", "50MB límite", "Branding de Lockr"],
      },
      pro: {
        name: "Pro",
        price: "$12/mes",
        features: [
          "Entregas ilimitadas",
          "500MB",
          "Tu branding",
          "Seguimientos automáticos",
        ],
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué tipos de archivo soporta?",
          a: "Todo. Las imágenes llevan watermark, los PDFs muestran la primera página borrosa, otros archivos solo muestran metadata.",
        },
        {
          q: "¿Cuál es la comisión?",
          a: "Plan gratis: 2% + 2.9% de Stripe. Plan Pro: solo la comisión de Stripe.",
        },
        {
          q: "¿Qué métodos de pago acepta?",
          a: "Stripe maneja tarjetas, Apple Pay, Google Pay y 135+ monedas.",
        },
        {
          q: "¿Esto es escrow?",
          a: "No. El pago va directo a ti. Solo bloqueamos la descarga hasta que Stripe confirma.",
        },
      ],
    },
    footer: {
      line: "Hecho para freelancers cansados de trabajar gratis.",
    },
  },
} as const;
