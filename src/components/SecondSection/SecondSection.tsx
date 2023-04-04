import { TitleContent } from '@/components/TitleContent/TitleContent';
import style from '@/pages/Investments/InvestmentsPage.module.css';
import investments_data from '@/data/investments.json';
import { useQuery } from '@tanstack/react-query';
import { ForwardedRef, forwardRef } from 'react';
import designStyle from '@/components/design/design.module.css';
import clsx from 'clsx';
import investment_second_design from '@/data/investment_second_design.json';

const Direction = [
  { type: 'top', css: '-top-6 left-1/2 -translate-x-1/2 desktop:top-6' },
  {
    type: 'bottom',
    css: '-bottom-6 left-1/2 -translate-x-1/2 desktop:bottom-6',
  },
  { type: 'left', css: '-left-6 top-1/2 -translate-y-1/2 desktop:left-6' },
  { type: 'right', css: '-right-6 top-1/2 -translate-y-1/2 desktop:right-6' },
];

const line_Direction = [
  {
    type: 'top',
    css: 'left-1/2 -translate-x-1/2 top-[70px] rotate-90 desktop:top-[210px]',
  },
  {
    type: 'bottom',
    css: 'left-1/2 -translate-x-1/2 bottom-[70px] rotate-90  desktop:bottom-[210px]',
  },
  {
    type: 'left',
    css: '-translate-x-1/2 translate-y-[2px] left-[70px] bottom-1/2 rotate-180 desktop:translate-y-1.5 desktop:left-[210px]',
  },
  {
    type: 'right',
    css: 'translate-x-1/2 translate-y-[2px] right-[70px] bottom-1/2 rotate-180 desktop:translate-y-1.5 desktop:right-[210px]',
  },
];

const circle_Direction = [
  {
    type: 'top',
    css: 'left-1/2 -translate-x-1/2 top-[80px] desktop:top-[230px]',
  },
  {
    type: 'bottom',
    css: 'left-1/2 -translate-x-1/2 bottom-[80px] desktop:bottom-[230px]',
  },
  {
    type: 'left',
    css: '-translate-x-1/2 left-[80px] bottom-[48.5%] desktop:left-[235.5px]',
  },
  {
    type: 'right',
    css: 'translate-x-1/2 right-[80px] bottom-[48.5%] desktop:right-[235.5px]',
  },
];

function SecondImage() {
  const { data } = useQuery(
    ['INVESTMENT_Second'],
    () => Promise.resolve(investment_second_design),
    {
      staleTime: 200000,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <section className={designStyle.second_design_wrapper}>
      {data?.map((item, index) => {
        const deirection = Direction.find(
          (items) => items.type === item.position
        );
        const lineDirection = line_Direction.find(
          (items) => items.type === item.position
        );
        const circleDirection = circle_Direction.find(
          (items) => items.type === item.position
        );

        return (
          <div key={`${item.position}_${index}`} id={item.position}>
            <div
              className={clsx(designStyle.four__circle__common, [
                deirection?.css,
              ])}
            >
              <span>{item.name}</span>
            </div>
            <div>
              <div
                id={`${item.position}_line`}
                className={clsx(designStyle.line, lineDirection?.css)}
              ></div>
              <div
                className={clsx(
                  designStyle.four__arrow__circle,
                  circleDirection?.css
                )}
              ></div>
            </div>
          </div>
        );
      })}

      <div className={clsx(designStyle.inner__circle, 'ab_center')}>
        <div className={clsx(designStyle.center__ring, 'ab_center')}>
          <span>K&C Capital Maneged fund</span>
        </div>
      </div>
    </section>
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
