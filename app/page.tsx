"use client";

import { useState } from "react";
import { content, type Lang } from "./i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const t = content[lang];

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  // Google Form config — replace with your own values
  const GOOGLE_FORM_ID = "YOUR_FORM_ID";
  const GOOGLE_ENTRY_ID = "entry.YOUR_ENTRY_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const url = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
    const body = new URLSearchParams({ [GOOGLE_ENTRY_ID]: email });
    // Fire-and-forget — Google Forms doesn't return CORS-friendly responses
    fetch(url, { method: "POST", body, mode: "no-cors" });
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="relative z-10">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="font-mono font-bold text-accent text-xl tracking-tight">
          🔒 lockr
        </span>
        <button
          onClick={toggleLang}
          className="font-mono text-sm border border-card-border px-3 py-1 rounded hover:border-accent transition-colors"
        >
          {t.nav.lang}
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1
          className="animate-fade-up font-sans font-black leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          <span className="text-accent">{t.hero.h1Accent}</span>{" "}
          {t.hero.h1Rest}
        </h1>
        <p className="animate-fade-up delay-200 text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          {t.hero.sub}
        </p>
        <div className="animate-fade-up delay-400 mt-10">
          {submitted ? (
            <p className="font-mono text-accent text-xl font-bold">
              {t.hero.success}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-background font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {t.hero.cta}
              </button>
            </form>
          )}
        </div>
      </section>

      <div className="glow-line max-w-4xl mx-auto" />

      {/* Pain section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-center font-sans font-bold text-3xl mb-12">
          {t.pain.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.pain.cards.map((card, i) => (
            <div
              key={i}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-muted italic leading-relaxed">{card.quote}</p>
              <p className="font-mono text-red-500 font-bold text-sm">
                {card.response}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-line max-w-4xl mx-auto" />

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-center font-sans font-bold text-3xl mb-12">
          {t.how.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.how.steps.map((step) => (
            <div
              key={step.num}
              className="bg-card border border-card-border rounded-xl p-6"
            >
              <span className="font-mono text-accent text-sm">{step.num}</span>
              <p className="text-3xl mt-2">{step.icon}</p>
              <h3 className="font-sans font-bold mt-3">{step.label}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-line max-w-4xl mx-auto" />

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-center font-sans font-bold text-3xl mb-12">
          {t.pricing.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-card border border-card-border rounded-xl p-8">
            <h3 className="font-sans font-bold text-xl">
              {t.pricing.free.name}
            </h3>
            <p className="font-mono text-3xl font-bold mt-2">
              {t.pricing.free.price}
            </p>
            <ul className="mt-6 space-y-3">
              {t.pricing.free.features.map((f, i) => (
                <li key={i} className="text-muted text-sm flex items-center gap-2">
                  <span className="text-muted">·</span> {f}
                </li>
              ))}
            </ul>
          </div>
          {/* Pro */}
          <div className="bg-card border-2 border-accent rounded-xl p-8">
            <h3 className="font-sans font-bold text-xl">
              {t.pricing.pro.name}
            </h3>
            <p className="font-mono text-3xl font-bold text-accent mt-2">
              {t.pricing.pro.price}
            </p>
            <ul className="mt-6 space-y-3">
              {t.pricing.pro.features.map((f, i) => (
                <li key={i} className="text-muted text-sm flex items-center gap-2">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-4xl mx-auto" />

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-center font-sans font-bold text-3xl mb-12">
          {t.faq.title}
        </h2>
        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="border border-card-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-6 py-4 font-sans font-semibold flex items-center justify-between hover:bg-card/50 transition-colors"
              >
                {item.q}
                <span className="text-accent ml-4 text-xl shrink-0">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-muted text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="glow-line max-w-4xl mx-auto" />

      {/* Footer */}
      <footer className="text-center py-20 px-6">
        <span className="animate-pulse-lock text-6xl">🔒</span>
        <p className="text-muted mt-6 max-w-md mx-auto">{t.footer.line}</p>
      </footer>
    </main>
  );
}
