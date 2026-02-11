'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animations';
import { formatPhoneNumber } from '@/lib/utils';

interface SuccessMessageProps {
  phoneNumber: string;
}

export default function SuccessMessage({ phoneNumber }: SuccessMessageProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="text-center py-12"
    >
      {/* Success Icon */}
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
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
        </div>
      </div>

      {/* Success Message */}
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Success!</h2>
      <p className="text-lg text-gray-600 mb-2">
        You will receive a call from our AI agent within 2 minutes at
      </p>
      <p className="text-2xl font-semibold text-[#004D3E] mb-8">
        {formatPhoneNumber(phoneNumber)}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/use-cases"
          className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-semibold"
        >
          Learn More About Use Cases
        </Link>
        <Link
          href="/"
          className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-200 transition-all font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
