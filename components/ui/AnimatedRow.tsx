'use client';

type Props = {
  text: string;
};

export function AnimatedRow({ text }: Props) {
  return (
    <div className="group flex items-start gap-6 cursor-default">
      <div className="flex items-center pt-3 shrink-0">
        <div className="border-1 border-ink w-[clamp(40px,8vw,120px)] group-hover:w-[clamp(80px,16vw,240px)] transition-[width] duration-500 ease-out" />
        <div className="w-1.5 h-1.5 rounded-full bg-ink" />
      </div>

      <p className="font-mono text-mono-md max-w-2xl">{text}</p>
    </div>
  );
}