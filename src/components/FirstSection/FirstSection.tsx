import { TitleContent } from '@/components/TitleContent/TitleContent';
import investData from '@/data/investments.json';
import { ForwardedRef, forwardRef } from 'react';
import Label from '@/components/design/Label';
import InvestmentArrow from '@/components/InvestmentArrow/InvestmentArrow';
import designData from '@/data/investment_first_design.json';
import { useQuery } from '@tanstack/react-query';
import style from '@/components/design/design.module.css';
export const FirstSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const { data } = useQuery(
    ['First_Design'],
    () => Promise.resolve(designData),
    {
      staleTime: 20000,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <section
      ref={ref}
      className="mobile:pt-[7.5rem] pt-[12.5rem] flex flex-col items-center justify-center bg-white"
    >
      <TitleContent content="SECURED REINVESTMENT" />
      <article className="mobile:px-5 mobile:text-sm  desktop:text-xl mobile:pt-7  desktop:px-8 desktop:pt-[3.75rem] ">
        <p className="leading-loose">{investData[6].contents_7}</p>
      </article>
      <section className={style.design__wrapper}>
        {data && (
          <>
            <Label
              subject={data[0].name}
              description1={data[0].span}
              description2={data[0].span2}
              description3={data[0].span3}
              description4={data[0].span4}
            />
            <InvestmentArrow type="Normal" className={style.first__arrow} />
            <Label
              Color="White"
              subject={data[1].name}
              description1={data[1].span}
            />

            <InvestmentArrow
              type="Bifurcation"
              className={style.forexit__arrow}
            />
            <Label
              subject={data[2].name}
              description1={data[2].span}
              description2={data[2].span2}
              description3={data[2].span3}
              description4={data[2].span4}
            />
            <InvestmentArrow type="Normal" className={style.second__arrow} />
          </>
        )}
        <div className={style.exit__position}>
          <Label Color="Gray" subject="EXIT" />
        </div>
      </section>
    </section>
  );
});

FirstSection.displayName = 'FirstSection';
