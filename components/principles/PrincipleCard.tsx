'use client';

import Image from 'next/image';

type Props = {
  number: number;
  text: string;
  bgImage: string;
};

const fluidCardText = 'clamp(9px, 6.33px + 0.712vw, 20px)';

export function PrincipleCard({ number, text, bgImage }: Props) {
  return (
    <div className="group relative overflow-hidden cursor-pointer bg-bg border-[0.5px] border-ink w-full h-full">
      {/* Фоновая картинка появляется при ховере */}
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Огромная цифра */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-sans font-medium text-[clamp(100px,20vw,360px)] leading-none transition-colors duration-500 text-accent group-hover:text-white">
          {number}
        </span>
      </div>

      {/* Описание снизу */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <p
          className="font-mono text-white text-center lowercase"
          style={{ fontSize: fluidCardText, lineHeight: 1.4 }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}