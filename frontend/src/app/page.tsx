"use client";

import Link from "next/link";
import Image from "next/image";
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

          {/* CTA Button */}
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
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

        {/* How It Works Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                So funktioniert's
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              In nur 4 einfachen Schritten zu professionellen Werbeinhalten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
                1
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bild hochladen</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Lade dein Produktbild oder Referenzbild per Drag & Drop hoch
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-rose-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/30">
                2
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Prompt eingeben</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Beschreibe, was du erstellen möchtest – unsere KI optimiert es automatisch
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-rose-600 to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-rose-500/30">
                3
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Format wählen</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Wähle Format, Auflösung und Dauer – perfekt für deine Plattform
              </p>
            </div>

            {/* Step 4 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/30">
                4
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Downloaden</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Lade dein fertiges Video oder Bild sofort herunter – ohne Wasserzeichen
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/create">
              <Button
                variant="outline"
                className="border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:text-white hover:border-zinc-600/50 backdrop-blur-sm transition-all duration-300"
              >
                Jetzt ausprobieren
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </section>

        {/* Solution Description */}
        <section className="mt-24 sm:mt-32 mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Die Zukunft der Werbeerstellung
                </h2>
              </div>
              <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                Mit unserer KI-gestützten Plattform generierst du aus einfachen Produktbildern 
                professionelle Werbevideos und -bilder – ohne teure Agenturen oder zeitaufwändige Produktionen.
              </p>
            </div>
          </div>
        </section>

        {/* Demo/Examples Section */}
        <section className="mt-24 sm:mt-32 mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Sieh dir an, was möglich ist
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Professionelle Ergebnisse in Minuten – keine Agentur nötig
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {/* Video Example - Before/After */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-300 flex flex-col h-full">
              <div className="aspect-video relative bg-zinc-900 overflow-hidden flex-shrink-0 grid grid-cols-2 gap-0">
                {/* Before - Original Image */}
                <div className="relative bg-zinc-800/50 border-r border-zinc-700/30 overflow-hidden">
                  <Image
                    src="/example_video/louis-vuitton-imagination--LP0219_PM2_Front%20view.avif"
                    alt="Originalbild für Video-Generierung"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 rounded bg-zinc-900/80 backdrop-blur-sm text-xs text-zinc-400 font-medium">
                    Vorher
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-emerald-500/90 backdrop-blur-sm flex items-center justify-center border-2 border-zinc-900/50">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                {/* After - Generated Video */}
                <div className="relative bg-black overflow-hidden">
                  <video
                    className="w-full h-full object-cover absolute inset-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover' }}
                  >
                    <source src="/example_video/e42163fd-5236-40c0-a847-8ed38dd4fcc6.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-2 right-2 px-2 py-1 rounded bg-emerald-500/90 backdrop-blur-sm text-xs text-white font-medium z-10">
                    Nachher
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">KI-Video-Generierung</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">Dynamische Werbevideos</h3>
                <p className="text-sm text-zinc-400 mb-4 flex-grow leading-relaxed">
                  Erstelle fesselnde Videos aus Produktbildern. Perfekt für Social Media, 
                  Werbeanzeigen und Marketing-Kampagnen.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">16:9 • 9:16</span>
                  <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">720p • 1080p</span>
                  <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">4-8 Sek.</span>
                </div>
              </div>
            </div>

            {/* Image Example - Before/After */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700/50 transition-all duration-300 flex flex-col h-full">
              <div className="aspect-video relative bg-zinc-900 overflow-hidden flex-shrink-0 grid grid-cols-2 gap-0">
                {/* Before - Original Image */}
                <div className="relative bg-zinc-800/50 border-r border-zinc-700/30 overflow-hidden">
                  <Image
                    src="/example_image/sprite%20original.png"
                    alt="Originalbild für Bild-Generierung"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 rounded bg-zinc-900/80 backdrop-blur-sm text-xs text-zinc-400 font-medium">
                    Vorher
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-violet-500/90 backdrop-blur-sm flex items-center justify-center border-2 border-zinc-900/50">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                {/* After - Generated Image */}
                <div className="relative">
                  <Image
                    src="/example_image/sprite%20ai.png"
                    alt="Beispiel generiertes Werbebild"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded bg-violet-500/90 backdrop-blur-sm text-xs text-white font-medium">
                    Nachher
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">KI-Bild-Generierung</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">Professionelle Werbebilder</h3>
                <p className="text-sm text-zinc-400 mb-4 flex-grow leading-relaxed">
                  Transformiere Produktbilder in ansprechende Werbeinhalte. Ideal für 
                  Instagram, Facebook Ads und Print-Materialien.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">1:1 • 16:9 • 9:16</span>
                  <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">HD Qualität</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Examples Section */}
        <section className="mt-32 sm:mt-40 mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Beispiele unserer Arbeit
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Entdecke die Vielfalt unserer generierten Inhalte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Scrolling Images - Top to Bottom */}
            <div className="relative">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Generierte Bilder</h3>
              </div>
              <div className="relative h-[600px] overflow-hidden rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#08080c] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08080c] to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling images container */}
                <div className="flex flex-col animate-scroll-down gap-4 p-4">
                  {/* First set of images */}
                  {[
                    { src: "/slideshow_image/restaurant%20refined.png", alt: "Restaurant Werbebild" },
                    { src: "/slideshow_image/sushiai.png", alt: "Sushi Werbebild" },
                    { src: "/slideshow_image/sagrotanai.png", alt: "Sagrotan Werbebild" },
                    {src:  "/slideshow_image/headphoneai.png", alt: "Headphone Werbebild" },
                    { src: "/slideshow_image/restaurant%20refined.png", alt: "Restaurant Werbebild" },
                    { src: "/slideshow_image/sushiai.png", alt: "Sushi Werbebild" },
                    { src: "/slideshow_image/sagrotanai.png", alt: "Sagrotan Werbebild" },
                    {src:  "/slideshow_image/headphoneai.png", alt: "Headphone Werbebild" },
                  ].map((img, i) => (
                    <div
                      key={`image-1-${i}`}
                      className="shrink-0 w-full aspect-square rounded-xl border border-zinc-800/50 overflow-hidden relative bg-zinc-900"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {[
                    { src: "/slideshow_image/restaurant%20refined.png", alt: "Restaurant Werbebild" },
                    { src: "/slideshow_image/sushiai.png", alt: "Sushi Werbebild" },
                    { src: "/slideshow_image/sagrotanai.png", alt: "Sagrotan Werbebild" },
                    {src:  "/slideshow_image/headphoneai.png", alt: "Headphone Werbebild" },
                    { src: "/slideshow_image/restaurant%20refined.png", alt: "Restaurant Werbebild" },
                    { src: "/slideshow_image/sushiai.png", alt: "Sushi Werbebild" },
                    { src: "/slideshow_image/sagrotanai.png", alt: "Sagrotan Werbebild" },
                    {src:  "/slideshow_image/headphoneai.png", alt: "Headphone Werbebild" },
                  ].map((img, i) => (
                    <div
                      key={`image-2-${i}`}
                      className="shrink-0 w-full aspect-square rounded-xl border border-zinc-800/50 overflow-hidden relative bg-zinc-900"
                      aria-hidden="true"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrolling Videos - Bottom to Top */}
            <div className="relative">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Generierte Videos</h3>
              </div>
              <div className="relative h-[600px] overflow-hidden rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm">
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#08080c] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#08080c] to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling videos container */}
                <div className="flex flex-col animate-scroll-up gap-4 p-4">
                  {/* First set of videos - carefully ordered to avoid repetition */}
                  {[
                    { src: "/slideshow_video/pasta.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/headphone_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/logo_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/ferrari.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/toothpaste.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/headphone_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/pasta.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/logo_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/ferrari.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/toothpaste.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                  ].map((video, i) => {
                    const aspectRatio = video.aspectRatio === '9:16' ? '9/16' : '16/9';
                    return (
                      <div
                        key={`video-1-${i}`}
                        className="shrink-0 w-full rounded-xl border border-zinc-800/50 overflow-hidden relative bg-black"
                        style={{ aspectRatio }}
                      >
                        <video
                          className="w-full h-full absolute inset-0 object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={video.src} type="video/mp4" />
                        </video>
                      </div>
                    );
                  })}
                  
                  {/* Duplicate set for seamless loop - starts with different video to avoid repetition */}
                  {[
                    { src: "/slideshow_video/pasta.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/headphone_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/logo_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/ferrari.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/toothpaste.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/headphone_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/pasta.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/logo_vid.mp4", objectFit: 'contain' as const, aspectRatio: '9:16' as const },
                    { src: "/slideshow_video/ferrari.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                    { src: "/slideshow_video/toothpaste.mp4", objectFit: 'contain' as const, aspectRatio: '16:9' as const },
                  ].map((video, i) => {
                    const aspectRatio = video.aspectRatio === '9:16' ? '9/16' : '16/9';
                    return (
                      <div
                        key={`video-2-${i}`}
                        className="shrink-0 w-full rounded-xl border border-zinc-800/50 overflow-hidden relative bg-black"
                        style={{ aspectRatio }}
                        aria-hidden="true"
                      >
                        <video
                          className="w-full h-full absolute inset-0 object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={video.src} type="video/mp4" />
                        </video>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner - Unternehmen die uns vertrauen */}
        {/*
        <section className="mt-24 sm:mt-32 mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <div className="text-center mb-8">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Vertrauen von führenden Unternehmen</p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"></div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08080c] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08080c] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll gap-12 items-center">
              <div className="flex gap-12 items-center flex-shrink-0">
                {[
                  { 
                    name: "Shopify", 
                    logoPath: "/logos/Shopify_logo_2018.svg.png",
                    color: "text-emerald-400"
                  },
                  { 
                    name: "Notion", 
                    logoPath: "/logos/Notion-logo.svg.png",
                    color: "text-zinc-300"
                  },
                  { 
                    name: "Stripe", 
                    logoPath: "/logos/Stripe_Logo,_revised_2016.svg.png",
                    color: "text-indigo-400"
                  },
                  { 
                    name: "Amazon", 
                    logoPath: "/logos/Amazon_logo.svg.webp",
                    color: "text-orange-400"
                  },
                  { 
                    name: "Figma", 
                    logoPath: "/logos/Figma-Logo.png",
                    color: "text-violet-400"
                  },
                  { 
                    name: "Adobe", 
                    logoPath: "/logos/Adobe_Corporate_logo.svg.png",
                    color: "text-rose-400"
                  },
                  { 
                    name: "Meta", 
                    logoPath: "/logos/Meta-Logo.png",
                    color: "text-blue-400"
                  },
                  { 
                    name: "Google", 
                    logoPath: "/logos/Google_2015_logo.svg.webp",
                    color: "text-red-400"
                  },
                ].map((company, idx) => (
                  <div
                    key={`first-${idx}`}
                    className="shrink-0 px-8 py-6 rounded-xl bg-white/90 border border-zinc-200/50 backdrop-blur-sm hover:bg-white hover:border-zinc-300/50 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <Image 
                        src={company.logoPath} 
                        alt={`${company.name} Logo`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-12 items-center flex-shrink-0" aria-hidden="true">
                {[
                  { 
                    name: "Shopify", 
                    logoPath: "/logos/Shopify_logo_2018.svg.png",
                    color: "text-emerald-400"
                  },
                  { 
                    name: "Notion", 
                    logoPath: "/logos/Notion-logo.svg.png",
                    color: "text-zinc-300"
                  },
                  { 
                    name: "Stripe", 
                    logoPath: "/logos/Stripe_Logo,_revised_2016.svg.png",
                    color: "text-indigo-400"
                  },
                  { 
                    name: "Amazon", 
                    logoPath: "/logos/Amazon_logo.svg.webp",
                    color: "text-orange-400"
                  },
                  { 
                    name: "Figma", 
                    logoPath: "/logos/Figma-Logo.png",
                    color: "text-violet-400"
                  },
                  { 
                    name: "Adobe", 
                    logoPath: "/logos/Adobe_Corporate_logo.svg.png",
                    color: "text-rose-400"
                  },
                  { 
                    name: "Meta", 
                    logoPath: "/logos/Meta-Logo.png",
                    color: "text-blue-400"
                  },
                  { 
                    name: "Google", 
                    logoPath: "/logos/Google_2015_logo.svg.webp",
                    color: "text-red-400"
                  },
                ].map((company, idx) => (
                  <div
                    key={`second-${idx}`}
                    className="shrink-0 px-8 py-6 rounded-xl bg-white/90 border border-zinc-200/50 backdrop-blur-sm hover:bg-white hover:border-zinc-300/50 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <Image 
                        src={company.logoPath} 
                        alt={`${company.name} Logo`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Features Section */}
        <section id="features" className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20 flex-shrink-0">
                    <Image 
                      src="/avatars/pexels-photo-774909.jpeg" 
                      alt="Maria Klein"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">E-Commerce Manager</h3>
                    <p className="text-sm text-zinc-500">Maria Klein</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3 italic">
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-lg shadow-violet-500/20 flex-shrink-0">
                    <Image 
                      src="/avatars/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg" 
                      alt="Thomas Weber"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Marketing-Agentur</h3>
                    <p className="text-sm text-zinc-500">Thomas Weber</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3 italic">
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-500/30 shadow-lg shadow-rose-500/20 flex-shrink-0">
                    <Image 
                      src="/avatars/pexels-olly-733872.jpg" 
                      alt="Lisa Schmidt"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Startup-Gründer</h3>
                    <p className="text-sm text-zinc-500">Lisa Schmidt</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3 italic">
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

        {/* Pricing Section */}
        <section id="pricing" className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Transparente Preise
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Flexibles Token-System – zahle nur für das, was du brauchst
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Free Registration */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-emerald-500/30 backdrop-blur-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Kostenlose Registrierung</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">Starte sofort mit 10 kostenlosen Tokens – keine Kreditkarte erforderlich</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">10 Tokens</p>
                    <p className="text-sm text-zinc-500">gratis</p>
                  </div>
                  <Link href="/create">
                    <Button
                      className="h-10 px-6 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-300"
                    >
                      Jetzt starten
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Monthly Membership */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border-2 border-violet-500/30 backdrop-blur-sm p-8 sm:p-10">
              {/* Popular badge */}
              <div className="absolute top-6 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-rose-600 text-xs font-semibold text-white">
                Empfohlen
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Monatliche Mitgliedschaft</h3>
                  <p className="text-zinc-400">Ideal für regelmäßige Content-Erstellung</p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">25€</span>
                    <span className="text-zinc-500">/Monat</span>
                  </div>
                  <p className="text-violet-400 font-medium">100 Tokens inklusive</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-zinc-300 text-sm">100 Tokens monatlich</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-zinc-300 text-sm">Alle Formate & Auflösungen</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-zinc-300 text-sm">Keine Wasserzeichen</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-zinc-300 text-sm">Zusätzliche Tokens kaufbar</p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/create">
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base font-semibold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 hover:from-indigo-500 hover:via-violet-500 hover:to-rose-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Mitglied werden
                  </Button>
                </Link>
              </div>
            </div>

            {/* Token Packages */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Zusätzliche Token-Pakete</h3>
              <p className="text-center text-sm text-zinc-500 mb-6">Für Mitglieder: Kaufe zusätzliche Tokens nach Bedarf</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 100 Tokens */}
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm p-6 hover:border-indigo-500/30 transition-all duration-300 group">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">100</p>
                    <p className="text-zinc-500 text-sm mb-4">Tokens</p>
                    <p className="text-2xl font-bold text-indigo-400 mb-2">15€</p>
                    <p className="text-xs text-zinc-500">0,15€ pro Token</p>
                  </div>
                </div>

                {/* 200 Tokens */}
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-violet-500/30 backdrop-blur-sm p-6 hover:border-violet-500/50 transition-all duration-300">
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-violet-500/20 text-xs text-violet-400 font-medium">
                    Beliebt
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">200</p>
                    <p className="text-zinc-500 text-sm mb-4">Tokens</p>
                    <p className="text-2xl font-bold text-violet-400 mb-2">25€</p>
                    <p className="text-xs text-zinc-500">0,125€ pro Token</p>
                  </div>
                </div>

                {/* 500 Tokens */}
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-emerald-500/30 backdrop-blur-sm p-6 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs text-emerald-400 font-medium">
                    Bester Wert
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-1">500</p>
                    <p className="text-zinc-500 text-sm mb-4">Tokens</p>
                    <p className="text-2xl font-bold text-emerald-400 mb-2">50€</p>
                    <p className="text-xs text-zinc-500">0,10€ pro Token</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Häufige Fragen
              </span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Alles, was du über adsgen.ai wissen musst
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Wie funktioniert die KI-Generierung?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Wir nutzen die neueste Technologie von Google: Veo 3.1 für Videos und Gemini 2.5 Flash für Bilder. 
                    Du lädst einfach ein Bild hoch, beschreibst was du möchtest, und unsere KI erstellt professionelle 
                    Werbeinhalte in wenigen Minuten.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Wie lange dauert die Generierung?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Die Generierungszeit hängt von der Komplexität ab, beträgt aber typischerweise 2-5 Minuten für Videos 
                    und 30-60 Sekunden für Bilder. Du kannst den Fortschritt in Echtzeit verfolgen.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Welche Formate werden unterstützt?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Für Videos: 16:9 (Landscape) und 9:16 (Portrait) in 720p oder 1080p, mit 4, 6 oder 8 Sekunden Dauer. 
                    Für Bilder: 1:1 (Square), 16:9 und 9:16. Perfekt für alle Social-Media-Plattformen.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Ist die Nutzung wirklich kostenlos?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Ja! Während der Beta-Phase ist die Nutzung komplett kostenlos. Keine Kreditkarte erforderlich, 
                    keine versteckten Kosten. Du kannst unbegrenzt Videos und Bilder erstellen.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Werden meine Daten sicher gespeichert?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Deine hochgeladenen Bilder werden nur für die Generierung verwendet und nicht dauerhaft gespeichert. 
                    Generierte Inhalte kannst du sofort herunterladen. Wir respektieren deine Privatsphäre und halten uns 
                    an die DSGVO-Richtlinien.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Kann ich die generierten Inhalte kommerziell nutzen?</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Ja! Alle generierten Inhalte gehören dir und können uneingeschränkt kommerziell genutzt werden. 
                    Es gibt keine Wasserzeichen oder Einschränkungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-32 sm:mt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 text-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border-2 border-indigo-500/30 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Jakob Kramer</h3>
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
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-violet-500/30 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <Image 
                    src="/devs/Niclas.png" 
                    alt="Niclas Hart"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Niclas Hart</h3>
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
                <h3 className="text-lg font-semibold text-white mb-1">Tobias Saur</h3>
                <p className="text-sm text-rose-400 mb-3">AI/ML Engineer</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Entwickelt und optimiert KI-Modelle. Experte für Prompt-Engineering und 
                  Generative AI Systeme.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 sm:mt-40 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1100">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
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
              <p className="text-sm text-zinc-500 mb-4">
                KI-gestützte Werbeerstellung für moderne Unternehmen. 
                Erstelle professionelle Videos und Bilder in Minuten.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Produkt</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link href="/create" className="hover:text-white transition-colors">App starten</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Preise</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-zinc-600">
                © 2025 adsgen.ai
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
