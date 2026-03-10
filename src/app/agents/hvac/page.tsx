'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

// ─── Icon helpers ─────────────────────────────────────────────────────────────

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
        icon: '🚨',
        title: 'Emergency Detection & Live Transfer',
        description:
            'When a caller reports a dangerous situation — gas leaks, carbon monoxide, or serious hazards — the agent immediately recognises the emergency and transfers the call live to an on-call technician. No delays, no voicemail.',
        features: [
            'Detects keywords: gas leak, CO alarm, burning smell, flooding',
            'Instantly transfers to on-call technician',
            'Caller stays connected throughout',
            'Logs emergency details in real time',
            'Never puts an emergency on hold',
        ],
        accent: 'from-red-500/10 to-orange-500/5 border-red-200',
        badge: 'bg-red-100 text-red-700',
        badgeLabel: 'Emergency Priority',
    },
    {
        icon: '🔧',
        title: 'Fault Diagnosis & Service Booking',
        description:
            'For non-emergency issues — no heat, no cooling, strange noises, or poor airflow — the agent walks the caller through a structured diagnostic conversation, collects all the details, and books a service visit.',
        features: [
            'Identifies fault type from natural description',
            'Collects equipment make, model & age',
            'Gets full address & access details',
            'Records preferred appointment window',
            'Sends confirmation via email & SMS',
        ],
        accent: 'from-blue-500/10 to-cyan-500/5 border-blue-200',
        badge: 'bg-blue-100 text-blue-700',
        badgeLabel: 'Service Scheduling',
    },
    {
        icon: '🏗️',
        title: 'Installation & Replacement Requests',
        description:
            'Callers looking to install a new system or replace ageing equipment get a dedicated flow. The agent gathers property details, existing equipment info, and preferred timing to prepare the team for an accurate quote visit.',
        features: [
            'Captures property type & square footage',
            'Records current system details (if replacing)',
            'Distinguishes new install vs. like-for-like swap',
            'Schedules a no-obligation survey visit',
            'Logs preferences and budget notes',
        ],
        accent: 'from-amber-500/10 to-yellow-500/5 border-amber-200',
        badge: 'bg-amber-100 text-amber-700',
        badgeLabel: 'New Installs',
    },
    {
        icon: '💬',
        title: 'General FAQ & Guidance',
        description:
            'For callers with general questions — maintenance schedules, filter replacement, energy efficiency tips, or pricing enquiries — the agent answers confidently without needing to loop in a human.',
        features: [
            'Answers common HVAC maintenance questions',
            'Explains service plans and warranties',
            'Provides pricing ballpark guidance',
            'Recommends filter change intervals',
            'Handles seasonal tune-up enquiries',
        ],
        accent: 'from-green-500/10 to-teal-500/5 border-green-200',
        badge: 'bg-green-100 text-green-700',
        badgeLabel: 'Self-Service FAQ',
    },
];

const steps = [
    {
        number: '01',
        title: 'Caller rings in',
        description:
            'The HVAC AI voice agent picks up every call within seconds — 24/7, all year round. No hold music, no missed calls after hours.',
        icon: '📞',
    },
    {
        number: '02',
        title: 'Intent is detected instantly',
        description:
            'The agent listens for emergency signals first. If safe, it routes the caller into the right flow — fault reporting, install request, or FAQ — through natural conversation.',
        icon: '🎯',
    },
    {
        number: '03',
        title: 'Details are collected',
        description:
            'The agent gathers all the information your team needs: problem description, system details, property address, and preferred appointment window — all in one call.',
        icon: '📋',
    },
    {
        number: '04',
        title: 'Action is taken automatically',
        description:
            'Emergencies are transferred live to your technician. Service requests are logged and confirmation emails & SMS are sent to the caller instantly.',
        icon: '⚡',
    },
];

