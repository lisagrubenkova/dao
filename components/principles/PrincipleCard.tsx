'use client';

import Image from 'next/image';

type Props = {
  number: number;
  text: string;
  bgImage: string;
};

const fluidCardText = 'clamp(9px, 0.7vw + 6.5px, 20px)';
const reveal =
  'opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100';

export function PrincipleCard({ number, text, bgImage }: Props) {
  return (
    <div className="group relative h-full min-h-[55vh] w-full overflow-hidden border-[0.5px] border-ink bg-bg md:min-h-0">
      {/* Фоновая картинка */}
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className={`object-cover transition-opacity duration-500 ${reveal}`}
      />

      {/* Затемнение под белый текст */}
      <div
        className={`pointer-events-none absolute inset-0 bg-black/35 transition-opacity duration-500 ${reveal}`}
      />

      {/* ЗОНА ЦИФРЫ: верхние 72% ячейки, цифра центрируется внутри → все цифры на одной линии */}
      <div className="absolute inset-x-0 top-0 bottom-[32%] md:bottom-[28%] z-10 grid place-items-center">
        <span
          className="
            select-none font-sans font-medium leading-none text-white
            transition-colors duration-500
            text-[clamp(140px,58vw,360px)]
            md:text-[clamp(300px,30.875vw,1000px)]
            [@media(hover:hover)]:text-accent
            [@media(hover:hover)]:group-hover:text-white
          "
        >
          {number}
        </span>
      </div>

      {/* ЗОНА ТЕКСТА: нижние 28% ячейки, всегда на одном месте */}
      <div className="absolute inset-x-0 top-[62%] bottom-0 z-10 flex items-start justify-center px-4 md:top-[72%]">
        <p
          className={`max-w-[36ch] text-balance text-center font-mono lowercase text-white transition-opacity duration-500 ${reveal}`}
          style={{ fontSize: fluidCardText, lineHeight: 1.5 }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}