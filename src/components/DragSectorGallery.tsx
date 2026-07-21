"use client";

import Image from "next/image";
import Smooothy from "smooothy";
import { useRef } from "react";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import ScrollFloat from "@/components/react-bits/ScrollFloat";
import { Container } from "@/components/ui/Container";
import { images, sectorTags } from "@/lib/images";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type DragSectorGalleryProps = {
  intro?: string;
  title?: string;
  className?: string;
};

export function DragSectorGallery({
  title = "Where We Create Impact",
  intro = "We support you with rigor, discretion, and total commitment.",
  className,
}: DragSectorGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      if (prefersReducedMotion()) return;

      const innerItems = Array.from(
        track.querySelectorAll<HTMLElement>("[data-parallax-inner]"),
      );
      const maxOffset = 20;
      const amount = 10;

      const slider = new Smooothy(track, {
        infinite: true,
        snap: false,
        scrollInput: false,
        lerpFactor: 0.32,
        dragSensitivity: 0.006,
        onUpdate: (core) => {
          const values = core.parallaxValues;
          if (!values) return;
          innerItems.forEach((item, i) => {
            const offset = gsap.utils.clamp(
              -maxOffset,
              maxOffset,
              (values[i] ?? 0) * amount,
            );
            item.style.transform = `translateX(${offset}%) scale(1.12)`;
          });
        },
      });

      const tick = () => slider.update();
      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        slider.destroy();
      };
    },
    { scope: trackRef },
  );

  return (
    <section className={cn("relative py-section", className)}>
      <Container>
        <div className="max-w-2xl">
          <ScrollFloat
            as="h2"
            containerClassName="font-display text-h2 font-normal text-ink"
            textClassName="font-display text-h2 font-normal text-ink"
          >
            {title}
          </ScrollFloat>
          <Reveal as="div">
            <p className="mt-4 text-body text-ink-muted">{intro}</p>
          </Reveal>
        </div>
      </Container>

      <div className="mt-10">
        <Marquee speed={45}>
          {sectorTags.map((tag) => (
            <span
              key={tag}
              className="text-[0.875rem] tracking-[0.04em] text-ink-muted"
            >
              {tag}
              <span className="mx-6 text-line" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mt-12">
        <div
          ref={trackRef}
          data-cursor="drag"
          className="drag-track select-none px-[var(--space-container-x)]"
          role="region"
          aria-label="Impact photo gallery — drag to explore"
        >
          {images.gallery.map((item) => (
            <figure
              key={item.label}
              className="relative h-[28rem] w-[23rem] shrink-0 pr-5"
            >
              <div className="relative h-full w-full overflow-hidden">
                <div
                  data-parallax-inner
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    draggable={false}
                    className="img-warm pointer-events-none object-cover"
                    sizes="352px"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background-solid/80 to-transparent px-5 pb-5 pt-16 text-[0.875rem] text-ink">
                  {item.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.75rem] tracking-[0.18em] text-ink-muted">
          [ Drag ]
        </p>
      </div>
    </section>
  );
}
