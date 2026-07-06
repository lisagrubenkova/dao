'use client';

type Props = {
  direction: 'left' | 'right';
  onClick: () => void;
  place: 'gallery' | 'carousel';
  className?: string;
  'aria-label'?: string;
};

export function GlassArrow({
  direction,
  onClick,
  place,
  className = '',
  'aria-label': ariaLabel,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (direction === 'left' ? 'Previous' : 'Next')}
      className={`glass-arrow glass-arrow--${place} ${className}`}
    >
      <img
        src="/GlassArrow.svg"
        alt=""
        style={{ transform: direction === 'right' ? 'rotate(180deg)' : undefined }}
      />
    </button>
  );
}