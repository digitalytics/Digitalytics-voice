'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { COMPANY } from '@/lib/constants';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Volume-Based Pricing',
    description: 'Flexible pricing that scales with your business needs and call volume.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Custom Features',
    description: 'Tailored AI voice agents designed specifically for your industry and workflow.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
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
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-center text-gray-900 mb-12"
              >
                What&apos;s Included
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all group"
                  >
                    <div className="w-14 h-14 bg-[#004D3E]/10 rounded-xl flex items-center justify-center mb-5 mx-auto text-[#004D3E] group-hover:bg-[#004D3E] group-hover:text-white transition-all">{feature.icon}</div>
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
                  className="border-2 border-[#004D3E] text-[#004D3E] px-8 py-4 rounded-full hover:bg-[#004D3E] hover:text-white transition-all text-lg font-semibold text-center"
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
              viewport={{ once: true, amount: 0.1 }}
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
