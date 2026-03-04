import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Digitalytics Voice',
    description:
        'Terms and Conditions for Digitalytics Voice — AI voice agent demo program. Includes SMS message/data rates, opt-out instructions, and support contact.',
};

const EFFECTIVE_DATE = 'March 4, 2025';

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-16">
                {/* Hero */}
                <section className="py-16 bg-gradient-to-br from-[#004D3E] to-green-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms &amp; Conditions</h1>
                        <p className="text-green-200 text-lg">Effective Date: {EFFECTIVE_DATE}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
                            <p className="text-green-900 font-medium m-0">
                                Please read these Terms &amp; Conditions carefully. By submitting a demo request or
                                receiving communications from Digitalytics Voice, you agree to be bound by these terms.
                            </p>
                        </div>

                        {/* ── 1. Program Name & Description ── */}
                        <Section title="1. Program Name &amp; Description">
                            <p>
                                <strong>Program Name:</strong> Digitalytics Voice — AI Demo Call &amp; SMS Notification Program
                            </p>
                            <p>
                                <strong>Program Description:</strong> Digitalytics Voice operates AI-powered voice agents
                                for industries such as real estate, travel &amp; tours, and healthcare. When you submit our
                                demo request form on this website, you consent to receive:
                            </p>
                            <ul>
                                <li>
                                    <strong>An outbound demo phone call</strong> from our AI voice agent within approximately
                                    2 minutes of form submission, to demonstrate the capabilities of the agent you selected.
                                </li>
                                <li>
                                    <strong>Transactional SMS/text messages</strong> to the phone number you provided,
                                    including demo confirmations, meeting details, appointment scheduling information,
                                    and follow-up communications directly related to your demo request.
                                </li>
                            </ul>
                            <p>
                                Our main website is{' '}
                                <a href={COMPANY.mainWebsite} className="text-green-700 underline">
                                    {COMPANY.mainWebsite}
                                </a>.
                            </p>
                        </Section>

                        {/* ── 2. Message & Data Rates ── */}
                        <Section title="2. Message &amp; Data Rates">
                            {/* Highlighted callout for Twilio reviewers */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="font-semibold text-amber-900 m-0">
                                    Message and data rates may apply. Your mobile carrier may charge you for
                                    sending and receiving SMS messages depending on your plan.
                                </p>
                            </div>
                            <p className="mt-3">
                                Digitalytics Voice does not charge any additional fees for sending SMS messages.
                                Any charges are determined solely by your mobile carrier.
                            </p>
                        </Section>

                        {/* ── 3. Message Frequency ── */}
                        <Section title="3. Message Frequency">
                            <p>
                                Message frequency varies based on your interactions with us. Typically you will
                                receive <strong>1–3 SMS messages per demo request</strong> (e.g., a confirmation,
                                meeting details, and an optional follow-up). We will not send unsolicited
                                promotional messages.
                            </p>
                        </Section>

                        {/* ── 4. Opt-Out (STOP) & Help (HELP) ── */}
                        <Section title="4. Opt-Out &amp; Help Instructions">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                                <p className="m-0">
                                    <strong>To stop receiving text messages at any time,</strong> reply{' '}
                                    <strong>STOP</strong> to any SMS message you receive from us. After sending{' '}
                                    <strong>STOP</strong>, you will receive one final confirmation message and no
                                    further SMS messages will be sent to your number.
                                </p>
                                <p className="m-0">
                                    For help or more information, reply <strong>HELP</strong> to any SMS message.
                                    You can also contact us directly using the information in Section 5 below.
                                </p>
                            </div>
                            <p>
                                Opting out of SMS notifications does not affect your ability to receive the
                                outbound demo phone call you requested.
                            </p>
                        </Section>

                        {/* ── 5. Support Contact ── */}
                        <Section title="5. Support Contact Information">
                            <p>
                                If you have questions, need assistance, or want to opt out of all communications,
                                please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-5">
                                <p className="font-semibold text-gray-900 m-0">{COMPANY.name}</p>
                                <p className="text-gray-700 m-0">
                                    Email:{' '}
                                    <a href={`mailto:${COMPANY.email}`} className="text-green-700 underline">
                                        {COMPANY.email}
                                    </a>
                                </p>
                                <p className="text-gray-700 m-0">
                                    Website:{' '}
                                    <a href={COMPANY.mainWebsite} className="text-green-700 underline">
                                        {COMPANY.mainWebsite}
                                    </a>
                                </p>
                            </div>
                        </Section>

                        {/* ── 6. Consent & Eligibility ── */}
                        <Section title="6. Consent &amp; Eligibility">
                            <p>
                                By submitting our demo request form and providing your phone number, you confirm that:
                            </p>
                            <ul>
                                <li>You are the owner or authorized user of the phone number provided.</li>
                                <li>You are at least 18 years of age.</li>
                                <li>
                                    You expressly consent to receive automated or AI-generated phone calls and
                                    SMS messages from Digitalytics Voice at the number provided.
                                </li>
                            </ul>
                            <p>
                                Consent to receive SMS messages is not a condition of any purchase or service.
                            </p>
                        </Section>

                        {/* ── 7. Acceptable Use ── */}
                        <Section title="7. Acceptable Use">
                            <p>You agree to use our services only for lawful purposes. You may not:</p>
                            <ul>
                                <li>Provide false or inaccurate contact information.</li>
                                <li>Use the service to harass, abuse, or harm others.</li>
                                <li>Attempt to reverse-engineer or disrupt our systems.</li>
                            </ul>
                        </Section>

                        {/* ── 8. Disclaimer & Liability ── */}
                        <Section title="8. Disclaimer &amp; Limitation of Liability">
                            <p>
                                Our services are provided &ldquo;as is&rdquo; without warranties of any kind.
                                Carriers are not liable for delayed or undelivered messages. Digitalytics Voice
                                shall not be liable for any indirect or consequential damages arising from use of
                                this service.
                            </p>
                        </Section>

                        {/* ── 9. Privacy ── */}
                        <Section title="9. Privacy Policy">
                            <p>
                                Your use of our services is governed by our{' '}
                                <Link href="/privacy" className="text-green-700 underline font-medium">
                                    Privacy Policy
                                </Link>
                                , which describes how we collect, use, and protect your personal data. The Privacy
                                Policy is incorporated into these Terms by reference.
                            </p>
                        </Section>

                        {/* ── 10. Changes ── */}
                        <Section title="10. Changes to These Terms">
                            <p>
                                We may update these Terms from time to time. Changes take effect upon posting to
                                this page with a revised effective date. Continued use of our services constitutes
                                acceptance of the updated Terms.
                            </p>
                        </Section>

                    </div>
                </section>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2
                className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="text-gray-600 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
                {children}
            </div>
        </div>
    );
}
