import { TitleContent } from '@/components/TitleContent/TitleContent';
import style from '@/pages/Investments/InvestmentsPage.module.css';
import investments_data from '@/data/investments.json';
import { useQuery } from '@tanstack/react-query';
import { ForwardedRef, forwardRef } from 'react';
function SecondImage() {
  return (
    <picture className={style.bg_img}>
      <source
        srcSet="/assets/img/investments/second.png"
        media="(min-width: 1024px)"
      />
      <img
        className={style.bg_img}
        src="/assets/img/investments/second_mobile.png"
        alt="reponsive INVESTMENT STRATEGY AND POTFOLIO image"
      />
    </picture>
  );
}

export const SecondSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const { data } = useQuery(
    ['INVESTMENT STRATEGY AND POTFOLIO'],
    () => Promise.resolve(investments_data),
    {
      staleTime: 200000,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <section ref={ref} className={style.investment_section}>
      <TitleContent content="INVESTMENT STRATEGY AND POTFOLIO" />
      <article>
        <p className="leading-loose">{data && data[4].contents_5}</p>
      </article>
      <SecondImage />
    </section>
  );
});

SecondSection.displayName = 'SecondSection';
