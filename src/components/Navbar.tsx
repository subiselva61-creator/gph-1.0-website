"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import SpecularButton from "@/components/react-bits/SpecularButton";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import {
  isNavGroup,
  navGroups,
  type NavGroup,
  type NavLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavItem({
  item,
  pathname,
  className,
}: {
  item: NavLink;
  pathname: string;
  className?: string;
}) {
  const active = isActivePath(pathname, item.href);

  return (
    <li className={className}>
      <Link
        href={item.href}
        className={cn(
          "focus-ring text-nav inline-flex items-center rounded-sm py-2 font-medium tracking-[0.08em] transition-colors",
          active
            ? "text-ink underline decoration-ink/40 underline-offset-8"
            : "text-ink-muted hover:text-ink",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}

function NavDropdown({
  group,
  pathname,
}: {
  group: NavGroup;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const active = group.children.some((c) => isActivePath(pathname, c.href));

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "focus-ring text-nav inline-flex items-center gap-1.5 rounded-sm py-2 font-medium tracking-[0.08em] transition-colors",
          active || open ? "text-ink" : "text-ink-muted hover:text-ink",
        )}
      >
        {group.label}
        <span
          aria-hidden
          className={cn(
            "inline-block text-[0.6rem] transition-transform",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 min-w-[14rem] -translate-x-1/2 pt-3 transition-all duration-200",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <ul className="glass-strong overflow-hidden rounded-2xl py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          {group.children.map((child) => {
            const childActive = isActivePath(pathname, child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    "focus-ring block px-5 py-2.5 text-[0.8125rem] tracking-[0.04em] transition-colors",
                    childActive
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  // Slide down after the preloader releases (mirrors valeran.eu load sequence).
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    if (
      prefersReducedMotion() ||
      !document.documentElement.classList.contains("is-loading")
    ) {
      return;
    }
    gsap.set(header, { yPercent: -110 });
    const play = () =>
      gsap.to(header, { yPercent: 0, duration: 1, ease: "expo.out" });
    window.addEventListener("gph:loaded", play, { once: true });
    return () => window.removeEventListener("gph:loaded", play);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className="glass mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-6 rounded-2xl px-4 shadow-[0_8px_32px_rgba(0,0,0,0.28)] sm:px-5"
        aria-label="Primary"
      >
        <Logo
          size="sm"
          className="min-w-0 [&_span:last-child]:hidden sm:[&_span:last-child]:inline"
        />
        <ul className="flex min-w-0 items-center gap-3 sm:gap-8">
          {navGroups.map((entry) =>
            isNavGroup(entry) ? (
              <NavDropdown
                key={entry.label}
                group={entry}
                pathname={pathname}
              />
            ) : (
              <NavItem
                key={entry.href}
                item={entry}
                pathname={pathname}
                className={
                  entry.href === "/contact-us" ? "sm:hidden" : undefined
                }
              />
            ),
          )}
        </ul>
        <div className="hidden shrink-0 sm:block">
          <SpecularButton
            size="sm"
            radius={999}
            tint="#ffffff"
            tintOpacity={0.08}
            blur={12}
            textColor="#f2f7f4"
            lineColor="#27ffe3"
            baseColor="#ffffff"
            intensity={1.15}
            shineSize={12}
            shineFade={40}
            thickness={1}
            followMouse
            proximity={220}
            autoAnimate={false}
            onClick={() => router.push("/contact-us")}
          >
            Contact
          </SpecularButton>
        </div>
      </nav>
    </header>
  );
}
