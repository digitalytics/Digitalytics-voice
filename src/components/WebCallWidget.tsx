'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHover, buttonTap } from '@/lib/animations';

type CallState = 'idle' | 'connecting' | 'active' | 'ended';
type TalkState = 'listening' | 'talking';

export default function WebCallWidget() {
  const pathname = usePathname();
  const [callState, setCallState] = useState<CallState>('idle');
  const [talkState, setTalkState] = useState<TalkState>('listening');
  const [showTooltip, setShowTooltip] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clientRef = useRef<any>(null);

  useEffect(() => {
    if (pathname === '/digitalyaye-demo') return;

    let RetellWebClient: new () => {
      startCall: (opts: { accessToken: string }) => Promise<void>;
      stopCall: () => void;
      on: (event: string, cb: () => void) => void;
    };

    import('retell-client-js-sdk').then((mod) => {
      RetellWebClient = mod.RetellWebClient;
      const client = new RetellWebClient();
      clientRef.current = client;

      client.on('call_started', () => setCallState('active'));
      client.on('call_ended', () => {
        setCallState('ended');
        setTimeout(() => setCallState('idle'), 2000);
      });
      client.on('agent_start_talking', () => setTalkState('talking'));
      client.on('agent_stop_talking', () => setTalkState('listening'));
      client.on('error', () => {
        setCallState('ended');
        setTimeout(() => setCallState('idle'), 2000);
      });
    });

    return () => {
      clientRef.current?.stopCall();
    };
  }, [pathname]);

  if (pathname === '/digitalyaye-demo') {
    return null;
  }

  async function startCall() {
    setShowTooltip(false);
    setCallState('connecting');
    try {
      // Request mic permission synchronously within the user gesture —
      // must happen before any fetch, otherwise the browser drops the gesture context.
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop()); // release; SDK will re-acquire

      const res = await fetch('/api/create-web-call', { method: 'POST' });
      const data = await res.json();
      if (!data.access_token) throw new Error('No access token');
      await clientRef.current?.startCall({ accessToken: data.access_token });
    } catch {
      setCallState('ended');
      setTimeout(() => setCallState('idle'), 2000);
    }
  }

  function endCall() {
    clientRef.current?.stopCall();
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        {callState === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="relative flex flex-col items-center"
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="absolute bottom-full mb-3 whitespace-nowrap bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none"
                >
                  Ask us anything — speak with our AI
                  {/* Arrow */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse ring behind button */}
            <span className="absolute inset-0 rounded-full bg-green-700 opacity-30 animate-ping" />

            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={startCall}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              className="relative flex items-center justify-center w-14 h-14 bg-green-800 text-white rounded-full shadow-xl hover:bg-green-700 transition-colors"
              aria-label="Ask us anything — speak with our AI"
            >
              {/* Mic icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {callState === 'connecting' && (
          <motion.div
            key="connecting"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="flex items-center gap-2 bg-green-800 text-white px-5 py-3 rounded-full shadow-xl"
          >
            <svg className="w-5 h-5 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm font-medium">Connecting...</span>
          </motion.div>
        )}

        {callState === 'active' && (
          <motion.div
            key="active"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="flex items-center gap-3 bg-white text-gray-800 pl-4 pr-2 py-2 rounded-full shadow-xl border border-gray-100"
          >
            {talkState === 'talking' ? (
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"
              />
            ) : (
              <span className="w-3 h-3 rounded-full bg-green-600 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">
              {talkState === 'talking' ? 'Agent is speaking...' : 'Listening...'}
            </span>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={endCall}
              className="flex items-center gap-1.5 bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-red-500 transition-colors ml-1"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              End
            </motion.button>
          </motion.div>
        )}

        {callState === 'ended' && (
          <motion.div
            key="ended"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-full shadow-xl"
          >
            <span className="text-sm font-medium">Call ended</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
