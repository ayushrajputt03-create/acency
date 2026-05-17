"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Bot, MessageCircle, Minus, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { heroStats, school } from "@/data/school";

export function DynamicCounters() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".counter-card",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out" }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid gap-3 sm:grid-cols-3">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="counter-card rounded-lg border border-white/25 bg-white/14 p-4 opacity-0 shadow-soft backdrop-blur-xl"
        >
          <strong className="block text-2xl font-black text-white">{stat.value}</strong>
          <span className="mt-1 block text-xs font-bold leading-5 text-white/78">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AdmissionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-[5.25rem] left-4 right-4 z-40 mx-auto max-w-md rounded-lg border border-white/60 bg-white/95 p-4 shadow-premium backdrop-blur-xl md:bottom-24 md:left-auto md:right-6"
        >
          <button
            type="button"
            aria-label="Close admission update"
            onClick={() => setVisible(false)}
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
          >
            <X size={16} aria-hidden="true" />
          </button>
          <div className="flex gap-3 pr-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal text-white">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-black text-navy">Admission Open 2026-27</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                Book a campus visit and speak with the admission team today.
              </p>
              <a
                href="#admissions"
                onClick={() => setVisible(false)}
                className="mt-3 inline-flex h-10 items-center justify-center rounded-lg bg-navy px-4 text-xs font-black text-white"
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-24 md:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="mb-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-white/60 bg-white shadow-premium"
          >
            <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot size={19} aria-hidden="true" />
                <span className="text-sm font-black">Admission Help</span>
              </div>
              <button
                type="button"
                aria-label="Minimize admission chatbot"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"
              >
                <Minus size={16} aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-3 p-4">
              <p className="max-w-[85%] rounded-lg bg-skysoft p-3 text-sm font-semibold leading-6 text-slate-700">
                Namaste. I can help with admission 2026-27, classes, fees, safety, academics, and campus visit timing.
              </p>
              {["Which classes are open?", "Can I visit the campus?", "Please share fee details."].map(
                (item) => (
                  <a
                    key={item}
                    href={`${school.whatsapp}%20${encodeURIComponent(item)}`}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-left text-sm font-extrabold text-navy transition hover:bg-skysoft"
                  >
                    {item}
                  </a>
                )
              )}
              <a
                href={school.whatsapp}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-teal px-4 text-sm font-black text-white"
              >
                <Send size={16} aria-hidden="true" />
                Continue on WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        type="button"
        aria-label="Open admission chatbot"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-premium transition hover:scale-105"
      >
        <MessageCircle size={23} aria-hidden="true" />
      </button>
    </div>
  );
}
