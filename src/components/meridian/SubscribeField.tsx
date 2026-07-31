"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

/** No mail backend exists, so a submission opens a pre-filled dispatch email. */
export function SubscribeField() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Dispatch subscription");
    const body = encodeURIComponent(`Please add ${email} to the GPH dispatch.`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <label htmlFor="dispatch-email" className="sr-only">
          Work email
        </label>
        <input
          id="dispatch-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          className="focus-ring mono-label h-12 min-w-0 flex-1 rounded-full border border-rule bg-paper-raised px-5 normal-case tracking-normal text-ink transition-colors placeholder:text-ink-faint hover:border-rule-strong"
        />
        <button
          type="submit"
          className="btn-pill focus-ring h-12 shrink-0 px-7 text-[0.9375rem]"
        >
          Subscribe
        </button>
      </form>

      <p className="mono-label mt-3 text-center text-ink-faint">
        {sent
          ? "Opening your email client…"
          : "One email every fortnight · one click unsub"}
      </p>
    </div>
  );
}
