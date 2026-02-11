import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import DemoForm from '@/components/demo/DemoForm';

export const metadata: Metadata = {
  title: 'Live Demo | AI Voice Agent',
  description: 'Try our AI voice agent live. Get a demo call within 2 minutes and experience intelligent voice automation.',
};

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Experience Our AI Voice Agent
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and you'll receive a live demo call from
                our AI agent within 2 minutes. See the future of voice automation
                in action.
              </p>
            </div>

            {/* Demo Form */}
            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
