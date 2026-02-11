'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Try Demo',
    description: 'Submit your phone number and receive a live call from our AI agent within 2 minutes.',
  },
  {
    number: '02',
    title: 'Experience Intelligence',
    description: 'Have a natural conversation and see how our AI handles scheduling, questions, and more.',
  },
  {
    number: '03',
    title: 'Customize & Deploy',
    description: 'Work with our team to customize the AI for your business and go live in days.',
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
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            Get started with AI voice agents in three simple steps
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
                custom={index}
              >
                <div className="text-6xl font-bold text-green-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
