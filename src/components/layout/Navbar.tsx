'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, AGENT_NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  // Elevate navbar on scroll
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white/90 backdrop-blur-md border-b border-gray-200 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            {/* Waveform icon */}
            <div className="w-8 h-8 bg-[#004D3E] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a5f4a] transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h2" />
                <path d="M5 8v8" />
                <path d="M9 5v14" />
                <path d="M13 9v6" />
                <path d="M17 7v10" />
                <path d="M21 10v4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#004D3E]">
              Digitalytics <span className="text-green-600">Voice</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${isActive
                      ? 'text-[#004D3E] bg-green-50'
                      : 'text-gray-600 hover:text-[#004D3E] hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#004D3E] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Agents Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAgentsOpen((v) => !v)}
                className={`flex items-center gap-2 font-semibold whitespace-nowrap px-4 py-1.5 rounded-full border-2 transition-all duration-200 text-sm ${isAgentsOpen
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
              className="bg-[#004D3E] text-white px-5 py-2 rounded-full hover:bg-[#0a5f4a] transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm font-semibold ml-1"
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
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium px-3 py-2 rounded-lg transition-colors ${isActive
                        ? 'text-[#004D3E] bg-green-50'
                        : 'text-gray-600 hover:text-[#004D3E] hover:bg-gray-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Agents section */}
              <div className="px-2 pt-2 pb-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Agents</p>
                {AGENT_NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#004D3E] transition-colors font-medium py-2 px-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/demo"
                className="bg-[#004D3E] text-white px-6 py-2 rounded-full hover:bg-[#0a5f4a] transition-all shadow-lg text-center mt-2 font-semibold"
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
