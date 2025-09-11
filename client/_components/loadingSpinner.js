"use client";

// Reusable Tailwind CSS spinner
// Props:
//  - size: one of xs | sm | md | lg | xl (default md)
//  - variant: ring | bar | dot (default ring)
//  - label: accessible label (default 'Loading')
//  - className: extra utility classes
export default function LoadingSpinner({
  size = "md",
  variant = "ring",
  label = "Loading",
  className = "",
}) {
  const sizeMap = {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  if (variant === "dot") {
    return (
      <div className={`flex items-center gap-1 ${className}`} role="status" aria-label={label}>
        <span className="sr-only">{label}</span>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`inline-block rounded-full bg-[#0C7769] ${size === "xs" ? "h-1.5 w-1.5" : size === "sm" ? "h-2 w-2" : "h-3 w-3"} animate-bounce`}
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div className={`relative overflow-hidden rounded-full bg-green-100 ${className}`} role="status" aria-label={label}>
        <span className="sr-only">{label}</span>
        <div className="animate-[progress_1.2s_ease-in-out_infinite] h-2 w-1/3 rounded-full bg-green-600" />
        <style jsx>{`
          @keyframes progress {
            0% { transform: translateX(-120%); }
            50% { transform: translateX(30%); }
            100% { transform: translateX(120%); }
          }
        `}</style>
      </div>
    );
  }

  // Default ring spinner
  const ringSize = sizeMap[size] || sizeMap.md;
  return (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
      <span
        className={`${ringSize} animate-spin rounded-full border-2 border-current border-t-transparent text-green-600`}
      />
    </div>
  );
}

// Optional full-screen overlay helper
export function LoadingOverlay({ show, text = "Loading...", spinnerProps = {} }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-sm">
      <LoadingSpinner {...spinnerProps} size={spinnerProps.size || "lg"} />
      <p className="text-sm font-medium text-green-700">{text}</p>
    </div>
  );
}
