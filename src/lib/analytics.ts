/**
 * Lightweight analytics stub. Swap the body for a real provider when one is wired.
 */
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("[analytics]", name, props ?? {});
  }
}
