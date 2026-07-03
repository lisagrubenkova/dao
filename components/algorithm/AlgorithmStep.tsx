'use client';

type Props = {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
};

// Базовый размер = БОЛЬШИЙ (активный). Текст всегда верстается на нём,
// поэтому переносы строк не меняются между состояниями.
const titleBase = 'clamp(16px, 9.2px + 1.4vw, 44px)';
const descBase  = 'clamp(9px, 5.36px + 0.971vw, 24px)';

// Во сколько раз уменьшать в неактивном состоянии (визуально, без reflow).
// Подбери под свой дизайн — см. примечание ниже.
const titleInactiveScale = 0.62;
const descInactiveScale  = 0.82;

export function AlgorithmStep({ number, title, description, isActive }: Props) {
  const num = String(number).padStart(2, '0');

  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* Цифра */}
      <div className="h-[clamp(80px,10vw,140px)] flex items-end justify-center mb-4">
        <span
          className={`font-mono font-light leading-none transition-all duration-500 ${
            isActive ? 'text-ink' : 'text-algo'
          }`}
          style={{
            fontSize: 'clamp(64px,8vw,120px)',
            transformOrigin: 'center bottom',
            transform: isActive ? 'scale(1)' : 'scale(0.6)',
          }}
        >
          {num}
        </span>
      </div>

      {/* Точка */}
      <div
        className={`rounded-full bg-ink transition-all duration-500 ${
          isActive ? 'w-2 h-2' : 'w-1.5 h-1.5'
        }`}
      />

      <div className="h-6" />

      {/* Заголовок */}
      <div className="min-h-[clamp(54px,6vw,108px)] flex items-start justify-center mb-4">
        <h3
          className={`font-sans uppercase transition-all duration-500 ${
            isActive ? 'font-bold text-ink' : 'font-bold text-algo'
          }`}
          style={{
            fontSize: titleBase,
            transformOrigin: 'top center',
            transform: isActive ? 'scale(1)' : `scale(${titleInactiveScale})`,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Описание */}
      <div className="min-h-[clamp(70px,12vw,200px)] flex items-start justify-center">
        <p
          className={`font-mono transition-all duration-500 ${
            isActive ? 'text-ink opacity-100' : 'text-algo opacity-70'
          }`}
          style={{
            fontSize: descBase,
            lineHeight: 1.5,
            transformOrigin: 'top center',
            transform: isActive ? 'scale(1)' : `scale(${descInactiveScale})`,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}