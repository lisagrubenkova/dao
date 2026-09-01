'use client';

type Props = {
  direction: 'left' | 'right' | 'up' | 'down';
  onClick: () => void;
  place: 'gallery' | 'carousel' | 'close';
  className?: string;
  'aria-label'?: string;
};

const ROTATION: Record<Props['direction'], string> = {
  left: 'none',
  right: 'scaleX(-1)',
  up: 'rotate(90deg)',
  down: 'rotate(-90deg)',
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
      aria-label={ariaLabel ?? (direction === 'left' ? 'Previous' : direction === 'right' ? 'Next' : direction === 'up' ? 'Up' : 'Down')}
      className={`glass-arrow glass-arrow--${place} ${className}`}
    >
      <img
        src="/GlassArrow.svg"
        alt=""
        style={{ transform: ROTATION[direction] }}
      />
    </button>
  );
}