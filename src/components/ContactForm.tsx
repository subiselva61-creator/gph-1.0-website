"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  const fieldClass =
    "focus-ring w-full border border-rule bg-paper px-3 py-2.5 text-body-sm text-ink transition-colors placeholder:text-ink-faint hover:border-rule-strong";

  return (
    <form onSubmit={handleSubmit} className="border border-rule bg-paper-raised">
      <div className="flex items-baseline justify-between gap-4 border-b border-rule px-5 py-2.5">
        <span className="mono-label text-ink">Enquiry · form 01</span>
        <span className="mono-label text-ink-faint">3 fields</span>
      </div>

      <div className="flex flex-col gap-5 p-5">
        <div>
          <label htmlFor="name" className="mono-label mb-2 block text-ink-faint">
            01 · Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mono-label mb-2 block text-ink-faint">
            02 · Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@organization.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mono-label mb-2 block text-ink-faint"
          >
            03 · Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${fieldClass} resize-y`}
            placeholder="How can we help?"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule px-5 py-4">
        <p className="mono-label text-ink-faint" role="status">
          {status === "sent"
            ? "Opening your email client…"
            : "Sent to your mail client for signature"}
        </p>
        <button
          type="submit"
          className="btn-pill focus-ring h-11 px-7 text-[0.9375rem]"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
