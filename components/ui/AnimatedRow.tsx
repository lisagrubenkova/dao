// AnimatedRow.tsx — добавлены опциональные href/onClick (старое использование не ломается)
'use client';

import Link from 'next/link';

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
};

export function AnimatedRow({ text, href, onClick }: Props) {
  const content = (
    <div className={`group flex items-start gap-6 ${href ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className="flex items-center shrink-0 leading-none"
    style={{ height: 'clamp(10px, 2.72px + 1.942vw, 40px)' }}  // = font-size, т.е. высота строки при leading-none
  >
        <div className="h-px bg-ink/60 w-[clamp(70px,8vw,120px)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-ink" />
      </div>

      <p
        className="font-mono leading-none md:leading-normal max-w-[200px] md:max-w-none"
        style={{ fontSize: 'clamp(10px, 2.72px + 1.942vw, 40px)' }}
      >
        {text}
      </p>
    </div>
  );

  if (href) {
    return <Link href={href} onClick={onClick}>{content}</Link>;
  }
  return content;
}