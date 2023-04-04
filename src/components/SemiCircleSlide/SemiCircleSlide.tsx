import { InvestmentIcons } from '@/data/icon/icon';
import { useRef, useLayoutEffect, useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import gsap from 'gsap';
import style from '@/pages/Investments/InvestmentsPage.module.css';
import clsx from 'clsx';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import ItemsCarousel from 'react-items-carousel';

interface Props {
  onclick?: () => void;
  onclick_2?: () => void;
  onclick_3?: () => void;
}
function SemiCircleSlide({ onclick, onclick_2, onclick_3 }: Props) {
  const rotationWrapperRef = useRef(null);
  const goToLeftRef = useRef<HTMLButtonElement>(null);
  const goToRightRef = useRef<HTMLButtonElement>(null);
  const btn3 = useRef<HTMLButtonElement>(null);
  const returnFrontFromLeftRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const goToLeft_Animation = gsap.to(rotationWrapperRef.current, {
        x: 650,
        y: 200,
        rotate: 45,
        paused: true,
        onComplete: () => {
          const tl = gsap.timeline();
          tl.to(returnFrontFromLeftRef.current, { display: 'block' })
            .to(goToRightRef.current, { display: 'none' }, '-=1')
            .to(
              goToLeftRef.current,
              {
                display: 'none',
              },
              '-=1'
            );
        },
        onReverseComplete: () => {
          const goToLeftAnimationReverse = gsap.timeline();
          goToLeftAnimationReverse
            .to(goToLeftRef.current, { display: 'block' })
            .to(goToRightRef.current, { display: 'block' }, '-=1')
            .to(btn3.current, { display: 'none' }, '-=1')
            .to(returnFrontFromLeftRef.current, { display: 'none' }, '-=1');
        },
      });

      /* ------------------------------왼쪽-------------------------------------------- */
      goToLeftRef.current &&
        goToLeftRef.current.addEventListener('click', () => {
          goToLeft_Animation.play();
        });
      returnFrontFromLeftRef.current &&
        returnFrontFromLeftRef.current.addEventListener('click', () => {
          goToLeft_Animation.reverse();
        });

      const goToRight = gsap.to(rotationWrapperRef.current, {
        x: -650,
        y: 200,
        rotate: -45,
        paused: true,
        onComplete: () => {
          const tl = gsap.timeline();
          tl.to(btn3.current, { display: 'block' })
            .to(goToRightRef.current, { display: 'none' }, '-=1')
            .to(
              goToLeftRef.current,
              {
                display: 'none',
              },
              '-=1'
            );
        },
        onReverseComplete: () => {
          const tl = gsap.timeline();
          tl.to(btn3.current, { display: 'none', duration: 0.01 })
            .to(goToRightRef.current, { display: 'block' })
            .to(goToLeftRef.current, { display: 'block' }, '-=1');
        },
      });

      goToRightRef.current &&
        goToRightRef.current.addEventListener('click', () => {
          goToRight.play();
        });

      btn3.current &&
        btn3.current.addEventListener('click', () => {
          goToRight.reverse();
        });
    });
    return () => cxt.revert();
  }, []);
  // laptop:top-[800px] laptop:left-[300px]
  return (
    <section className="bg-white pt-[2.375rem] overflow-hidden">
      <div className={style.semicircle__slide__wrapper}>
        <div
          ref={rotationWrapperRef}
          className="flex items-center justify-center pt-[8.8125rem] gap-[17.824375rem]"
        >
          <figure
            onClick={onclick}
            className={clsx(
              style.semicircle__slide__card,
              ' translate-y-[90%] -translate-x-[10%] -rotate-45'
            )}
          >
            <div>{InvestmentIcons[1]}</div>
            <figcaption className={style.semicircle__slide__figcaption}>
              <span>{'SECURED'}</span>
              <span>{'REINVESTMENT'}</span>
            </figcaption>
          </figure>

          <figure onClick={onclick_2} className={style.semicircle__slide__card}>
            <div>{InvestmentIcons[0]}</div>
            <figcaption className={style.semicircle__slide__figcaption}>
              <span>{'RESIDENTIAL PROPETY'}</span>
              <span>{'DEVELOPMENTS'}</span>
            </figcaption>
          </figure>
          <figure
            onClick={onclick_3}
            className={clsx(
              style.semicircle__slide__card,
              'translate-y-[90%] translate-x-[10%] rotate-45'
            )}
          >
            <div>{InvestmentIcons[2]}</div>
            <figcaption className={style.semicircle__slide__figcaption}>
              <span>{'INVESTMENT STRATEGY'}</span>
              <span>{'AND POTFOLIO'}</span>
            </figcaption>
          </figure>
        </div>

        <button
          type="button"
          className="-rotate-[30deg] absolute
    desktop:top-[35%] desktop:left-[30%]"
          ref={goToLeftRef}
        >
          <BsArrowLeftCircle color="#CBD2DC" size={60} />
        </button>
        <button
          type="button"
          className="rotate-[30deg] absolute 
             
    desktop:top-[35%] desktop:right-[30%]"
          ref={goToRightRef}
        >
          <BsArrowRightCircle color="#CBD2DC" size={60} />
        </button>
        {/* laptop:top-[35%] laptop:right-[30%] */}
        <button
          type="button"
          className="hidden
    rotate-[30deg] absolute
    desktop:top-[35%] desktop:right-[30%]
  "
          ref={returnFrontFromLeftRef}
        >
          <BsArrowRightCircle color="#CBD2DC" size={60} />
        </button>
        {/* laptop:top-[35%] laptop:left-[30%] */}
        <button
          type="button"
          className="-rotate-[30deg] absolute hidden

    desktop:top-[35%] desktop:left-[30%]"
          ref={btn3}
        >
          <BsArrowLeftCircle color="#CBD2DC" size={60} />
        </button>
        <p className={style.semicircle__slide__p}>
          <span>New residential property development</span>
          &nbsp;with general house & Land packages in low-mid density zones in
          NZ.
        </p>
      </div>
    </section>
  );
}

