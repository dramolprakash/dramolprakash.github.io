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
      ? 'rounded-lg aspect-video'
      : 'rounded-lg aspect-[4/3]';

  return (
    <div
      className={`bg-gray-100 border border-gray-200 ${shapeClass} ${className} relative overflow-hidden flex flex-col items-center justify-center gap-2 p-4`}
      title={`Image placeholder: ${label}`}
    >
      <svg
        className="w-6 h-6 text-gray-400"
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
      <p className="text-gray-500 text-xs font-medium text-center leading-snug">{label}</p>
      {hint && <p className="text-gray-400 text-xs text-center">{hint}</p>}
    </div>
  );
}
