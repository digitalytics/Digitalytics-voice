'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '@/lib/animations';

const features = [
  {
    icon: '💬',
    title: 'Natural Conversations',
    description: 'AI that understands context, handles interruptions, and speaks like a human.',
  },
  {
    icon: '🕐',
    title: '24/7 Availability',
    description: 'Never miss a call. Our AI agents work around the clock, every day.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integration',
    description: 'Connect with your existing calendar, CRM, and booking systems effortlessly.',
  },
  {
    icon: '📅',
    title: 'Appointment Scheduling',
    description: 'Automated booking, reminders, and rescheduling without human intervention.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
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
            Why Choose Our AI Voice Agents?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            Powerful features that transform how you handle customer interactions
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHover}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
