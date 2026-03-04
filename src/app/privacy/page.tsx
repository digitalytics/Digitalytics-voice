import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Privacy Policy | Digitalytics Voice',
    description: 'Privacy Policy for Digitalytics Voice AI agent platform and SMS communications.',
};

const EFFECTIVE_DATE = 'March 4, 2025';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-16">
                {/* Hero */}
                <section className="py-16 bg-gradient-to-br from-[#004D3E] to-green-800 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-green-200 text-lg">Effective Date: {EFFECTIVE_DATE}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
                            <p className="text-green-900 font-medium m-0">
                                Your privacy is important to us. This Privacy Policy explains how
                                Digitalytics Voice collects, uses, and protects your personal information when
                                you use our platform or interact with our communications, including SMS messages.
                            </p>
                        </div>

                        <Section title="1. Information We Collect">
                            <p>When you submit our demo request form, we collect:</p>
                            <ul>
                                <li><strong>Name</strong> — to personalize your experience and communications.</li>
                                <li>
                                    <strong>Phone Number</strong> — to deliver your demo call and send relevant SMS
                                    communications such as meeting details, confirmations, and reminders.
                                </li>
                                <li>
                                    <strong>Email Address</strong> — to send follow-up information about our services.
                                </li>
                            </ul>
                            <p>
                                We may also automatically collect technical data such as IP address, browser type,
                                and pages visited for analytics and security purposes.
                            </p>
                        </Section>

                        <Section title="2. How We Use Your Information">
                            <p>We use the information you provide to:</p>
                            <ul>
                                <li>Deliver your requested AI voice agent demo call.</li>
                                <li>
                                    Send SMS/text messages including demo scheduling confirmations, meeting details,
                                    appointment reminders, and follow-up information about our services.
                                </li>
                                <li>Respond to your questions and support requests.</li>
                                <li>Improve our services and user experience.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                        </Section>

                        <Section title="3. SMS Communications">
                            <p>
                                By submitting our demo form, you expressly consent to receive text messages (SMS)
                                from Digitalytics Voice. These messages may include:
                            </p>
                            <ul>
                                <li>Demo request confirmations</li>
                                <li>Meeting or appointment details and scheduling information</li>
                                <li>Appointment reminders</li>
                                <li>Follow-up messages about our services</li>
                            </ul>
                            <p>
                                <strong>Message frequency:</strong> Message frequency varies based on your
                                interactions with us.
                            </p>
                            <p>
                                <strong>Message &amp; data rates:</strong> Message and data rates may apply depending
                                on your mobile carrier and plan.
                            </p>
                            <p>
                                <strong>Opt-out:</strong> You can opt out of SMS communications at any time by
                                replying <strong>STOP</strong> to any message we send. You may reply{' '}
                                <strong>HELP</strong> for assistance. After opting out, you will receive a
                                final confirmation and no further marketing SMS messages will be sent.
                            </p>
                            <p>
                                <strong>No sharing for marketing:</strong> We do not share your phone number or
                                other personal information with third parties for their own marketing purposes.
                            </p>
                        </Section>

                        <Section title="4. Sharing Your Information">
                            <p>
                                We do not sell, rent, or trade your personal information to third parties.
                                We may share your data only in the following limited circumstances:
                            </p>
                            <ul>
                                <li>
                                    <strong>Service providers:</strong> Trusted third-party vendors (such as
                                    telephony and SMS providers like Twilio) who assist us in operating our
                                    platform and delivering communications. These providers are contractually
                                    obligated to protect your data.
                                </li>
                                <li>
                                    <strong>Legal requirements:</strong> If required by law, court order, or
                                    governmental authority.
                                </li>
                                <li>
                                    <strong>Business transfers:</strong> In the event of a merger, acquisition,
                                    or sale of all or part of our assets.
                                </li>
                            </ul>
                        </Section>

                        <Section title="5. Data Retention">
                            <p>
                                We retain your personal information for as long as necessary to provide our
                                services and fulfill the purposes outlined in this policy, or as required by law.
                                You may request deletion of your data at any time by contacting us.
                            </p>
                        </Section>

                        <Section title="6. Data Security">
                            <p>
                                We implement industry-standard technical and organizational measures to protect
                                your personal information from unauthorized access, disclosure, alteration, or
                                destruction. However, no method of transmission over the internet or electronic
                                storage is 100% secure.
                            </p>
                        </Section>

                        <Section title="7. Your Rights">
                            <p>Depending on your location, you may have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you.</li>
                                <li>Request correction of inaccurate data.</li>
                                <li>Request deletion of your personal information.</li>
                                <li>Withdraw consent to receive communications at any time.</li>
                                <li>Lodge a complaint with a data protection authority.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at{' '}
                                <a href={`mailto:${COMPANY.email}`} className="text-green-700 underline">
                                    {COMPANY.email}
                                </a>.
                            </p>
                        </Section>

                        <Section title="8. Cookies & Analytics">
                            <p>
                                Our website may use cookies and similar tracking technologies to enhance your
                                browsing experience and analyze site traffic. You can control cookie settings
                                through your browser preferences.
                            </p>
                        </Section>

                        <Section title="9. Children's Privacy">
                            <p>
                                Our services are not directed to individuals under the age of 13. We do not
                                knowingly collect personal information from children. If you believe a child has
                                provided us with personal information, please contact us immediately.
                            </p>
                        </Section>

                        <Section title="10. Changes to This Privacy Policy">
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our
                                practices or legal requirements. We will notify you of significant changes by
                                updating the effective date at the top of this page. We encourage you to review
                                this policy periodically.
                            </p>
                        </Section>

                        <Section title="11. Contact Us">
                            <p>
                                If you have any questions or concerns about this Privacy Policy or how we handle
                                your data, please reach out to us:
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
                            <p className="mt-4">
                                You can also review our{' '}
                                <Link href="/terms" className="text-green-700 underline font-medium">
                                    Terms of Service
                                </Link>{' '}
                                for more information about how we operate.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {title}
            </h2>
            <div className="text-gray-600 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-green-700 [&_a]:underline">
                {children}
            </div>
        </div>
    );
}