interface SlideMobileCardProps {
  name?: string;
  name2?: string;
  icon?: JSX.Element;
}
function SlideMobileCard({
  name = 'INVESTMENT STRATEGY',
  name2 = 'AND POTFOLIO',
  icon = InvestmentIcons[2],
}: SlideMobileCardProps) {
  return (
    <figure className={clsx(style.semicircle__slide__card)}>
      <div>{icon}</div>
      <figcaption className={style.semicircle__slide__figcaption}>
        <span>{name}</span>
        <span>{name2}</span>
      </figcaption>
    </figure>
  );
}

function SemiCircleSlideMobile() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width] = useInnerWidthState();
  const chevronWidth = 60;
  return (
    <>
      <div className="bg-kc-bg_lightgray mx-auto m-0 self-center pt-[2.375rem] pb-5">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          alwaysShowChevrons={false}
          infiniteLoop={true}
          numberOfCards={1}
          gutter={10}
          leftChevron={
            <button className="bg-kc-bg_lightgray">
              <BsArrowLeftCircle color="#CBD2DC" size={40} />
            </button>
          }
          rightChevron={
            <button className="bg-kc-bg_lightgray">
              <BsArrowRightCircle color="#CBD2DC" size={40} />
            </button>
          }
          chevronWidth={width.width >= 500 ? 200 : chevronWidth}
        >
          <SlideMobileCard
            icon={InvestmentIcons[0]}
            name="INVESTMENT STRATEGY"
            name2="AND POTFOLIO"
          />
          <SlideMobileCard
            icon={InvestmentIcons[1]}
            name={'RESIDENTIAL PROPETY'}
            name2={'DEVELOPMENTS'}
          />
          <SlideMobileCard />
        </ItemsCarousel>
      </div>
      <p className="text-kc-article_gray66 flex flex-col px-5 bg-kc-bg_lightgray pb-[5.9375rem] items-center">
        <span className="text-black">New residential property development</span>
        <span>
          with general house & Land packages in low-mid density zones in NZ.
        </span>
      </p>
    </>
  );
}

export default function InvestmentsTopSlide({
  onclick,
  onclick_2,
  onclick_3,
}: Props) {
  const [window] = useInnerWidthState();
  return (
    <>
      {window.width >= 981 ? (
        <SemiCircleSlide
          onclick={onclick}
          onclick_2={onclick_2}
          onclick_3={onclick_3}
        />
      ) : (
        <SemiCircleSlideMobile />
      )}
    </>
  );
}
