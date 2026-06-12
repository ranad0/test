import type { Bilingual } from '../../types';
import { BilingualParagraph, BilingualTitle } from './BilingualText';

export function SectionHeading({
  eyebrow,
  title,
  body,
  centered = false,
  className = ''
}: {
  eyebrow?: Bilingual;
  title: Bilingual;
  body?: Bilingual;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 font-latin text-xs uppercase tracking-[0.36em] text-champagne/80">
          {eyebrow.ar} <span className="text-silver/50">/</span> {eyebrow.en}
        </p>
      ) : null}
      <BilingualTitle
        copy={title}
        className="font-arabic text-3xl font-semibold leading-tight text-ivory md:text-5xl"
        secondaryClassName="font-latin text-base uppercase tracking-[0.22em] text-champagne/80 md:text-lg"
      />
      {body ? (
        <BilingualParagraph
          copy={body}
          className="mt-6 text-lg leading-9 text-silver md:text-xl"
          secondaryClassName="mt-3 font-latin text-base leading-8 text-silver/75"
        />
      ) : null}
    </div>
  );
}
