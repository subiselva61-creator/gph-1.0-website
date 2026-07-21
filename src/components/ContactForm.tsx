"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
    window.location.href = `mailto:info@gph.energy?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  const fieldClass =
    "focus-ring w-full rounded-xl border border-glass-border bg-glass px-4 py-3 text-body-sm text-ink placeholder:text-ink-muted/60 backdrop-blur-md transition hover:border-accent/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="text-eyebrow mb-2 block text-ink-muted"
        >
          Name
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
        <label
          htmlFor="email"
          className="text-eyebrow mb-2 block text-ink-muted"
        >
          Email
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
          className="text-eyebrow mb-2 block text-ink-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="How can we help?"
        />
      </div>

      {status === "sent" && (
        <p className="text-body-sm text-accent" role="status">
          Opening your email client…
        </p>
      )}

      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
