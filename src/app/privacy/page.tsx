import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Privacy Policy | Digitalytics Voice',
    description:
        'Privacy Policy for Digitalytics Voice. Learn what data we collect, how it is used, and our commitment to never sharing your information with third parties for marketing.',
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
                                Digitalytics Voice is committed to protecting your privacy. This policy explains
                                exactly what personal data we collect, why we collect it, and how it is used.
                            </p>
                        </div>

                        {/* ── 1. Data We Collect ── */}
                        <Section title="1. Information We Collect">
                            <p>When you submit our demo request form, we collect the following personal information:</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-800 border-b border-gray-200">Data</th>
                                            <th className="text-left px-4 py-3 font-semibold text-gray-800 border-b border-gray-200">Why We Collect It</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-700">Full Name</td>
                                            <td className="px-4 py-3 text-gray-600">To personalize your demo call and communications</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 font-medium text-gray-700">Phone Number</td>
                                            <td className="px-4 py-3 text-gray-600">To place your AI demo call and send you SMS confirmations, meeting details, and appointment reminders</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-700">Email Address</td>
                                            <td className="px-4 py-3 text-gray-600">To send follow-up information related to your demo request</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                We may also collect non-personal technical data such as IP address, browser type,
                                and pages visited for site security and analytics purposes.
                            </p>
                        </Section>

                        {/* ── 2. How We Use Your Data ── */}
                        <Section title="2. How We Use Your Information">
                            <p>We use the personal data you provide strictly to:</p>
                            <ul>
                                <li>Place an outbound AI voice agent demo call to the phone number you provided.</li>
                                <li>
                                    Send transactional SMS/text messages related to your demo — including scheduling
                                    confirmations, meeting details, appointment reminders, and demo follow-ups.
                                </li>
                                <li>Respond to support requests or questions you send us.</li>
                                <li>Improve the reliability and quality of our services.</li>
                                <li>Comply with applicable legal obligations.</li>
                            </ul>
                            <p>
                                We do <strong>not</strong> use your personal data for automated decision-making or
                                profiling that produces legal or similarly significant effects.
                            </p>
                        </Section>

                        {/* ── 3. No Third-Party / Marketing Sharing ── */}
                        <Section title="3. No Sharing with Third Parties for Marketing">
                            {/* Explicit callout required by Twilio */}
                            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-5">
                                <p className="font-bold text-green-900 m-0 text-base">
                                    We do not sell, rent, share, or disclose your personal information —
                                    including your phone number — to any third party for marketing purposes.
                                    Your data will never be used for third-party advertising or promotional campaigns.
                                </p>
                            </div>
                            <p>
                                Your information is shared only in the following strictly limited circumstances:
                            </p>
                            <ul>
                                <li>
                                    <strong>Service delivery providers:</strong> Trusted vendors (such as Twilio for
                                    telephony and SMS delivery) who process data solely on our behalf and under strict
                                    data protection agreements. They are prohibited from using your data for any other purpose.
                                </li>
                                <li>
                                    <strong>Legal obligations:</strong> If required by law, regulation, court order,
                                    or governmental authority.
                                </li>
                                <li>
                                    <strong>Business transfers:</strong> In the event of a merger, acquisition, or asset
                                    sale, your data may be transferred — but will remain subject to this Privacy Policy.
                                </li>
                            </ul>
                        </Section>

                        {/* ── 4. SMS Communications ── */}
                        <Section title="4. SMS Communications &amp; Your Choices">
                            <p>
                                By submitting our demo form, you expressly consent to receive SMS messages from
                                Digitalytics Voice. These messages include:
                            </p>
                            <ul>
                                <li>Demo request confirmations</li>
                                <li>Meeting or appointment details</li>
                                <li>Appointment reminders</li>
                                <li>Follow-up messages related to your demo</li>
                            </ul>
                            <p>
                                <strong>Message frequency:</strong> Typically 1–3 messages per demo request.
                                Message frequency may vary.
                            </p>
                            <p>
                                <strong>Message &amp; data rates:</strong> Standard message and data rates may
                                apply based on your mobile carrier and plan.
                            </p>
                            <p>
                                <strong>To opt out:</strong> Reply <strong>STOP</strong> to any SMS message at
                                any time. Reply <strong>HELP</strong> for assistance or contact us at{' '}
                                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                            </p>
                        </Section>

                        {/* ── 5. Data Retention ── */}
                        <Section title="5. Data Retention">
                            <p>
                                We retain your personal information only for as long as necessary to fulfil the
                                purposes described in this policy, or as required by law. You may request deletion
                                of your data at any time by contacting us.
                            </p>
                        </Section>

                        {/* ── 6. Security ── */}
                        <Section title="6. Data Security">
                            <p>
                                We apply industry-standard technical and organisational safeguards to protect
                                your personal information from unauthorised access, alteration, disclosure, or
                                destruction. No internet transmission is completely secure; we cannot guarantee
                                absolute security.
                            </p>
                        </Section>

                        {/* ── 7. Your Rights ── */}
                        <Section title="7. Your Rights">
                            <p>Depending on your jurisdiction, you may have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you.</li>
                                <li>Correct inaccurate data.</li>
                                <li>Request deletion of your personal information.</li>
                                <li>Withdraw consent to receive communications at any time.</li>
                                <li>Lodge a complaint with a data protection authority.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, email us at{' '}
                                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                            </p>
                        </Section>

                        {/* ── 8. Children ── */}
                        <Section title="8. Children&rsquo;s Privacy">
                            <p>
                                Our services are not directed to anyone under 13 years of age. We do not knowingly
                                collect personal information from children.
                            </p>
                        </Section>

                        {/* ── 9. Policy Changes ── */}
                        <Section title="9. Changes to This Policy">
                            <p>
                                We may update this Privacy Policy periodically. Changes are effective when posted
                                to this page with a revised effective date. We encourage you to review this page
                                regularly.
                            </p>
                        </Section>

                        {/* ── 10. Contact ── */}
                        <Section title="10. Contact Us">
                            <p>
                                For any questions or concerns about this Privacy Policy, or to exercise your
                                data rights, please contact:
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
                            <p className="mt-4">
                                See also our{' '}
                                <Link href="/terms" className="text-green-700 underline font-medium">
                                    Terms &amp; Conditions
                                </Link>{' '}
                                for information about our SMS program and opt-out instructions.
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
            <div className="text-gray-600 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-green-700 [&_a]:underline">
                {children}
            </div>
        </div>
    );
}
