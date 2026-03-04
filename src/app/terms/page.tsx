import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Terms of Service | Digitalytics Voice',
    description: 'Terms of Service for Digitalytics Voice AI agent platform and SMS communications.',
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                        <p className="text-green-200 text-lg">Effective Date: {EFFECTIVE_DATE}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 prose prose-gray max-w-none">

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
                            <p className="text-green-900 font-medium m-0">
                                Please read these Terms of Service carefully before using the Digitalytics Voice
                                platform or requesting a demo. By submitting our demo form or receiving
                                communications from us, you agree to be bound by these terms.
                            </p>
                        </div>

                        <Section title="1. About Digitalytics Voice">
                            <p>
                                Digitalytics Voice (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides
                                AI-powered voice agent services and related communications, including outbound
                                phone calls and SMS/text messages to demonstrate and deliver our services.
                                Our main website is{' '}
                                <a href={COMPANY.mainWebsite} className="text-green-700 underline">
                                    {COMPANY.mainWebsite}
                                </a>.
                            </p>
                        </Section>

                        <Section title="2. Demo Requests & Phone Communications">
                            <p>
                                When you submit our demo request form, you provide us your name, phone number,
                                and email address and expressly consent to:
                            </p>
                            <ul>
                                <li>
                                    <strong>Outbound demo calls:</strong> We or our AI voice agent may call the phone
                                    number you provided to deliver a live demonstration of our service.
                                </li>
                                <li>
                                    <strong>SMS/text messages:</strong> We may send you text messages related to your
                                    demo request, including scheduling confirmations, meeting details, follow-up
                                    information, and appointment reminders.
                                </li>
                            </ul>
                            <p>
                                By providing your phone number and submitting the form, you expressly consent to
                                receive these communications. Message and data rates may apply. Message frequency
                                varies based on your interactions.
                            </p>
                        </Section>

                        <Section title="3. SMS Communications & Opt-Out">
                            <p>
                                <strong>Message types:</strong> You may receive SMS messages including but not limited
                                to: demo confirmation messages, meeting or appointment details, scheduling reminders,
                                and follow-up communications about our services.
                            </p>
                            <p>
                                <strong>To opt out:</strong> You can stop receiving text messages at any time by
                                replying <strong>STOP</strong> to any SMS we send you. You may also reply{' '}
                                <strong>HELP</strong> for assistance. After opting out, you will receive a final
                                confirmation message and no further SMS messages will be sent unless you re-subscribe.
                            </p>
                            <p>
                                <strong>Supported carriers:</strong> Carriers are not liable for delayed or
                                undelivered messages.
                            </p>
                        </Section>

                        <Section title="4. Use of the Service">
                            <p>You agree to use our services only for lawful purposes. You may not:</p>
                            <ul>
                                <li>Provide false or inaccurate contact information.</li>
                                <li>Use the service to harass, abuse, or harm others.</li>
                                <li>Attempt to reverse-engineer or disrupt our systems.</li>
                                <li>Use the service for any unlawful commercial solicitation.</li>
                            </ul>
                        </Section>

                        <Section title="5. Intellectual Property">
                            <p>
                                All content, technology, and materials on our platform are owned by Digitalytics
                                Voice or its licensors and are protected by intellectual property laws. You may not
                                reproduce, distribute, or create derivative works without our express written consent.
                            </p>
                        </Section>

                        <Section title="6. Disclaimer of Warranties">
                            <p>
                                Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                                basis without warranties of any kind, either express or implied. We do not warrant
                                that the service will be uninterrupted, error-free, or free of viruses or other
                                harmful components.
                            </p>
                        </Section>

                        <Section title="7. Limitation of Liability">
                            <p>
                                To the fullest extent permitted by law, Digitalytics Voice shall not be liable for
                                any indirect, incidental, special, consequential, or punitive damages arising from
                                your use of the service, even if we have been advised of the possibility of such damages.
                            </p>
                        </Section>

                        <Section title="8. Privacy">
                            <p>
                                Your use of our services is also governed by our{' '}
                                <Link href="/privacy" className="text-green-700 underline font-medium">
                                    Privacy Policy
                                </Link>
                                , which is incorporated into these Terms by reference.
                            </p>
                        </Section>

                        <Section title="9. Changes to These Terms">
                            <p>
                                We may update these Terms from time to time. When we do, we will revise the
                                effective date at the top of this page. Your continued use of our services after
                                any changes constitutes your acceptance of the new terms.
                            </p>
                        </Section>

                        <Section title="10. Contact Us">
                            <p>
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-5 mt-2">
                                <p className="font-semibold text-gray-900 m-0">{COMPANY.name}</p>
                                <p className="text-gray-600 m-0">
                                    Email:{' '}
                                    <a href={`mailto:${COMPANY.email}`} className="text-green-700 underline">
                                        {COMPANY.email}
                                    </a>
                                </p>
                                <p className="text-gray-600 m-0">
                                    Website:{' '}
                                    <a href={COMPANY.mainWebsite} className="text-green-700 underline">
                                        {COMPANY.mainWebsite}
                                    </a>
                                </p>
                            </div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {title}
            </h2>
            <div className="text-gray-600 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
                {children}
            </div>
        </div>
    );
}
