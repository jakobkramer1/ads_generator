"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6 border-b border-zinc-800/30 backdrop-blur-sm bg-[#08080c]/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-rose-600 flex items-center justify-center shadow-lg shadow-violet-500/20 hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            adsgen.ai
          </span>
        </div>
        <Link href="/create">
          <Button
            variant="outline"
            className="border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:text-white hover:border-zinc-600/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            App öffnen
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-28 lg:pt-36 pb-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            KI-gestützte Content-Generierung
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
              Erstelle beeindruckende
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
              Werbeinhalte
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Transformiere deine Produktbilder in fesselnde Werbeinhalte mit der Kraft von KI. 
            Professionelle Qualität in Minuten, nicht Stunden.
          </p>

          {/* Solution Description */}
          <div className="mt-20 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-white">
                  Die Zukunft der Werbeerstellung
                </h2>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4 text-lg">
                adsgen.ai revolutioniert die Art und Weise, wie Unternehmen Werbeinhalte erstellen. 
                Mit unserer KI-gestützten Plattform können Sie aus einem einfachen Produktbild 
                professionelle Werbevideos und -bilder generieren – ohne teure Agenturen oder 
                zeitaufwändige Produktionen.
              </p>
              <p className="text-zinc-400 leading-relaxed text-base">
                Nutzen Sie die neueste Technologie von Google (Veo 3.1 für Videos und Gemini 2.5 Flash 
                für Bilder), um in Sekunden hochwertige Inhalte zu erstellen, die Ihre Zielgruppe 
                begeistern und Ihre Conversion-Raten steigern.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Link href="/create">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 hover:from-indigo-500 hover:via-violet-500 hover:to-rose-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Jetzt starten
              </Button>
            </Link>
            <p className="mt-4 text-sm text-zinc-600">Keine Kreditkarte erforderlich • Kostenlos testen</p>
          </div>
        </div>

        {/* Trust Banner - Unternehmen die uns vertrauen */}
        <section className="mt-24 sm:mt-32 mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="text-center mb-8">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Vertrauen von führenden Unternehmen</p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"></div>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08080c] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08080c] to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling logos */}
            <div className="flex animate-scroll gap-12 items-center">
              {/* First set of logos */}
              <div className="flex gap-12 items-center flex-shrink-0">
                {[
                  { name: "TechCorp", color: "text-indigo-400" },
                  { name: "InnovateLab", color: "text-violet-400" },
                  { name: "DigitalFlow", color: "text-rose-400" },
                  { name: "CreativeStudio", color: "text-cyan-400" },
                  { name: "BrandHub", color: "text-emerald-400" },
                  { name: "MediaWorks", color: "text-amber-400" },
                  { name: "AdVantage", color: "text-pink-400" },
                  { name: "MarketForce", color: "text-blue-400" },
                ].map((company, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="flex-shrink-0 px-6 py-4 rounded-xl bg-zinc-900/30 border border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${company.color.replace('text-', 'from-')}/20 to-transparent border ${company.color.replace('text-', 'border-')}/30 flex items-center justify-center`}>
                        <svg className={`w-4 h-4 ${company.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className={`text-sm font-semibold ${company.color} whitespace-nowrap`}>
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-12 items-center flex-shrink-0" aria-hidden="true">
                {[
                  { name: "TechCorp", color: "text-indigo-400" },
                  { name: "InnovateLab", color: "text-violet-400" },
                  { name: "DigitalFlow", color: "text-rose-400" },
                  { name: "CreativeStudio", color: "text-cyan-400" },
                  { name: "BrandHub", color: "text-emerald-400" },
                  { name: "MediaWorks", color: "text-amber-400" },
                  { name: "AdVantage", color: "text-pink-400" },
                  { name: "MarketForce", color: "text-blue-400" },
                ].map((company, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="flex-shrink-0 px-6 py-4 rounded-xl bg-zinc-900/30 border border-zinc-800/30 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${company.color.replace('text-', 'from-')}/20 to-transparent border ${company.color.replace('text-', 'border-')}/30 flex items-center justify-center`}>
                        <svg className={`w-4 h-4 ${company.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className={`text-sm font-semibold ${company.color} whitespace-nowrap`}>
                        {company.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Warum adsgen.ai?
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Alles, was Sie für überzeugende Werbeinhalte benötigen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Blitzschnell</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Erstelle professionelle Werbeinhalte in Minuten. Kein Warten, keine Komplexität.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">KI-gestützt</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Modernste KI-Modelle erstellen beeindruckende Visuals aus deinen Ideen.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Viele Formate</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Videos und Bilder in allen gängigen Seitenverhältnissen. Perfekt für jede Plattform.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Dauer</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Erstelle Videos von 4 bis 8 Sekunden. Perfekt für Reels, Stories und mehr.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">HD-Qualität</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Bis zu 1080p Auflösung für kristallklare Visuals, die auffallen.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Sofortiger Download</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Lade deine Inhalte sofort herunter. Keine Wasserzeichen, keine Einschränkungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Umfassende Funktionalität
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Alles, was Sie für professionelle Werbeerstellung benötigen
            </p>
          </div>

          <div className="space-y-8">
            {/* Feature Group 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">KI-Video-Generierung</h3>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Erstellen Sie dynamische Werbevideos mit Google Veo 3.1. Wählen Sie zwischen 
                      4, 6 oder 8 Sekunden Länge und passen Sie die Auflösung (720p oder 1080p) 
                      an Ihre Bedürfnisse an.
                    </p>
                    <ul className="text-sm text-zinc-500 space-y-1">
                      <li>• Unterstützte Formate: 16:9 (Landscape), 9:16 (Portrait)</li>
                      <li>• HD und Full HD Auflösung</li>
                      <li>• Automatische Prompt-Verfeinerung durch KI</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">KI-Bild-Generierung</h3>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Generieren Sie professionelle Werbebilder mit Gemini 2.5 Flash. Transformieren 
                      Sie Ihre Produktbilder in ansprechende Werbeinhalte für Social Media, 
                      Print und digitale Kanäle.
                    </p>
                    <ul className="text-sm text-zinc-500 space-y-1">
                      <li>• Unterstützte Formate: 1:1 (Square), 16:9, 9:16</li>
                      <li>• Hochauflösende Ausgabe</li>
                      <li>• Stilistische Anpassung durch Prompt-Engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Group 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Intelligente Prompt-Verfeinerung</h3>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Unser KI-Agent analysiert und optimiert Ihre Prompts automatisch, um die 
                      bestmöglichen Ergebnisse zu erzielen. Basierend auf bewährten Templates 
                      und Best Practices.
                    </p>
                    <ul className="text-sm text-zinc-500 space-y-1">
                      <li>• Automatische Verbesserung von Eingabeprompts</li>
                      <li>• Cinematic Video Templates</li>
                      <li>• Kontextbewusste Optimierung</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Echtzeit-Status-Tracking</h3>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Verfolgen Sie den Fortschritt Ihrer Generierungen in Echtzeit. Unser 
                      asynchrones System ermöglicht es Ihnen, mehrere Jobs gleichzeitig zu 
                      verwalten.
                    </p>
                    <ul className="text-sm text-zinc-500 space-y-1">
                      <li>• Live-Status-Updates alle 3 Sekunden</li>
                      <li>• Job-Queue Management</li>
                      <li>• Sofortiger Download nach Fertigstellung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Stories Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Für wen ist adsgen.ai?
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Echte Anwendungsfälle aus der Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Story 1 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">E-Commerce Manager</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  "Ich erstelle täglich Werbeinhalte für unsere Produkte. Mit adsgen.ai kann ich 
                  aus einem Produktbild in Minuten professionelle Social-Media-Videos generieren, 
                  ohne ein Videoteam zu benötigen."
                </p>
                <div className="text-xs text-zinc-500">
                  ✓ Schnelle Produktpräsentationen<br />
                  ✓ Social Media Content für Instagram & TikTok<br />
                  ✓ A/B-Testing verschiedener Formate
                </div>
              </div>
            </div>

            {/* User Story 2 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing-Agentur</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  "Für unsere Kunden müssen wir schnell und kosteneffizient Werbeinhalte erstellen. 
                  adsgen.ai ermöglicht es uns, mehr Projekte in kürzerer Zeit zu bearbeiten und 
                  gleichzeitig die Qualität hoch zu halten."
                </p>
                <div className="text-xs text-zinc-500">
                  ✓ Skalierbare Content-Erstellung<br />
                  ✓ Konsistente Qualität<br />
                  ✓ Schnelle Iterationen
                </div>
              </div>
            </div>

            {/* User Story 3 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Startup-Gründer</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  "Als Startup haben wir kein großes Marketing-Budget. adsgen.ai gibt uns die 
                  Möglichkeit, professionelle Werbeinhalte zu erstellen, die mit großen Marken 
                  mithalten können – zu einem Bruchteil der Kosten."
                </p>
                <div className="text-xs text-zinc-500">
                  ✓ Budgetfreundliche Lösung<br />
                  ✓ Keine Agenturkosten<br />
                  ✓ Sofort einsatzbereit
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Unser Team
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Die Experten hinter adsgen.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border-2 border-indigo-500/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Alex Schmidt</h3>
                <p className="text-sm text-indigo-400 mb-3">Lead Developer</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Verantwortlich für Backend-Architektur und API-Integration. Experte für FastAPI 
                  und KI-Systeme.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-rose-500/20 border-2 border-violet-500/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Sarah Chen</h3>
                <p className="text-sm text-violet-400 mb-3">Frontend Engineer</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Spezialisiert auf Next.js und React. Gestaltet intuitive Benutzeroberflächen 
                  mit modernem Design.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500/20 to-amber-500/20 border-2 border-rose-500/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Max Weber</h3>
                <p className="text-sm text-rose-400 mb-3">AI/ML Engineer</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Entwickelt und optimiert KI-Modelle. Experte für Prompt-Engineering und 
                  Generative AI Systeme.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Lisa Müller</h3>
                <p className="text-sm text-emerald-400 mb-3">Product Manager</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Verantwortlich für Produktstrategie und User Experience. Verbindet Technologie 
                  mit Geschäftsanforderungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 sm:mt-40 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm p-10 sm:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-b from-violet-600/20 to-transparent blur-[100px]" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Bereit zu starten?
                </span>
              </h2>
              <p className="text-zinc-500 max-w-lg mx-auto mb-8">
                Werde Teil der Community, die ihr Marketing mit KI-generierten Inhalten revolutioniert.
              </p>
              <Link href="/create">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 hover:from-indigo-500 hover:via-violet-500 hover:to-rose-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Jetzt loslegen
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-rose-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  adsgen.ai
                </span>
              </div>
              <p className="text-sm text-zinc-500">
                KI-gestützte Werbeerstellung für moderne Unternehmen.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="/create" className="hover:text-white transition-colors">App starten</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 pt-8 text-center">
            <p className="text-sm text-zinc-600">
              © 2025 adsgen.ai • Powered by AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
