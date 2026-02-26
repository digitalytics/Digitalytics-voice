import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
            <p className="text-gray-400 mb-4">
              Experience the future of customer engagement with AI-powered voice agents.
            </p>
            <Link
              href={COMPANY.mainWebsite}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Visit Main Website →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
