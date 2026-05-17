"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { school } from "@/data/school";

export function AdmissionForm() {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    className: "",
    message: ""
  });
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phone = form.phone.replace(/\D/g, "");
    if (phone.length !== 10) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    const message = `Namaste, I want admission details for ${school.name} for session 2026-27.%0AParent Name: ${encodeURIComponent(
      form.parentName
    )}%0AStudent Name: ${encodeURIComponent(
      form.studentName
    )}%0AClass: ${encodeURIComponent(
      form.className
    )}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(
      form.message || "Please call me with admission details."
    )}`;

    setMessage("Opening WhatsApp with your inquiry...");
    window.open(`https://wa.me/91${school.phone}?text=${message}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <label className="sr-only" htmlFor="parent-name">
        Parent name
      </label>
      <input
        id="parent-name"
        required
        value={form.parentName}
        onChange={(event) => setForm({ ...form, parentName: event.target.value })}
        placeholder="Parent Name"
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-navy focus:ring-4 focus:ring-skysoft"
      />
      <label className="sr-only" htmlFor="student-name">
        Student name
      </label>
      <input
        id="student-name"
        required
        value={form.studentName}
        onChange={(event) => setForm({ ...form, studentName: event.target.value })}
        placeholder="Student Name"
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-navy focus:ring-4 focus:ring-skysoft"
      />
      <label className="sr-only" htmlFor="class-name">
        Class
      </label>
      <input
        id="class-name"
        required
        value={form.className}
        onChange={(event) => setForm({ ...form, className: event.target.value })}
        placeholder="Class"
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-navy focus:ring-4 focus:ring-skysoft"
      />
      <label className="sr-only" htmlFor="phone-number">
        Phone number
      </label>
      <input
        id="phone-number"
        required
        inputMode="tel"
        pattern="[0-9]{10}"
        maxLength={10}
        value={form.phone}
        onChange={(event) =>
          setForm({
            ...form,
            phone: event.target.value.replace(/\D/g, "").slice(0, 10)
          })
        }
        placeholder="10-digit Phone Number"
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-ink outline-none transition focus:border-navy focus:ring-4 focus:ring-skysoft"
      />
      <label className="sr-only" htmlFor="admission-message">
        Message
      </label>
      <textarea
        id="admission-message"
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
        placeholder="Message"
        rows={4}
        className="min-h-24 resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-navy focus:ring-4 focus:ring-skysoft"
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-navy px-5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#072f49]"
      >
        <Send size={17} aria-hidden="true" />
        Send Admission Inquiry
      </button>
      <p
        className={`min-h-5 text-xs font-black ${
          message.startsWith("Please") ? "text-red-700" : "text-[#128C7E]"
        }`}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