const faqs = [
    {
        question: 'What happens if someone calls about a gas leak at 2am?',
        answer:
            'The agent immediately detects the emergency from the caller\'s words, stops the normal conversation flow, and transfers the call live to your on-call technician — within seconds. No voicemail, no delay.',
    },
    {
        question: 'What hours does the HVAC agent operate?',
        answer:
            'The agent runs 24 hours a day, 7 days a week, 365 days a year — including weekends, evenings, and public holidays. It never takes time off.',
    },
    {
        question: 'How does the agent handle callers who can\'t describe the problem clearly?',
        answer:
            'The agent is trained to ask guided questions — "Is the unit making any noise?", "Is it blowing cold air or no air at all?" — to help identify the fault even when the caller is unsure of the technical term.',
    },
    {
        question: 'Can it collect information for both residential and commercial jobs?',
        answer:
            'Yes. The agent adapts its questions based on property type — collecting relevant details whether it\'s a single home or a commercial building with multiple units.',
    },
    {
        question: 'How quickly can this be deployed for our HVAC business?',
        answer:
            'Because the agent is built on modular automation, it can typically be configured and live for a new HVAC business within a few days, including custom emergency transfer numbers and booking flows.',
    },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HVACPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">

                {/* ── HERO ──────────────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#1a2744] via-[#1e3a5f] to-[#1a4a6e] text-white py-24 md:py-32">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-300/10 blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: copy */}
                            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                    AI HVAC Receptionist — Live 24/7
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                    Your HVAC Business Answered.{' '}
                                    <span className="text-cyan-300">Every Call. Every Hour.</span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                                    From gas leak emergencies to routine service bookings and installation enquiries —
                                    the HVAC AI agent handles every inbound call automatically, so your team can
                                    focus on the job.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/demo?agent=hvac"
                                        className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
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
                                        <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                                        <span className="text-sm font-medium text-blue-300">HVAC Agent is active</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { time: '4 min ago', text: '🚨 GAS LEAK — call transferred live to technician', color: 'bg-red-400/25 border-red-400/40' },
                                            { time: '18 min ago', text: '🔧 Service booked — No heat, 42 Maple Ave, Tue 9am', color: 'bg-blue-400/20 border-blue-400/30' },
                                            { time: '35 min ago', text: '🏗️ Install survey scheduled — new 3-ton unit, Thu 2pm', color: 'bg-amber-400/20 border-amber-400/30' },
                                            { time: '52 min ago', text: '💬 FAQ handled — filter replacement interval explained', color: 'bg-green-400/20 border-green-400/30' },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + i * 0.12 }}
                                                className={`border rounded-xl px-4 py-3 ${item.color}`}
                                            >
                                                <p className="text-sm text-white font-medium">{item.text}</p>
                                                <p className="text-xs text-gray-400 mt-1">{item.time} · Logged ✓</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-400">
                                        <span>Today's calls handled</span>
                                        <span className="text-white font-bold text-lg">31</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* ── PROBLEM STATS ─────────────────────────────────────────────────── */}
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
                                { stat: '40%', label: 'of HVAC calls go unanswered after hours or during peak periods', icon: '📵' },
                                { stat: '67%', label: 'of customers will call a competitor if their call goes to voicemail', icon: '📞' },
                                { stat: '3.2 hrs', label: 'of dispatcher time lost daily handling repetitive inbound calls', icon: '⏳' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-5xl font-bold text-[#1e3a5f] mb-2">{item.stat}</div>
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
                            The HVAC AI agent eliminates all three problems — automatically.
                        </motion.p>
                    </div>
                </section>

                {/* ── WHAT THE AGENT HANDLES ────────────────────────────────────────── */}
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
                                Four Things the Agent Handles{' '}
                                <span className="text-[#1e3a5f]">Automatically</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every type of inbound HVAC call is covered — from safety emergencies
                                to routine bookings and general questions.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                                                <CheckIcon className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
                <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#1a2744] to-[#1e3a5f] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                How It Works
                            </h2>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                From the first ring to a booked job or a live transfer — fully automatic.
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
                                            <div className="w-14 h-14 rounded-2xl bg-blue-400/20 border border-blue-400/30 flex items-center justify-center text-2xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-1">
                                                Step {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Emergency callout */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 bg-red-500/20 border border-red-400/40 rounded-2xl p-6 flex items-start gap-4"
                        >
                            <span className="text-3xl flex-shrink-0">🚨</span>
                            <div>
                                <p className="text-white font-bold text-lg mb-1">Emergency calls are never automated</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The moment the agent detects any emergency keyword — gas leak, carbon monoxide, fire, flooding — it
                                    immediately exits the automated flow and transfers the caller live to your on-call technician.
                                    No chatbot responses, no voicemail. A real person picks up.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────────────────────────────── */}
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
                                Everything you need to know about the HVAC AI agent.
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

                {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-[#1a2744] to-[#1e3a5f] text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="text-6xl mb-6">🌡️</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Hear the HVAC Agent in Action
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Get a live demo call in the next 2 minutes. Experience every scenario —
                                emergency transfer, fault booking, and FAQ — firsthand.
                            </p>
                            <Link
                                href="/demo?agent=hvac"
                                className="inline-flex items-center gap-3 bg-white text-[#1e3a5f] font-bold px-12 py-5 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
                            >
                                🔧 Try HVAC Agent Live
                            </Link>
                            <p className="text-gray-400 text-sm mt-6">
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
