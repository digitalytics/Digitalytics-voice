import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002d24] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#004D3E] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h2" />
                  <path d="M5 8v8" />
                  <path d="M9 5v14" />
                  <path d="M13 9v6" />
                  <path d="M17 7v10" />
                  <path d="M21 10v4" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Digitalytics <span className="text-green-400">Voice</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs leading-relaxed">
              Experience the future of customer engagement with AI-powered voice agents that work 24/7.
            </p>
            <Link
              href={COMPANY.mainWebsite}
              className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
            >
              Visit Main Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
