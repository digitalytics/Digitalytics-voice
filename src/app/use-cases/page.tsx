'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Inline SVG icons (same as DemoForm.tsx)
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" />
      <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" />
      <path d="M3 12h18" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4v4a7 7 0 0014 0V4" />
      <path d="M12 15v2" />
      <circle cx="12" cy="19" r="2" />
      <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const AGENT_USE_CASES = [
  {
    agentId: 'real-estate',
    agentName: 'Real Estate Agent',
    agentTagline: 'Bay Area investment properties & expert guidance',
    iconKey: 'home',
    useCases: [
      {
        title: 'Real Estate Investment Guidance',
        description:
          'Helps clients explore real estate investment opportunities in the Bay Area — identifying properties with strong returns and walking investors through their options.',
        icon: '🏠',
        features: [
          'Explore Bay Area investment opportunities',
          'Identify properties with strong rental yields',
          'Answer questions about neighborhoods & market trends',
          'Explain investment strategies for first-time investors',
          'Guide clients through the full investment process',
        ],
        isPrimary: true,
      },
      {
        title: 'Financing & Process Support',
        description:
          'Explains available financing options and manages the investment process from initial inquiry all the way through to a successful deal.',
        icon: '💰',
        features: [
          'Outline financing and mortgage options',
          'Clarify down payment & loan requirements',
          'Walk through the purchase process step by step',
          'Answer due diligence and inspection questions',
          'Keep clients informed at every stage',
        ],
        isPrimary: false,
      },
      {
        title: 'Meeting Booking with the Owner',
        description:
          'At the end of the call, books a meeting between the prospective investor and the business owner to take the next step.',
        icon: '📅',
        features: [
          'Qualify interest and investment goals',
          'Collect contact details for follow-up',
          'Schedule a meeting with the business owner',
          'Send confirmation details to the client',
          'Ensure a warm, personal handoff',
        ],
        isPrimary: false,
      },
    ],
  },
  {
    agentId: 'tourbot',
    agentName: 'TourBot',
    agentTagline: 'Tours, bookings & travel support',
    iconKey: 'globe',
    useCases: [
      {
        title: 'Tours & Attractions Information',
        description:
          'Provides instant answers about tours, local attractions, and ticket prices — helping travellers plan their trip with confidence.',
        icon: '🌍',
        features: [
          'Share details on available tours & attractions',
          'Provide up-to-date ticket pricing',
          "Explain what's included in each tour",
          'Answer questions about schedules & availability',
          'Available 24/7 for travellers in any time zone',
        ],
        isPrimary: true,
      },
      {
        title: 'Booking & Reservations',
        description:
          'Assists callers with booking tours and making reservations through a friendly, natural conversation.',
        icon: '✈️',
        features: [
          'Guide callers through available tour options',
          'Collect traveller details for reservations',
          'Confirm booking requirements & availability',
          'Process reservation requests seamlessly',
          'Send booking confirmation details',
        ],
        isPrimary: false,
      },
      {
        title: 'Complaint Handling',
        description:
          'Listens to and resolves customer complaints professionally, ensuring every traveller feels heard and supported.',
        icon: '🎧',
        features: [
          'Handle complaints with empathy & professionalism',
          'Log and track complaint details',
          'Offer solutions or escalate to the right team',
          'Follow up to confirm resolution',
          'Turn negative experiences into positive outcomes',
        ],
        isPrimary: false,
      },
    ],
  },
  {
    agentId: 'medibook',
    agentName: 'MediBook',
    agentTagline: 'AI Medical Receptionist',
    iconKey: 'stethoscope',
    useCases: [
      {
        title: 'Complete Appointment Management',
        description:
          'Your 24/7 virtual medical receptionist that handles patient calls automatically — booking, checking, cancelling, and rescheduling appointments with instant confirmations.',
        icon: '🩺',
        features: [
          'Book appointments with the right doctor instantly',
          'Check doctor availability and open time slots',
          'Cancel appointments and free up slots immediately',
          'Reschedule by cancelling and rebooking seamlessly',
          'Send email and SMS confirmations automatically',
        ],
        isPrimary: true,
      },
    ],
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
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Voice Agents for Every Industry
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Our Real Estate Agent, TourBot, and MediBook each handle
                real-world customer conversations 24/7 — so your team never
                misses a lead, booking, or patient call.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Agent Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 space-y-20">
            {AGENT_USE_CASES.map((agent) => (
              <div key={agent.agentId}>
                {/* Agent Header Banner */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-100 to-gray-50 border-l-4 border-green-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 text-green-800 flex-shrink-0">
                      {agent.iconKey === 'home' ? (
                        <HomeIcon className="w-full h-full" />
                      ) : agent.iconKey === 'globe' ? (
                        <GlobeIcon className="w-full h-full" />
                      ) : (
                        <StethoscopeIcon className="w-full h-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg leading-tight">
                        {agent.agentName}
                      </p>
                      <p className="text-gray-600 text-sm">{agent.agentTagline}</p>
                    </div>
                  </div>
                  <Link
                    href="/demo"
                    className="inline-block bg-green-800 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md font-semibold text-sm whitespace-nowrap"
                  >
                    Try Live Demo →
                  </Link>
                </motion.div>

                {/* Use Case Cards */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {agent.useCases.filter((uc) => uc.isPrimary).map((useCase, index) => (
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
            ))}
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
