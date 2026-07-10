import type { Metadata } from 'next';
import DigitalyAyeDemoForm from './DigitalyAyeDemoForm';

export const metadata: Metadata = {
  title: 'DigitalyAye Demo Agents',
  description: 'Try the available AI voice demo agents from one standalone page.',
};

export default function DigitalyAyeDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <section className="px-4 py-10 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-green-800">
              by DigitalyAye
            </p>
            <h1 className="text-4xl font-bold text-gray-950 sm:text-5xl">
              Voice Agent Demo Center
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Pick any available agent, enter your details, and receive a live
              demo call using the same automation flow as the production demo.
            </p>
          </div>

          <DigitalyAyeDemoForm />
        </div>
      </section>
    </main>
  );
}
