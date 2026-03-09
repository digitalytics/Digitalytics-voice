'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

// ─── Icon helpers ────────────────────────────────────────────────────────────

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

// ─── Data ────────────────────────────────────────────────────────────────────

const capabilities = [
    {
        icon: '📅',
        title: 'Appointment Scheduling',
        description:
            'MediBook collects patient details in natural conversation and books the right appointment instantly — no forms, no hold music.',
        features: [
            'Checks doctor availability in real time',
            'Collects patient name, DOB & reason for visit',
            'Books the appointment and logs it in Airtable',
            'Sends instant email & SMS confirmation',
            'Handles multiple appointment types',
        ],
    },
    {
        icon: '🔄',
        title: 'Rescheduling',
        description:
            'When a patient needs to change their appointment, MediBook handles it end-to-end — cancelling the old slot and booking a new one seamlessly.',
        features: [
            'Verifies patient identity before changes',
            'Cancels existing booking automatically',
            'Finds the next available slot',
            'Sends updated confirmation via email & SMS',
            'Updates Airtable records in real time',
        ],
    },
    {
        icon: '💊',
        title: 'Prescription Refill Requests',
        description:
            'Patients can request prescription refills over the phone. MediBook collects all the details and logs the request for the clinic to action.',
        features: [
            'Collects medication name & dosage info',
            'Verifies prescribing doctor details',
            'Logs request directly into Airtable',
            'Notifies the clinic team immediately',
            'Gives patient an estimated timeline',
        ],
    },
];

const steps = [
    {
        number: '01',
        title: 'Patient calls in',
        description:
            'MediBook answers every inbound call within seconds — 24 hours a day, 7 days a week. No hold music, no voicemail.',
        icon: '📞',
    },
    {
        number: '02',
        title: 'Natural AI conversation',
        description:
            "MediBook's AI voice engine speaks like a real receptionist — understanding patient intent and collecting all required details through natural dialogue.",
        icon: '🗣️',
    },

    number: '03',
    title: 'Everything is actioned automatically',
    description:
    'n8n automation instantly updates Airtable records, sends a confirmation email via Gmail, and fires an SMS via Twilio — all in real time.',
    icon: '⚡',
    },
{
    number: '04',
        title: 'Clinic gets a full summary',
            description:
    'Staff receive a clean summary of every interaction — appointment details, patient info, and any notes — with zero manual effort required.',
        icon: '📋',
    },
];


const faqs = [
    {
        question: 'What hours does MediBook operate?',
        answer:
            'MediBook runs 24/7, 365 days a year — including evenings, weekends, and public holidays. It never takes a day off.',
    },
    {
        question: 'Does it integrate with our existing patient management system?',
        answer:
            'The current demo uses Airtable as the data store. The n8n automation backbone makes it straightforward to connect to other systems — EMRs, Google Calendar, or custom databases.',
    },
    {
        question: 'How natural does MediBook actually sound?',
        answer:
            'MediBook uses ElevenLabs voices, which are trained to sound indistinguishable from a real human receptionist — handling interruptions, pauses, and natural speech patterns with ease. You can try it live on this page.',
    },
    {
        question: 'What happens if a patient has a complex or unusual request?',
        answer:
            'MediBook is designed to handle the three core use cases. For anything outside that scope it politely acknowledges it cannot help and offers to connect the patient with a staff member.',
    },
    {
        question: 'How quickly can MediBook be deployed for our clinic?',
        answer:
            'Because MediBook is built on modular automation, it can typically be configured and deployed for a new clinic within a few days, depending on integration requirements.',
    },
];

// ─── FAQ Accordion item ───────────────────────────────────────────────────────

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

export default function MediBookPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">

                {/* ── HERO ─────────────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#003D30] via-[#004D3E] to-green-800 text-white py-24 md:py-32">
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-300/10 blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: copy */}
                            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    AI Medical Receptionist — Live 24/7
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                                    Your Clinic's AI Receptionist.{' '}
                                    <span className="text-green-300">Zero Hold Music.</span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                                    MediBook handles every inbound patient call — scheduling, rescheduling, and
                                    prescription refill requests — automatically, 24/7, with instant confirmations.
                                    No staff required.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/demo?agent=medibook"
                                        className="inline-flex items-center gap-2 bg-white text-[#004D3E] font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
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

                            {/* Right: animated call activity card */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                className="hidden lg:block"
                            >
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-sm font-medium text-green-300">MediBook is active</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { time: '2 min ago', text: '📅 Appointment booked — John D., Dr. Patel, Mon 10am', color: 'bg-green-400/20 border-green-400/30' },
                                            { time: '14 min ago', text: '🔄 Rescheduled — Sarah M. moved to Wed 2pm', color: 'bg-blue-400/20 border-blue-400/30' },
                                            { time: '31 min ago', text: '💊 Refill request logged — Mike R., Metformin 500mg', color: 'bg-purple-400/20 border-purple-400/30' },
                                            { time: '1 hr ago', text: '📅 Appointment booked — Lisa K., Dr. Soham, Tue 9am', color: 'bg-green-400/20 border-green-400/30' },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + i * 0.12 }}
                                                className={`border rounded-xl px-4 py-3 ${item.color}`}
                                            >
                                                <p className="text-sm text-white font-medium">{item.text}</p>
                                                <p className="text-xs text-gray-400 mt-1">{item.time} · Email + SMS sent ✓</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-400">
                                        <span>Today's calls handled</span>
                                        <span className="text-white font-bold text-lg">24</span>
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
                                { stat: '35%', label: 'of clinic calls go unanswered during peak hours', icon: '📵' },
                                { stat: '62%', label: 'of patients call outside regular clinic hours', icon: '🌙' },
                                { stat: '2.5 hrs', label: 'of staff time lost daily to manual scheduling tasks', icon: '⏳' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
                                >
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-5xl font-bold text-[#004D3E] mb-2">{item.stat}</div>
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
                            MediBook eliminates all three problems — automatically.
                        </motion.p>
                    </div>
                </section>

                {/* ── WHAT MEDIBOOK DOES ────────────────────────────────────────────── */}
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
                                Three Things MediBook Does{' '}
                                <span className="text-[#004D3E]">Perfectly</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Built specifically for medical clinics — every conversation is purposeful,
                                professional, and fully automated.
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
                                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="text-5xl mb-5">{cap.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{cap.description}</p>
                                    <ul className="space-y-2.5">
                                        {cap.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <CheckIcon className="w-5 h-5 text-[#004D3E] flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
                <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#003D30] to-[#004D3E] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                How MediBook Works
                            </h2>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                From patient call to confirmed appointment — fully automated in seconds.
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
                                            <div className="w-14 h-14 rounded-2xl bg-green-400/20 border border-green-400/30 flex items-center justify-center text-2xl">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-green-400 tracking-widest uppercase mb-1">
                                                Step {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────────────── */}
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
                                Everything you need to know about MediBook.
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

                {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
                <section className="py-24 bg-gradient-to-br from-[#003D30] to-green-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="text-6xl mb-6">🎙️</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Hear MediBook in Action
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Get a live demo call in the next 2 minutes. Experience exactly what your
                                patients will hear when they call your clinic.
                            </p>
                            <Link
                                href="/demo?agent=medibook"
                                className="inline-flex items-center gap-3 bg-white text-[#004D3E] font-bold px-12 py-5 rounded-full text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
                            >
                                🩺 Try MediBook Live
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
