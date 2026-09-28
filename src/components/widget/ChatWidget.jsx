import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuBot, LuSend, LuX, LuRotateCcw, LuArrowUpRight } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { images } from '../../assets/images.js';
import { botFallback, botTopics, school, whatsapp } from '../../data/schoolData.js';

let uid = 0;
const nextId = () => ++uid;

const welcome = {
  id: 0,
  from: 'bot',
  text: `Welcome to ${school.name}! 👋\nAdmissions are open for ${school.admissionYear} (Nursery to 7th Class). How would you like to continue?`,
};

function matchTopic(query) {
  const words = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  let best;
  let bestScore = 0;
  for (const t of botTopics) {
    const score = t.keywords.reduce((acc, k) => acc + (words.some((w) => w.startsWith(k)) ? 1 : 0), 0);
    if (score > bestScore) {
      best = t;
      bestScore = score;
    }
  }
  return best;
}

export default function ChatWidget({ open, onClose }) {
  const [messages, setMessages] = useState([welcome]);
  const [mode, setMode] = useState('welcome');
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    setTimeout(() => panelRef.current?.querySelector('button, input')?.focus(), 80);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const botSay = (msg, delay = 650) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { id: nextId(), from: 'bot', ...msg }]);
    }, delay);
  };

  const startBot = () => {
    setMode('bot');
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: '🤖 Bot Assistance' }]);
    botSay({ text: 'Happy to help! Pick a topic below or type your question.' });
  };

  const openWhatsApp = () => {
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: '💬 WhatsApp Chat' }]);
    window.open(whatsapp.withMessage('Hello Fazeelah Admissions, I would like to know more about admissions.'), '_blank', 'noopener,noreferrer');
    botSay({
      text: `Opening WhatsApp with our admissions counsellor (${whatsapp.label}). If it didn't open, use the button below.`,
      action: { label: 'Open WhatsApp', href: whatsapp.href },
    }, 400);
  };

  const ask = (topic, asText) => {
    setMessages((m) => [...m, { id: nextId(), from: 'user', text: asText ?? topic.label }]);
    botSay({ text: topic.answer, action: topic.action });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput('');
    const t = matchTopic(q);
    if (t) {
      ask(t, q);
    } else {
      setMessages((m) => [...m, { id: nextId(), from: 'user', text: q }]);
      botSay({ text: botFallback, action: { label: 'Chat on WhatsApp', href: whatsapp.href } });
    }
  };

  const reset = () => {
    setMessages([welcome]);
    setMode('welcome');
    setTyping(false);
    setInput('');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Fazeelah Admissions chat assistant"
          className="fixed bottom-[92px] right-3 z-[60] flex h-[min(600px,calc(100dvh-120px))] w-[calc(100vw-24px)] max-w-[390px] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-forest/10 bg-ivory shadow-[0_30px_80px_-20px_rgba(15,43,36,0.45)] sm:right-6"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 16 }}
          transition={{ type: 'spring', stiffness: 360, damping: 30 }}
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 overflow-hidden bg-forest px-5 py-4 text-white">
            <div className="absolute inset-0 dots-light opacity-50" aria-hidden="true" />
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory p-1">
              <img src={images.crest} alt="" className="h-full w-full object-contain" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-forest bg-whatsapp" aria-hidden="true" />
            </div>
            <div className="relative min-w-0 flex-1">
              <p className="truncate font-serif text-lg leading-tight">Fazeelah Admissions</p>
              <p className="text-xs text-white/60">Instant answers · {school.admissionYearShort}</p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-clay-light"
              aria-label="Restart conversation"
            >
              <LuRotateCcw className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-clay-light"
              aria-label="Close chat"
            >
              <LuX className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-5" aria-live="polite">
            {messages.map((m) => (
              <motion.div
                key={m.id}
                className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {m.from === 'bot' && (
                  <span className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-clay-light" aria-hidden="true">
                    <LuBot className="h-4 w-4" />
                  </span>
                )}
                <div
                  className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'rounded-br-md bg-forest text-white'
                      : 'rounded-tl-md border border-forest/[0.06] bg-white text-ink shadow-sm'
                  }`}
                >
                  <span className="sr-only">{m.from === 'bot' ? 'Assistant: ' : 'You: '}</span>
                  {m.text}
                  {m.action && (
                    <a
                      href={m.action.href}
                      target={m.action.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="mt-3 flex w-fit items-center gap-1.5 rounded-full bg-clay px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-clay-dark"
                    >
                      {m.action.label}
                      <LuArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {typing && (
              <div className="flex items-center gap-2" aria-label="Assistant is typing">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-clay-light" aria-hidden="true">
                  <LuBot className="h-4 w-4" />
                </span>
                <span className="flex gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-muted"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </span>
              </div>
            )}

            {/* Quick replies */}
            {!typing && mode === 'welcome' && (
              <div className="flex flex-wrap gap-2 pl-9 pt-1">
                <button
                  type="button"
                  onClick={startBot}
                  className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-clay hover:bg-clay/10"
                >
                  🤖 Bot Assistance
                </button>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> WhatsApp Chat
                </button>
              </div>
            )}
            {!typing && mode === 'bot' && (
              <div className="flex flex-wrap gap-2 pl-9 pt-1" role="group" aria-label="Suggested topics">
                {botTopics.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => ask(t)}
                    className="rounded-full border border-clay/60 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-clay/15"
                  >
                    {t.label}
                  </button>
                ))}
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-whatsapp px-3.5 py-1.5 text-xs font-semibold text-white hover:brightness-110"
                >
                  <FaWhatsapp className="h-3.5 w-3.5" aria-hidden="true" /> Talk to a counsellor
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-forest/10 bg-white px-3 py-3">
            <label htmlFor="chat-input" className="sr-only">
              Type your question
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => mode === 'welcome' && setMode('bot')}
              placeholder="Ask about admissions, hostel, bus…"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-forest/10 bg-ivory px-4 py-2.5 text-base text-ink placeholder:text-ink-soft/80 focus:border-clay focus:outline-none sm:text-sm"
            />
            <button
              type="submit"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-ivory transition-colors hover:bg-forest-700 disabled:opacity-50"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <LuSend className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
