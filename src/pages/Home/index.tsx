import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { TopBanner } from '@/components/TopBanner/TopBanner';
import HomeStyle from '@/pages/Home/Home.module.css';
import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react';
import { aside_animation, basic_animation } from '@/utils/basic_animation';
import home from '@/data/image.json';
import contents from '@/data/home.json';
import clsx from 'clsx';
import { FiChevronDown } from 'react-icons/fi';
import { Carousel } from '@/components/Carousel/Carousel';
import { GridBanner } from '@/components/GridBanner/GridBanner';
import { CarouselWide } from '@/components/Carousel/CarouselWide';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import { SlideItem } from '@/components/SlideItem/SlideItem';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/Button/Button';
import { gsap } from 'gsap/all';
import { INVESTOR_ICON } from '@/data/icon/icon';
import ScrollTrigger from 'gsap/ScrollTrigger';
import matchMedia from 'gsap';
import { Link } from 'react-router-dom';
import MoveScroll from '@/components/MoveScroll/MoveScroll';
import MaxWidthWrapperLayout from '@/components/Layout/MaxWidthWrapperLayout';
// import { WorkerCard } from '@/components/WorkerCard/WorkerCard';
// import { SubTitleContent } from '@/components/TitleContent/SubTitleContent';

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
  const ref = useRef(null);

  useEffect(() => {
    basic_animation(pRef, ref);
  }, [ref]);

  return (
    <div
      ref={ref}
      aria-labelledby="what we do"
      className={HomeStyle.bg_wrapper}
    >
      <p ref={pRef} className={clsx(HomeStyle.p)}>
        Helping&nbsp;you&nbsp;make&nbsp;a&nbsp;successful&nbsp;New&nbsp;Zealand
        &nbsp;real&nbsp;estate&nbsp;investment,
        <span className={HomeStyle.span}>
          your&nbsp;partner&nbsp;K&C&nbsp;CAPITAL&nbsp;MANAGEMENT.
        </span>
      </p>
      {/* <div ref={buttonWrapperRef} className={HomeStyle.button_wrapper}>
         <Button
          className="transition-all"
          type={'button'}
          layOutDesign={'Normal'}
        >
          Read&nbsp;more
        </Button> 
      </div> */}
    </div>
  );
}

function HowdoweManageInvestmentComment() {
  return (
    <p className={HomeStyle.comment_p}>
      <span>We suggest you </span>
      <strong className="font-medium text-black">
        the best investment destination
      </strong>
      <span className="block">based on rigorous review</span>
      <span>and detailed financial analysis.</span>
    </p>
  );
}

function WhatWedoBanner() {
  return (
    <>
      <section className="relative bg-black mobile:bg-white">
        <MaxWidthWrapperLayout>
          <div id="what we do" className={HomeStyle.title_wrapper}>
            <TitleContent content="What we do" />
          </div>
          <SubBanner />
          <SubBannerDescription />
        </MaxWidthWrapperLayout>
      </section>
    </>
  );
}

interface SlideBannerProps {
  children?: ReactNode;
}

function SlideBanner({ children }: SlideBannerProps) {
  return (
    <section className="bg-black">
      <MaxWidthWrapperLayout className="bg-white desktop:pt-[12.5rem] desktop:pb-[6.25rem] laptop:pt-[7.125rem] laptop:pb-[6.25rem] mobile:pt-[3.75rem]">
        <TitleContent content={`New Zealand Real Estate Investment,Why Us?`} />
        {children}
      </MaxWidthWrapperLayout>
    </section>
  );
}

function CircleAnimationSection() {
  return (
    <section className="mobile:bg-white bg-black">
      <MaxWidthWrapperLayout className="bg-kc-bg_lightgray relative overflow-hidden pt-[6.25rem] mobile:pb-10">
        <div className="mobile:pb-7 bg-kc-bg_lightgray">
          <TitleContent content="How do we manage investment?" />
        </div>
        <HowdoweManageInvestmentComment />
        <CarouselWide />
      </MaxWidthWrapperLayout>
    </section>
  );
}

