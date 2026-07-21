export function ShapeTop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M0 120 C180 40 320 160 480 90 C640 20 780 140 1000 60 L1000 180 L0 180 Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M0 140 C220 70 380 150 560 100 C740 50 860 130 1000 85"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  );
}

export function ShapeBottom({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M0 0 L1000 0 L1000 40 C820 120 680 20 520 90 C360 160 220 50 0 110 Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M0 90 C180 30 340 130 520 70 C700 10 860 100 1000 45"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  );
}
