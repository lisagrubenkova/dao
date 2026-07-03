// AnimatedLine.tsx — высота линий теперь от vh
'use client';

import Link from 'next/link';

type Props = {
  label: string;
  href?: string;
};

export function AnimatedLine({ label, href }: Props) {
  const content = (
    <div className="group cursor-pointer inline-flex flex-col items-center">
      {/* Слот тоже масштабируется по высоте экрана */}
      <div className="h-[clamp(130px,26vh,320px)] flex flex-col items-center justify-end overflow-visible">
        <div className="flex flex-col items-center">
          <span className="text-mono-base font-mono font-light lowercase mb-2 group-hover:font-bold transition-[font-weight] duration-300">
            {label}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-ink" />
        </div>

        {/* Длина линии зависит от высоты вьюпорта, с потолком */}
        <div className="border-1 border-ink/60 h-[clamp(48px,14vh,170px)] group-hover:h-[clamp(90px,24vh,280px)] transition-all duration-500 ease-out" />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}