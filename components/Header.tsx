"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navItems, school } from "@/data/school";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/88 shadow-[0_8px_30px_rgba(9,60,93,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-soft ring-1 ring-navy/10 transition duration-300 group-hover:scale-105">
            <Image
              src="/images/triveni-school-logo.jpeg"
              alt="Triveni Triratan Public Jr. High School logo"
              fill
              priority
              sizes="48px"
              className="object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-black uppercase text-navy sm:text-sm">
              {school.shortName}
            </span>
            <span className="block truncate text-xs font-bold text-slate-500">
              {school.locality}
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-extrabold text-slate-700 transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${school.phone}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-navy px-4 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#072f49]"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy xl:hidden"
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-slate-100 bg-white px-4 py-3 shadow-soft xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-extrabold text-slate-700 transition hover:bg-skysoft hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-navy px-4 text-sm font-extrabold text-white"
            >
              Apply for Admission
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
