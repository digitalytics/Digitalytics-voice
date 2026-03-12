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
        icon: '🏠',
        title: 'Real Estate Investment Guidance',
        description:
            'Helps clients explore real estate investment opportunities in the Bay Area — identifying properties with strong returns and walking investors through their options with confidence.',
        features: [
            'Explore Bay Area investment opportunities',
            'Identify properties with strong rental yields',
            'Answer questions about neighborhoods & market trends',
            'Explain strategies for first-time investors',
            'Guide clients through the full investment process',
        ],
        accent: 'from-amber-500/10 to-yellow-500/5 border-amber-200',
        badge: 'bg-amber-100 text-amber-800',
        badgeLabel: 'Core Capability',
    },
    {
        icon: '💰',
        title: 'Financing & Process Support',
        description:
            'Explains available financing options and manages the investment process from initial inquiry all the way through to a successful deal — no question goes unanswered.',
        features: [
            'Outline financing and mortgage options',
            'Clarify down payment & loan requirements',
            'Walk through the purchase process step by step',
            'Answer due diligence and inspection questions',
            'Keep clients informed at every stage',
        ],
        accent: 'from-green-500/10 to-emerald-500/5 border-green-200',
        badge: 'bg-green-100 text-green-700',
        badgeLabel: 'Finance Support',
    },
    {
        icon: '📅',
        title: 'Meeting Booking with the Owner',
        description:
            'At the end of every qualifying call, the agent books a meeting between the prospective investor and the business owner — ensuring a warm, personal handoff every time.',
        features: [
            'Qualify interest and investment goals upfront',
            'Collect contact details for follow-up',
            'Schedule a meeting with the business owner',
            'Send confirmation details to the client',
            'Ensure a warm, seamless handoff',
        ],
        accent: 'from-blue-500/10 to-cyan-500/5 border-blue-200',
        badge: 'bg-blue-100 text-blue-700',
        badgeLabel: 'Lead Conversion',
    },
];

const steps = [
    {
        number: '01',
        title: 'Investor calls in',
        description:
            'The Real Estate AI agent answers every call within seconds — 24/7, including evenings and weekends when serious investors are doing their research.',
        icon: '📞',
    },
    {
        number: '02',
        title: 'Goals are understood',
        description:
            'The agent asks the right questions to understand the caller\'s investment goals, budget, timeline, and preferred Bay Area neighborhoods — naturally and conversationally.',
        icon: '🎯',
    },
    {
        number: '03',
        title: 'Guidance is delivered',
        description:
            'Based on the caller\'s needs, the agent walks them through relevant properties, financing options, market insights, and the full investment process — all in one call.',
        icon: '📋',
    },
    {
        number: '04',
        title: 'Meeting is booked',
        description:
            'Every qualified lead gets booked into a meeting with the business owner automatically. Confirmation is sent instantly via email and SMS.',
        icon: '⚡',
    },
];

