'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const fluidEmail = 'clamp(14px, 7.7px + 1.68vw, 40px)';
const fluidParagraph = 'clamp(14px, 12.55px + 0.388vw, 20px)';

export function Contact() {
  const t = useTranslations('contact');
  const email = t('email');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <section id="contact" className="bg-bg py-section-y px-section-x">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gap-md">
        {/* Заголовок */}
        <div className="lg:col-span-7">
          <h2
            className="font-sans font-medium"
            style={{ fontSize: 'clamp(40px, 4vw + 1rem, 120px)' }}
          >
            {t('title')}
          </h2>
        </div>

        {/* Email + copy справа сверху */}
        <div className="lg:col-span-5 flex lg:justify-end lg:items-start lg:pt-6">
          <div
            className="inline-flex items-center gap-3 text-mail"
            style={{ fontSize: fluidEmail }}
          >
            <a
              href={`mailto:${email}`}
              className="font-sans hover:text-ink transition-colors"
            >
              {email}
            </a>

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Copied' : 'Copy email'}
              className="inline-flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Image
                src="/copy.svg"
                alt=""
                width={24}
                height={24}
                style={{
                  width: 'clamp(14px, 0.6em + 0.3vw, 32px)',
                  height: 'auto',
                }}
              />
            </button>
          </div>
        </div>

        {/* Два абзаца под заголовком */}
        <div className="lg:col-span-4 lg:col-start-1 lg:mt-gap-md">
          <p className="font-mono" style={{ fontSize: fluidParagraph, lineHeight: 1.5 }}>
            {t('paragraph1')}
          </p>
        </div>
        <div className="lg:col-span-4 lg:mt-gap-md">
          <p className="font-mono" style={{ fontSize: fluidParagraph, lineHeight: 1.5 }}>
            {t('paragraph2')}
          </p>
        </div>
      </div>
    </section>
  );
}