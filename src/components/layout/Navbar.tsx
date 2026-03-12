'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { NAV_LINKS, AGENT_NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsAgentsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-2xl font-bold text-[#004D3E]">
              Digitalytics Voice
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#004D3E] transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* Agents Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAgentsOpen((v) => !v)}
                className={`flex items-center gap-2 font-semibold whitespace-nowrap px-4 py-1.5 rounded-full border-2 transition-all duration-200 ${
                  isAgentsOpen
                    ? 'bg-[#004D3E] text-white border-[#004D3E]'
                    : 'border-[#004D3E] text-[#004D3E] hover:bg-[#004D3E] hover:text-white'
                }`}
              >
                {/* Pulsing live dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isAgentsOpen ? 'bg-green-300' : 'bg-green-500'}`} />
                </span>
                Agents
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isAgentsOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isAgentsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  {AGENT_NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsAgentsOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-xl flex-shrink-0 mt-0.5">{link.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm group-hover:text-[#004D3E] transition-colors">
                          {link.label}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/demo"
              className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Try Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#004D3E] transition-colors font-medium px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Agents section */}
              <div className="px-2 pt-2 pb-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Agents</p>
                {AGENT_NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#004D3E] transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/demo"
                className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all shadow-lg text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