function FooterBanner() {
  const asideRef = useRef(null);
  const pref = useRef(null);
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     aside_animation(pref, asideRef);
  //   }, asideRef);
  //   return () => ctx.revert();
  // }, []);
  return (
    <aside ref={asideRef} className="bg-black">
      <MaxWidthWrapperLayout>
        <div className="relative">
          <img
            className="opacity-30 h-[500px] mobile:h-[17.5rem] object-center object-cover mobile:object-bottom"
            src="/assets/img/home/buttomBanner/buttom_Banner.png"
            alt="footer banner image"
          />
          <p
            ref={pref}
            className={clsx(
              'text-white absolute right-10 top-20 text-3xl mobile:text-base mobile:text-center mobile:w-[10.875rem] mobile:ab_center'
            )}
          >
            Would you like to start your journey with us?
            <span className="block mt-5">&#10230;</span>
          </p>
        </div>
      </MaxWidthWrapperLayout>
    </aside>
  );
}

function AsideBanner() {
  const iconRef = useRef([]);
  const articleRef = useRef<HTMLDetailsElement>(null);
  const [width] = useInnerWidthState();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(matchMedia);
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        iconRef.current.forEach((element, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: articleRef.current,
                start: 'top center',
                end: 'top 50%',
                toggleActions: 'restart none none none',
              },
            })
            .from(iconRef.current[index], {
              delay: (index + 1) * 0.4,
              ease: 'power3.out',
              opacity: 0,
              duration: 1,
              y: -20,
            });
        });
        return () => ctx.revert();
      });
    });
  }, [articleRef, iconRef]);

  return (
    <article ref={articleRef} className={HomeStyle.article}>
      <TitleContent
        color={width.width < 1024 ? 'Default' : 'White'}
        content={`See what we provide to other investors`}
      />
      <ul key={'Investor_icons'}>
        {INVESTOR_ICON.map((item, index: number) => {
          return (
            <>
              <li
                ref={(el: never) => {
                  if (iconRef.current) iconRef.current[index] = el;
                }}
              >
                <figure className={HomeStyle.figure__icon__wrpper}>
                  <div className={HomeStyle.figure__icon}>
                    {item.icon_name['icon']}
                  </div>
                  <figcaption className={HomeStyle.figcaption__icon}>
                    <span>{item.name}</span>
                    <span>{item.name2}</span>
                  </figcaption>
                </figure>
              </li>
            </>
          );
        })}
      </ul>
      <div className="mt-14 mb-16 mobile:mb-12 mobile:mt-5">
        <Link to="/other_services">
          <Button type={'button'} layOutDesign={'Normal'}>
            Read more
          </Button>
        </Link>
      </div>
    </article>
  );
}

function Aside() {
  return (
    <section className="relative bg-black">
      <MaxWidthWrapperLayout>
        <aside className={clsx('absolute', HomeStyle.aside)}>
          There are other services for investors!
          <button
            className="flex w-16 h-16 justify-center items-center bg-kc-red"
            type="button"
          >
            <FiChevronDown size={40} />
          </button>
        </aside>
        <AsideBanner />
      </MaxWidthWrapperLayout>
    </section>
  );
}
/* -------------------------최종 컴포넌트------------------------------------------------- */
export default function HomePage() {
  const [windowSize] = useInnerWidthState();
  const { data } = useQuery(['SlideData'], () => Promise.resolve(contents));

  return (
    <>
      <Header description="this is Home Page" />
      <TopBanner />
      <WhatWedoBanner />
      <SlideBanner>
        {windowSize.width < 1024 ? (
          <Carousel
            slides={[
              data && (
                <SlideItem
                  imageName={data[0].contents_2.description[0].image_name}
                  alt={data[0].contents_2.description[0].contents}
                  order={data[0].contents_2.description[0].order}
                  description={data[0].contents_2.description[0].contents}
                  key={'content1'}
                />
              ),
              data && (
                <SlideItem
                  imageName={data[0].contents_2.description[1].image_name}
                  alt={data[0].contents_2.description[1].contents}
                  order={data[0].contents_2.description[1].order}
                  description={data[0].contents_2.description[1].contents}
                  key={'content2'}
                />
              ),
              data && (
                <SlideItem
                  imageName={data[0].contents_2.description[2].image_name}
                  alt={data[0].contents_2.description[2].contents}
                  order={data[0].contents_2.description[2].order}
                  description={data[0].contents_2.description[2].contents}
                  key={'content3'}
                />
              ),
              data && (
                <SlideItem
                  imageName={data[0].contents_2.description[3].image_name}
                  alt={data[0].contents_2.description[3].contents}
                  order={data[0].contents_2.description[3].order}
                  description={data[0].contents_2.description[3].contents}
                  key={'content4'}
                />
              ),
            ]}
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
      <CircleAnimationSection />
      <Aside />
      {/* <SubTitleContent /> */}
      {/* <WorkerCard /> */}
      <FooterBanner />
      <MoveScroll />
      <Footer />
    </>
  );
}
