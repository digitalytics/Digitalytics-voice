'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { COMPANY } from '@/lib/constants';

const features = [
  {
    icon: '💰',
    title: 'Volume-Based Pricing',
    description: 'Flexible pricing that scales with your business needs and call volume.',
  },
  {
    icon: '⚙️',
    title: 'Custom Features',
    description: 'Tailored AI voice agents designed specifically for your industry and workflow.',
  },
  {
    icon: '🛟',
    title: 'Dedicated Support',
    description: 'Priority support and ongoing optimization to ensure peak performance.',
  },
];

const faqs = [
  {
    question: 'How is pricing calculated?',
    answer: 'Pricing is based on monthly call volume, feature requirements, and integration complexity. Contact us for a custom quote.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Try our live demo to experience the AI voice agent. Contact us to discuss a pilot program for your business.',
  },
  {
    question: 'What integrations are supported?',
    answer: 'We integrate with popular calendar systems, CRMs, booking platforms, and custom APIs. Our team handles all technical integration.',
  },
];

export default function PricingPage() {
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
                Custom Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Every business is unique. We create custom AI voice solutions
                tailored to your specific needs and budget.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-50 rounded-2xl p-8 text-center"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Link
                  href="/demo"
                  className="bg-green-800 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold text-center"
                >
                  Try Demo First
                </Link>
                <a
                  href={`mailto:${COMPANY.email}?subject=Pricing Inquiry`}
                  className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-200 transition-all text-lg font-semibold text-center"
                >
                  Contact for Pricing
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-center mb-12"
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
