'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004D3E] via-[#005a47] to-[#003d31] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Radial glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-green-200 font-medium">Live AI Agents Available Now</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Voice Agents That{' '}
              <span className="gradient-text">Actually Work</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
              Experience intelligent conversations that feel human. Our AI voice
              agents handle appointments, customer service, and more — 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/demo"
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/30 hover:shadow-xl text-lg font-semibold text-center"
              >
                Try Live Demo
              </Link>
              <Link
                href="/use-cases"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/30 text-lg font-semibold text-center"
              >
                View Use Cases
              </Link>
            </div>

            {/* Social proof bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>4 Industry Agents</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 Always On</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Live demo in 2 min</span>
              </div>
            </div>
          </motion.div>

          {/* Right: decorative "live call" card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Simulated call card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">AI Agent — Real Estate</p>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    <span className="text-green-400 text-xs">Live call active</span>
                  </div>
                </div>
              </div>

              {/* Waveform bars */}
              <div className="flex items-end gap-1 h-10 mb-5">
                {[3, 6, 9, 5, 8, 4, 7, 10, 5, 3, 7, 8, 4, 6, 9, 5, 7, 4, 8, 6].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-green-400/60 rounded-full"
                    style={{
                      height: `${h * 10}%`,
                      animation: `pulse ${0.5 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Agent</p>
                  <p className="text-sm text-white">
                    &quot;I can help you explore investment properties in the Bay Area. What&apos;s your target budget?&quot;
                  </p>
                </div>
                <div className="bg-green-500/20 rounded-2xl p-3 ml-4">
                  <p className="text-xs text-gray-400 mb-1">Caller</p>
                  <p className="text-sm text-white">&quot;Around $800k. I&apos;m looking for strong rental yield.&quot;</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Agents Live', value: '4' },
                { label: 'Avg Response', value: '<1s' },
                { label: 'Uptime', value: '99.9%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
