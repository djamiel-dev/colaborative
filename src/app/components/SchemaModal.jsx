"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const TRIGGER = "#gratis-schema";

const fieldClass =
  "w-full border-b border-[#161616]/30 bg-transparent py-2 text-base outline-none focus:border-[var(--teal)]";

// Opens for every link with href="#gratis-schema" (menu, footer, mobile menu).
export default function SchemaModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const firstField = useRef(null);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.(`a[href="${TRIGGER}"]`);
      if (!link) return;
      event.preventDefault();
      setSent(false);
      setOpen(true);
    };

    document.addEventListener("click", onClick);
    if (window.location.hash === TRIGGER) setOpen(true);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const focus = setTimeout(() => firstField.current?.focus(), 50);

    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(focus);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="schema-modal-title"
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto border-t-4 border-[var(--teal)] bg-[var(--light-gray)] px-6 pt-10 pb-8 text-[var(--dark)] shadow-2xl md:max-w-none md:w-[34vw] md:px-[2.6vw] md:pt-[3vw] md:pb-[2.6vw]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Sluit"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center transition hover:text-[var(--teal)] md:top-[0.8vw] md:right-[0.8vw] md:h-[2.4vw] md:w-[2.4vw]"
            >
              <span className="relative block h-4 w-4 md:h-[1vw] md:w-[1vw]">
                <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>

            <h2
              id="schema-modal-title"
              className="pb-3 text-[1.9rem] font-black leading-[1.05] md:pb-[0.8vw] md:text-[2.6vw]"
            >
              GRATIS SCHEMA
            </h2>

            {sent ? (
              <div role="status">
                <p className="pb-2 text-[1.05rem] font-bold leading-7 md:text-[1.2vw] md:leading-[1.8vw]">
                  Het schema is onderweg!
                </p>
                <p className="pb-8 text-[0.9375rem] leading-6 md:pb-[2vw] md:text-[1vw] md:leading-[1.6vw]">
                  Check je inbox (en je spam) voor de link naar het Google
                  Sheets schema.
                </p>
                <Button fullWidth text="SLUITEN" onClick={() => setOpen(false)} />
              </div>
            ) : (
              <>
                <p className="pb-6 text-[0.9375rem] leading-6 md:pb-[1.6vw] md:text-[1vw] md:leading-[1.6vw]">
                  Laat je mail achter en ontvang gratis een powerlifting
                  schema in Google Sheets, direct in je inbox.
                </p>
                <form
                  id="schema-modal-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <label className="block pb-5 md:pb-[1.2vw]">
                    <span className="block pb-1 text-sm text-[#575757] md:text-[0.9vw]">
                      Voornaam
                    </span>
                    <input
                      ref={firstField}
                      required
                      name="voornaam"
                      type="text"
                      autoComplete="given-name"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block pb-8 md:pb-[2vw]">
                    <span className="block pb-1 text-sm text-[#575757] md:text-[0.9vw]">
                      Mail
                    </span>
                    <input
                      required
                      name="mail"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </label>
                  <Button fullWidth submit form="schema-modal-form" text="VERSTUUR" />
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
