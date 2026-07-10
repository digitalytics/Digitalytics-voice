import type { Metadata } from 'next';
import DigitalyAyeDemoForm from './DigitalyAyeDemoForm';

export const metadata: Metadata = {
  title: 'IrtazaS-demo',
  description: 'Meet DigitalyAye’s original AI voice personalities and request a live call.',
};

export default function DigitalyAyeDemoPage() {
  return (
    <main className="digitalyaye-shell min-h-screen overflow-hidden text-white">
      <div className="digitalyaye-grid" aria-hidden="true" />
      <div className="digitalyaye-orb digitalyaye-orb-one" aria-hidden="true" />
      <div className="digitalyaye-orb digitalyaye-orb-two" aria-hidden="true" />

      <section className="relative z-10 px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl">
                <span className="digitalyaye-logo-mark">D</span>
              </div>
              <div>
                <p className="text-sm font-bold tracking-wide">DigitalyAye</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">Voice intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[11px] font-semibold text-emerald-200 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Live systems online
            </div>
          </header>

          <div className="mb-12 max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200 backdrop-blur-xl">
              The voice lab · No waiting room
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Don&apos;t just imagine it.
              <span className="digitalyaye-gradient-text block">Hear it happen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-indigo-100/65 sm:text-lg">
              Choose a specialist, leave your number, and experience a natural AI conversation built around a real business moment.
            </p>
          </div>

          <DigitalyAyeDemoForm />

          <footer className="mt-10 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 DigitalyAye. Conversational systems with character.</p>
            <p>Private · Secure · Human-guided</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
