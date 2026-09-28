import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LuMessageSquareText, LuX } from 'react-icons/lu';
import WhatsAppButton from './WhatsAppButton.jsx';
import ChatWidget from './ChatWidget.jsx';

/** Bottom-right dual widget: WhatsApp launcher + admissions chat assistant. */
export default function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <ChatWidget open={open} onClose={close} />
      <div className="fixed bottom-5 right-3 z-[61] flex flex-col items-center gap-3 sm:right-6">
        <AnimatePresence>
          {!open && (
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}>
              <WhatsAppButton />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close admissions chat' : 'Open admissions chat assistant'}
          aria-expanded={open}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ivory bg-forest text-ivory shadow-lift ring-1 ring-forest/20"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'x' : 'chat'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <LuX className="h-6 w-6" /> : <LuMessageSquareText className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
          {!open && <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-clay" aria-hidden="true" />}
        </motion.button>
      </div>
    </>
  );
}
