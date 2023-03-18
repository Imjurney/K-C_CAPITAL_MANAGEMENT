import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { TopBanner } from '@/components/TopBanner/TopBanner';
import HomeStyle from '@/pages/Home/Home.module.css';
import { ReactNode, useEffect, useRef } from 'react';
import { basic_animation } from '@/utils/basic_animation';
import home from '@/data/image.json';
import contents from '@/data/home.json';
import clsx from 'clsx';
import { Carousel } from '@/components/Carousel/Carousel';
import { GridBanner } from '@/components/GridBanner/GridBanner';
import { Circle } from '@/components/Circle/Circle';
import { CarouselWide } from '@/components/Carousel/CarouselWide';
import { useInnerWidthState } from '@/utils/useInnerWidthState';

function SubBanner() {
  return (
    <img
      src={`/assets/img/home/${home.home[1].image_url2}`}
      className={clsx(HomeStyle.image, 'desktop:ab_center laptop:ab_center')}
      alt="k&c capital Management introduce picture"
    />
  );
}

function SubBannerDescription() {
  const pRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  useEffect(() => {
    basic_animation(pRef, buttonWrapperRef);
  }, []);

  return (
    <div aria-labelledby="what we do" className={HomeStyle.bg_wrapper}>
      <p ref={pRef} className={clsx(HomeStyle.p)}>
        Helping&nbsp;you&nbsp;make&nbsp;a&nbsp;successful&nbsp;New&nbsp;Zealand
        &nbsp;real&nbsp;estate&nbsp;investment,
        <span className={HomeStyle.span}>
          your&nbsp;partner&nbsp;K&C&nbsp;CAPITAL&nbsp;MANAGEMENT.
        </span>
      </p>
      <div ref={buttonWrapperRef} className={HomeStyle.button_wrapper}>
        <Button
          className="transition-all"
          type={'button'}
          layOutDesign={'Normal'}
        >
          Read&nbsp;more
        </Button>
      </div>
    </div>
  );
}

function WhatWedoBanner() {
  return (
    <>
      <section className="relative">
        <div id="what we do" className={HomeStyle.title_wrapper}>
          <TitleContent content="What we do" />
        </div>
        <SubBanner />
        <SubBannerDescription />
      </section>
    </>
  );
}
interface SlideBannerProps {
  children?: ReactNode;
}

function SlideBanner({ children }: SlideBannerProps) {
  return (
    <section className="pb-9 pt-14 w-full bg-white">
      <TitleContent content={`New Zealand Real Estate Investment,Why Us?`} />
      {children}
    </section>
  );
}

export default function HomePage() {
  const [windowSize] = useInnerWidthState();
  return (
    <>
      <Header />
      <TopBanner />
      <WhatWedoBanner />
      <SlideBanner>
        {windowSize.width < 1024 ? (
          <Carousel
            slides={
              [
                // <SlideItem
                //   imageName="slide_1.jpeg"
                //   alt="K&C CAPITAL is a safe company."
                //   key={'tewt1'}
                // />,
                // <SlideItem key={'tewt2'} />,
                // <SlideItem key={'tewt3'} />,
                // <SlideItem key={'tewt4'} />,
                // <SlideItem key={'tewt5'} />,
              ]
            }
            options={{
              align: 'start',
              loop: true,
              skipSnaps: true,
              inViewThreshold: 0.3,
            }}
          />
        ) : (
          <GridBanner />
        )}
      </SlideBanner>
      <section className="h-[83.4375rem] pt-[6.25rem] bg-kc-bg_lightgray relative">
        <div className="pb-[3.75rem]">
          <TitleContent content="How do we manage investment?" />
        </div>
        <p className="absolute left-1/2  leading-normal text-kc-article_gray66 top-1/3 whitespace-pre-line inline-block text-2xl text-start">
          <span>We suggest you </span>
          <strong className="font-medium text-black">
            the best investment destination
          </strong>
          <span className="block">based on rigorous review</span>
          <span>and detailed financial analysis.</span>
        </p>
        <Circle />
        {/* flex flex-col text-base w-[16.375rem] z-20" */}
        <CarouselWide />
      </section>
      <Footer />
    </>
  );
}
