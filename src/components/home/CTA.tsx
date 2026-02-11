'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, buttonHover } from '@/lib/animations';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#004D3E] to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience AI Voice Agents?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a live demo call in the next 2 minutes and see the future of
            customer engagement.
          </p>

          <motion.div whileHover={buttonHover}>
            <Link
              href="/demo"
              className="inline-block bg-white text-[#004D3E] px-12 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg font-bold"
            >
              Try Live Demo Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
