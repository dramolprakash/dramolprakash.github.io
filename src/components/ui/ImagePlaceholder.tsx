'use client';

interface ImagePlaceholderProps {
  label: string;
  hint?: string;
  className?: string;
  shape?: 'default' | 'circle' | 'wide';
}

export default function ImagePlaceholder({
  label,
  hint,
  className = '',
  shape = 'default',
}: ImagePlaceholderProps) {
  const shapeClass =
    shape === 'circle'
      ? 'rounded-full aspect-square'
      : shape === 'wide'
      ? 'rounded-2xl aspect-video'
      : 'rounded-2xl aspect-[4/3]';

  return (
    <div
      className={`img-placeholder ${shapeClass} ${className} relative overflow-hidden`}
      title={`Image placeholder: ${label}`}
    >
      {/* Subtle animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" />

      {/* Corner accent dots */}
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-blue-500/30" />
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-500/30" />
      <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-violet-500/30" />
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-blue-500/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-4 max-w-xs mx-auto">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-slate-400 font-semibold text-sm text-center leading-snug">{label}</p>
        {hint && (
          <p className="text-slate-600 text-xs text-center leading-relaxed">{hint}</p>
        )}
        <span className="mt-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400/70 text-[10px] font-semibold tracking-wider uppercase">
          Replace with your image
        </span>
      </div>
    </div>
  );
}
