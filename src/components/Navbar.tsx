"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/meridian/ThemeToggle";
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

function NavItem({ item, pathname }: { item: NavLink; pathname: string }) {
  const active = isActivePath(pathname, item.href);
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "focus-ring mono-label inline-flex items-center py-2 transition-colors",
          active ? "text-ink" : "text-ink-muted hover:text-ink",
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
          "focus-ring mono-label inline-flex items-center gap-1.5 py-2 transition-colors",
          active || open ? "text-ink" : "text-ink-muted hover:text-ink",
        )}
      >
        {group.label}
        <span
          aria-hidden
          className={cn(
            "inline-block text-[0.55rem] transition-transform",
            open && "rotate-180",
          )}
        >
          ▾
        </span>
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 min-w-[13rem] pt-2 transition-opacity duration-150",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <ul className="panel divide-y divide-rule">
          {group.children.map((child) => {
            const childActive = isActivePath(pathname, child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    "focus-ring mono-label block px-4 py-3 transition-colors hover:bg-paper-alt",
                    childActive ? "text-accent" : "text-ink-muted hover:text-ink",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-[var(--nav-height)] w-full max-w-[var(--canvas-max)] items-center justify-between gap-6 px-[var(--space-container-x)]"
        aria-label="Primary"
      >
        <Logo size="md" className="min-w-0 shrink-0" wordmarkClassName="text-lg leading-none" />

        <ul className="hidden items-center gap-8 lg:flex">
          {navGroups.map((entry) =>
            isNavGroup(entry) ? (
              <NavDropdown
                key={entry.label}
                group={entry}
                pathname={pathname}
              />
            ) : entry.href === "/contact-us" ? null : (
              <NavItem key={entry.href} item={entry} pathname={pathname} />
            ),
          )}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact-us"
            className="btn-pill focus-ring hidden h-9 px-5 text-[0.8125rem] sm:inline-flex"
          >
            Contact us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="focus-ring inline-flex size-8 items-center justify-center border border-rule text-ink lg:hidden"
          >
            <span aria-hidden className="flex flex-col gap-[3px]">
              <span
                className={cn(
                  "block h-[1px] w-3.5 bg-current transition-transform",
                  menuOpen && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[1px] w-3.5 bg-current transition-opacity",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-[1px] w-3.5 bg-current transition-transform",
                  menuOpen && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-rule bg-paper lg:hidden">
          <ul className="mx-auto w-full max-w-[var(--canvas-max)] divide-y divide-rule px-[var(--space-container-x)]">
            {navGroups.flatMap((entry) =>
              isNavGroup(entry)
                ? [
                    <li key={entry.label} className="py-3">
                      <span className="mono-label text-ink-faint">
                        {entry.label}
                      </span>
                      <ul className="mt-2 flex flex-col gap-2 pl-3">
                        {entry.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="mono-label text-ink-muted transition-colors hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>,
                  ]
                : [
                    <li key={entry.href} className="py-3.5">
                      <Link
                        href={entry.href}
                        onClick={closeMenu}
                        className="mono-label text-ink transition-colors hover:text-accent"
                      >
                        {entry.label}
                      </Link>
                    </li>,
                  ],
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