const faqs = [
    {
        question: 'Can the agent handle investors who are just starting out?',
        answer:
            'Absolutely. The agent is designed to guide first-time investors through the basics — explaining terminology, outlining the process, and helping them understand what to look for in a Bay Area investment property — without overwhelming them.',
    },
    {
        question: 'What hours does the Real Estate agent operate?',
        answer:
            'The agent runs 24 hours a day, 7 days a week. Serious investors often research in the evenings or on weekends — the agent is always ready to answer their questions, no matter the time.',
    },
    {
        question: 'How does the agent qualify leads before booking a meeting?',
        answer:
            'The agent asks targeted questions about the caller\'s investment goals, budget range, timeline, and level of experience. Only callers who are genuinely interested and have the right profile are booked in for a meeting with the owner.',
    },
    {
        question: 'Can the agent discuss specific properties or neighbourhoods?',
        answer:
            'Yes. The agent is knowledgeable about Bay Area neighbourhoods, market trends, rental yields, and property types — giving callers the context they need to make informed investment decisions.',
    },
    {
        question: 'How quickly can this be set up for our real estate business?',
        answer:
            'The agent can be configured and deployed within a few days. The meeting booking flow is connected directly to your calendar, and confirmation emails and SMS are sent automatically to every qualified lead.',
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

export default function RealEstatePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">

                {/* ── HERO ────────────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#3b1a00] via-[#78350f] to-[#92400e] text-white py-24 md:py-32">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-yellow-300/10 blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: copy */}
                            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                    AI Real Estate Agent — Live 24/7
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                    Every Investor Query Answered.{' '}
                                    <span className="text-amber-300">Every Lead Captured.</span>
                                </h1>
                                <p className="text-xl text-amber-100 mb-8 leading-relaxed max-w-lg">
                                    From Bay Area investment guidance to financing questions and meeting booking —
                                    the Real Estate AI agent handles every inbound call automatically, so you
                                    never miss a serious investor.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/demo?agent=real-estate"
                                        className="inline-flex items-center gap-2 bg-white text-[#78350f] font-bold px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
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
                                        <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                                        <span className="text-sm font-medium text-amber-300">Real Estate Agent is active</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { time: '6 min ago', text: '🏠 Investment inquiry — Oakland duplex, $800K budget, meeting booked', color: 'bg-amber-400/20 border-amber-400/30' },
                                            { time: '21 min ago', text: '💰 Financing query — first-time investor, mortgage options explained', color: 'bg-green-400/20 border-green-400/30' },
                                            { time: '38 min ago', text: '📅 Meeting scheduled — San Jose condo portfolio, Thu 3pm', color: 'bg-blue-400/20 border-blue-400/30' },
                                            { time: '55 min ago', text: '🏠 Market trends answered — Fremont rental yields discussed', color: 'bg-amber-400/20 border-amber-400/30' },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + i * 0.12 }}
                                                className={`border rounded-xl px-4 py-3 ${item.color}`}
                                            >
                                                <p className="text-sm text-white font-medium">{item.text}</p>
                                                <p className="text-xs text-amber-200/70 mt-1">{item.time} · Logged ✓</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-amber-200/70">
                                        <span>Today's leads handled</span>
                                        <span className="text-white font-bold text-lg">24</span>
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
                                { stat: '48%', label: 'of real estate enquiries go unanswered outside of business hours', icon: '📵' },
                                { stat: '78%', label: 'of investors contact the first agent who responds — speed wins deals', icon: '⚡' },
                                { stat: '5 hrs', label: 'of agent time lost weekly answering the same qualifying questions manually', icon: '⏳' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-5xl font-bold text-[#78350f] mb-2">{item.stat}</div>
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
                            The Real Estate AI agent eliminates all three problems — automatically.
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
                                Three Things the Agent Handles{' '}
                                <span className="text-[#78350f]">Automatically</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every type of investor call is covered — from first-time buyers to
                                seasoned portfolio investors looking for their next deal.
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
                                                <CheckIcon className="w-5 h-5 text-[#78350f] flex-shrink-0 mt-0.5" />
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
                <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#3b1a00] to-[#78350f] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                            <p className="text-amber-200 text-lg max-w-2xl mx-auto">
                                From the first ring to a booked investor meeting — fully automatic.
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
                                            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-2xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-1">
                                                Step {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-amber-100 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Lead capture callout */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 bg-amber-500/20 border border-amber-400/40 rounded-2xl p-6 flex items-start gap-4"
                        >
                            <span className="text-3xl flex-shrink-0">🏆</span>
                            <div>
                                <p className="text-white font-bold text-lg mb-1">No lead ever falls through the cracks</p>
                                <p className="text-amber-100 text-sm leading-relaxed">
                                    Whether a caller rings at 9am or 11pm, the agent is there. Every qualified investor
                                    gets their questions answered and a meeting booked — automatically, with a confirmation
                                    sent to their phone and inbox before the call even ends.
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
                                Everything you need to know about the Real Estate AI agent.
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
                <section className="py-24 bg-gradient-to-br from-[#3b1a00] to-[#78350f] text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="text-6xl mb-6">🏠</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Hear the Real Estate Agent in Action
                            </h2>
                            <p className="text-xl text-amber-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Get a live demo call in the next 2 minutes. Experience investment guidance,
                                financing support, and automatic meeting booking — firsthand.
                            </p>
                            <Link
                                href="/demo?agent=real-estate"
                                className="inline-flex items-center gap-3 bg-white text-[#78350f] font-bold px-12 py-5 rounded-full text-lg hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:-translate-y-1"
                            >
                                🎙️ Try Real Estate Agent Live
                            </Link>
                            <p className="text-amber-300/70 text-sm mt-6">
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
