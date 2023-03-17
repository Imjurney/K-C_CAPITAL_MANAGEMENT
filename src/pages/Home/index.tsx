import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { TopBanner } from '@/components/TopBanner/TopBanner';
import HomeStyle from '@/pages/Home/Home.module.css';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { basic_animation } from '@/utils/basic_animation';
import home from '@/data/image.json';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { Carousel } from '@/components/Carousel/Carousel';
import { SlideItem } from '@/components/SlideItem/SlideItem';
import { GridBanner } from '@/components/GridBanner/GridBanner';
import LogoImage from '@/assets/Logo_white.svg';
import { MdApartment as Apart } from 'react-icons/md';
import { SlideCard } from '@/components/SlideCard/SlideCard';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { CarouselWide } from '@/components/Carousel/CarouselWide';
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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
      });
    }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        {/* 여긴 원형 */}
        {/* <div className="absolute -left-[21.5625rem] py-7">
          <div className="bg-red-200 w-[57.125rem] h-[57.125rem] rounded-full flex justify-center items-center">
            <div className="bg-white w-[28.625rem] h-[28.625rem] rounded-full -left-[7.3125rem] outline outline-kc-red outline-[5.75rem] flex items-center justify-center">
              <img
                src={LogoImage}
                width={200}
                alt="K&C Capital Management Logo"
              />
            </div>
          </div>
        </div> */}
        {/* 여기까지 */}
        <CarouselWide />
      </section>
      <Footer />
    </>
  );
}
