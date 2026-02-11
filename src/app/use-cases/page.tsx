'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const useCases = [
  {
    title: 'Appointment Scheduling',
    description: 'Automated booking, confirmations, reminders, and rescheduling without human intervention.',
    icon: '📅',
    features: [
      'Automated appointment booking 24/7',
      'Smart calendar integration',
      'Automatic reminder calls',
      'Seamless rescheduling and cancellations',
      'Multi-timezone support',
    ],
    isPrimary: true,
  },
  {
    title: 'Customer Service',
    description: 'Handle common customer inquiries, FAQs, and support requests with natural conversation.',
    icon: '💬',
    features: [
      'Answer frequently asked questions',
      'Provide product information',
      'Handle basic troubleshooting',
      'Route complex issues to humans',
      'Available 24/7 for customers',
    ],
    isPrimary: false,
  },
  {
    title: 'Lead Qualification',
    description: 'Engage with leads, gather information, and qualify prospects before human follow-up.',
    icon: '🎯',
    features: [
      'Initial lead contact and engagement',
      'Qualify leads based on criteria',
      'Collect contact information',
      'Schedule follow-up appointments',
      'Integration with CRM systems',
    ],
    isPrimary: false,
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#004D3E] to-green-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Voice Agent Use Cases
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Discover how businesses are using AI voice agents to automate
                customer interactions and improve efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`rounded-3xl p-8 md:p-12 ${
                    useCase.isPrimary
                      ? 'bg-gradient-to-r from-[#004D3E] to-green-800 text-white shadow-2xl'
                      : 'bg-gray-50 shadow-lg'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-4">{useCase.icon}</div>
                      <h2
                        className={`text-3xl md:text-4xl font-bold mb-4 ${
                          useCase.isPrimary ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {useCase.title}
                      </h2>
                      <p
                        className={`text-lg mb-6 ${
                          useCase.isPrimary ? 'text-gray-200' : 'text-gray-600'
                        }`}
                      >
                        {useCase.description}
                      </p>
                      {useCase.isPrimary && (
                        <Link
                          href="/demo"
                          className="inline-block bg-white text-[#004D3E] px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg font-semibold"
                        >
                          Try Live Demo
                        </Link>
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-4 ${
                          useCase.isPrimary ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Key Features:
                      </h3>
                      <ul className="space-y-3">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className={`w-6 h-6 mr-3 flex-shrink-0 ${
                                useCase.isPrimary
                                  ? 'text-green-300'
                                  : 'text-green-600'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span
                              className={
                                useCase.isPrimary
                                  ? 'text-gray-200'
                                  : 'text-gray-600'
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to See It in Action?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience our AI voice agent live. Get a demo call in the next 2
                minutes.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-green-800 text-white px-12 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl text-lg font-bold"
              >
                Try Live Demo Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
