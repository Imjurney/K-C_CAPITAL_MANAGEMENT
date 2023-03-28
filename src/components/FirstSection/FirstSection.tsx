import { TitleContent } from '@/components/TitleContent/TitleContent';
import investData from '@/data/investments.json';
import { ForwardedRef, forwardRef } from 'react';
export const FirstSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} className="mobile:pt-[7.5rem] pt-[12.5rem]">
      <TitleContent content="SECURED REINVESTMENT" />
      <article className="mobile:px-5 mobile:text-sm laptop:text-xl desktop:text-xl mobile:pt-7 laptop:px-7 laptop:pt-[3.75rem]  desktop:px-[8.875rem] desktop:pt-[3.75rem] ">
        <p className="leading-loose">{investData[6].contents_7}</p>
      </article>
      <picture>
        <source
          srcSet="/assets/img/investments/first.png"
          media="(min-width: 1024px)"
        />
        <img
          className="desktop:px-[10.5rem] desktop:pt-[4.6875rem] laptop:px-10 laptop:pt-[4.6875rem] mobile:px-12 mobile:pt-8"
          src="/assets/img/investments/first_mobile.png"
          alt="reponsive SECURED REINVESTMENT image"
        />
      </picture>
    </section>
  );
});

FirstSection.displayName = 'FirstSection';
