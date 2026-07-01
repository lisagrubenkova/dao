'use client';

type Props = {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
};

const fluidTitleActive = 'clamp(16px, 9.2px + 1.813vw, 44px)';
const fluidTitleInactive = 'clamp(12px, 9.1px + 0.777vw, 24px)';
const fluidDescActive = 'clamp(9px, 5.36px + 0.971vw, 24px)';
const fluidDescInactive = 'clamp(8px, 5.1px + 0.777vw, 20px)';

export function AlgorithmStep({ number, title, description, isActive }: Props) {
  const num = String(number).padStart(2, '0');

  return (
    <div className="flex flex-col items-center text-center px-6">
      {/* Цифра */}
      <div className="h-[clamp(80px,10vw,140px)] flex items-end justify-center mb-4">
        <span
          className={`font-mono font-light leading-none transition-all duration-500 ${
            isActive
              ? 'text-[clamp(64px,8vw,120px)] text-ink'
              : 'text-[clamp(40px,5vw,72px)] text-algo'
          }`}
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
            isActive ? 'font-bold text-ink' : 'font-semibold text-algo'
          }`}
          style={{ fontSize: isActive ? fluidTitleActive : fluidTitleInactive }}
        >
          {title}
        </h3>
      </div>

      {/* Описание */}
      <div className="min-h-[clamp(100px,12vw,200px)] flex items-start justify-center">
        <p
          className={`font-mono transition-all duration-500 ${
            isActive ? 'text-ink opacity-100' : 'text-algo opacity-70'
          }`}
          style={{ fontSize: isActive ? fluidDescActive : fluidDescInactive, lineHeight: 1.5 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}