'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

// ─── Icon helpers ──────────────────────────────────────────────────────────────

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function ChevronDown({ open }: { open: boolean }) {
    return (
        <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
    {
        icon: '🌍',
        title: 'Tours & Attractions Information',
        description:
            'Provides instant answers about tours, local attractions, and ticket prices — helping travellers plan their trip with confidence and excitement, any time of day.',
        features: [
            'Share details on available tours & attractions',
            'Provide up-to-date ticket pricing',
            'Explain what\'s included in each tour package',
            'Answer questions about schedules & availability',
            'Available 24/7 for travellers in any time zone',
        ],
        accent: 'from-indigo-500/10 to-purple-500/5 border-indigo-200',
        badge: 'bg-indigo-100 text-indigo-700',
        badgeLabel: 'Core Capability',
    },
    {
        icon: '✈️',
        title: 'Booking & Reservations',
        description:
            'Assists callers with booking tours and making reservations through a friendly, natural conversation — no hold music, no forms, just instant confirmation.',
        features: [
            'Guide callers through available tour options',
            'Collect traveller details for reservations',
            'Confirm booking requirements & availability',
            'Process reservation requests seamlessly',
            'Send booking confirmation via email & SMS',
        ],
        accent: 'from-teal-500/10 to-cyan-500/5 border-teal-200',
        badge: 'bg-teal-100 text-teal-700',
        badgeLabel: 'Reservations',
    },
    {
        icon: '🎧',
        title: 'Complaint Handling',
        description:
            'Listens to and resolves customer complaints professionally, ensuring every traveller feels heard, valued, and supported — turning frustration into loyalty.',
        features: [
            'Handle complaints with empathy & professionalism',
            'Log and track complaint details automatically',
            'Offer solutions or escalate to the right team',
            'Follow up to confirm resolution',
            'Turn negative experiences into positive outcomes',
        ],
        accent: 'from-rose-500/10 to-pink-500/5 border-rose-200',
        badge: 'bg-rose-100 text-rose-700',
        badgeLabel: 'Customer Care',
    },
];

const steps = [
    {
        number: '01',
        title: 'Traveller calls in',
        description:
            'TourBot answers every call within seconds — 24/7, across every time zone. Whether it\'s 6am at the airport or midnight at the hotel, travellers always get an answer.',
        icon: '📞',
    },
    {
        number: '02',
        title: 'Intent is understood',
        description:
            'The agent listens to what the traveller needs — tour information, a booking, or a complaint — and routes them into the right conversational flow instantly.',
        icon: '🎯',
    },
    {
        number: '03',
        title: 'Information or action is delivered',
        description:
            'For enquiries, TourBot provides detailed, accurate answers. For bookings, it collects traveller details and confirms availability. For complaints, it listens and responds with care.',
        icon: '📋',
    },
    {
        number: '04',
        title: 'Confirmation is sent automatically',
        description:
            'Bookings are confirmed instantly. Complaints are logged and escalated if needed. Every caller receives an email or SMS summary so nothing falls through the cracks.',
        icon: '⚡',
    },
];

const faqs = [
    {
        question: 'Can TourBot handle callers from different countries and time zones?',
        answer:
            'Yes. TourBot operates 24/7 and is designed to assist international travellers regardless of when they call. It can handle a wide range of accents and conversational styles, making it ideal for global tourism businesses.',
    },
    {
        question: 'What happens if a complaint is too complex for the agent to resolve?',
        answer:
            'If a complaint requires human intervention, TourBot logs all the details and escalates to the appropriate team member — with a full summary of the conversation so the customer doesn\'t have to repeat themselves.',
    },
    {
        question: 'Can TourBot handle bookings for multiple tour types?',
        answer:
            'Absolutely. TourBot is configured with your full tour catalogue — including dates, pricing, group sizes, and availability — so it can handle bookings for any tour type your business offers.',
    },
    {
        question: 'Does TourBot send booking confirmations automatically?',
        answer:
            'Yes. Once a reservation is confirmed, TourBot sends an instant confirmation email and SMS to the traveller with all the booking details — no manual follow-up required from your team.',
    },
    {
        question: 'How quickly can TourBot be deployed for a new tourism business?',
        answer:
            'TourBot can typically be configured and live within a few days. It\'s built on modular automation, so your tour catalogue, pricing, and escalation flows can be set up quickly without custom development.',
    },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            >
                <span className="font-semibold text-gray-900 pr-4">{question}</span>
                <ChevronDown open={open} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TourBotPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">

                {/* ── HERO ────────────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#3730a3] text-white py-24 md:py-32">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-300/10 blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: copy */}
                            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                    AI Travel & Tour Agent — Live 24/7
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                    Every Traveller Helped.{' '}
                                    <span className="text-indigo-300">Every Booking Confirmed.</span>
                                </h1>
                                <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-lg">
                                    From tour information and booking to complaint handling — TourBot answers
                                    every call automatically so your guests always feel looked after,
                                    wherever they are in the world.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/demo?agent=tourbot"
                                        className="inline-flex items-center gap-2 bg-white text-[#312e81] font-bold px-8 py-4 rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                                    >
                                        🎙️ Try Live Demo
                                    </Link>
                                    <a
                                        href="#how-it-works"
                                        className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                                    >
                                        See How It Works ↓
                                    </a>
                                </div>
                            </motion.div>

                            {/* Right: live activity feed */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                className="hidden lg:block"
                            >
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
                                        <span className="text-sm font-medium text-indigo-300">TourBot is active</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { time: '3 min ago', text: '✈️ Booking confirmed — Paris walking tour, group of 4, Sat 10am', color: 'bg-indigo-400/20 border-indigo-400/30' },
                                            { time: '15 min ago', text: '🌍 Tour info provided — Colosseum tickets & schedule explained', color: 'bg-teal-400/20 border-teal-400/30' },
                                            { time: '29 min ago', text: '🎧 Complaint resolved — delayed tour, apology & rebooking offered', color: 'bg-rose-400/20 border-rose-400/30' },
                                            { time: '47 min ago', text: '✈️ Reservation made — Barcelona food tour, 2 travellers, Fri 6pm', color: 'bg-indigo-400/20 border-indigo-400/30' },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + i * 0.12 }}
                                                className={`border rounded-xl px-4 py-3 ${item.color}`}
                                            >
                                                <p className="text-sm text-white font-medium">{item.text}</p>
                                                <p className="text-xs text-indigo-200/70 mt-1">{item.time} · Logged ✓</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-indigo-200/70">
                                        <span>Today's travellers helped</span>
                                        <span className="text-white font-bold text-lg">38</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* ── PROBLEM STATS ───────────────────────────────────────────────── */}
                <section className="py-16 bg-gray-50 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {[
                                { stat: '52%', label: 'of tour booking enquiries go unanswered outside of office hours', icon: '📵' },
                                { stat: '4 in 5', label: 'travellers choose a competitor if they don\'t get an instant response', icon: '🏃' },
                                { stat: '6 hrs', label: 'of staff time spent weekly answering repetitive tour and booking questions', icon: '⏳' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-5xl font-bold text-[#312e81] mb-2">{item.stat}</div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center text-gray-500 text-sm mt-6"
                        >
                            TourBot eliminates all three problems — automatically.
                        </motion.p>
                    </div>
                </section>

                {/* ── WHAT THE AGENT HANDLES ──────────────────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Three Things TourBot Handles{' '}
                                <span className="text-[#312e81]">Automatically</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every type of traveller call is covered — from curious first-timers
                                to experienced globetrotters ready to book their next adventure.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={cardHover}
                                    className={`bg-gradient-to-br ${cap.accent} border rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="text-5xl">{cap.icon}</div>
                                        <div>
                                            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${cap.badge}`}>
                                                {cap.badgeLabel}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900">{cap.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                                    <ul className="space-y-2.5">
                                        {cap.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckIcon className="w-5 h-5 text-[#312e81] flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
                <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                            <p className="text-indigo-300 text-lg max-w-2xl mx-auto">
                                From the first ring to a confirmed booking — fully automatic.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-colors duration-300"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 rounded-2xl bg-indigo-400/20 border border-indigo-400/30 flex items-center justify-center text-2xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-1">
                                                Step {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-indigo-100 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Global coverage callout */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 bg-indigo-500/20 border border-indigo-400/40 rounded-2xl p-6 flex items-start gap-4"
                        >
                            <span className="text-3xl flex-shrink-0">🌐</span>
                            <div>
                                <p className="text-white font-bold text-lg mb-1">Built for global travellers, available around the clock</p>
                                <p className="text-indigo-100 text-sm leading-relaxed">
                                    Travellers book and ask questions at all hours — from airport lounges to hotel rooms,
                                    across every time zone. TourBot is always on, always responsive, and always ready to
                                    deliver a great first impression for your tourism business.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── FAQ ─────────────────────────────────────────────────────────── */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-8">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-14"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Everything you need to know about TourBot.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {faqs.map((faq, i) => (
                                <motion.div key={i} variants={fadeInUp}>
                                    <FAQItem question={faq.question} answer={faq.answer} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="text-6xl mb-6">✈️</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Hear TourBot in Action
                            </h2>
                            <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Get a live demo call in the next 2 minutes. Experience tour information,
                                booking confirmation, and complaint handling — firsthand.
                            </p>
                            <Link
                                href="/demo?agent=tourbot"
                                className="inline-flex items-center gap-3 bg-white text-[#312e81] font-bold px-12 py-5 rounded-full text-lg hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:-translate-y-1"
                            >
                                🌍 Try TourBot Live
                            </Link>
                            <p className="text-indigo-300/70 text-sm mt-6">
                                No sign-up required · Works instantly in your browser
                            </p>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
