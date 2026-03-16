'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Try Demo',
    description: 'Submit your phone number and receive a live call from our AI agent within 2 minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Experience Intelligence',
    description: 'Have a natural conversation and see how our AI handles scheduling, questions, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Customize & Deploy',
    description: 'Work with our team to customize the AI for your business and go live in days.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto"
          >
            Get started with AI voice agents in three simple steps
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center group"
                custom={index}
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full bg-green-50 border-2 border-green-200 group-hover:border-[#004D3E] group-hover:bg-green-100 transition-all duration-300" />
                  {/* Icon */}
                  <div className="relative z-10 text-[#004D3E]">
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#004D3E] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Big decorative number behind */}
                <div className="text-8xl font-black text-gray-100 leading-none -mb-4 select-none">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
