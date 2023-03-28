import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { SecondSection } from '@/components/SecondSection/SecondSection';
import InvestmentsTopSlide from '@/components/SemiCircleSlide/SemiCircleSlide';
import CarouselOpacity from '@/components/Carousel/CarouselOpacity';
import { EmblaOptionsType } from 'embla-carousel-react';
import investData from '@/data/investments.json';
import { FirstSection } from '@/components/FirstSection/FirstSection';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import MoveScroll from '@/components/MoveScroll/MoveScroll';
import useMoveScroll from '@/utils/useMoveScroll';
import { ForwardedRef, forwardRef, useRef } from 'react';
function InvestmentIntroduceSection() {
  return (
    <section className="pt-[7.5rem] mobile:pt-[3.75rem]">
      <TitleContent content="INVESTMENTS" />
      <p className="pt-[3.75rem] mobile:pt-[1.875rem] laptop:px-10 desktop:px-[10.5rem] mobile:px-5 leading-loose">
        <strong className="text-3xl mobile:text-base font-normal">
          {investData[0].contents_1_strong}
        </strong>
        &nbsp;{investData[0].contents_1}
      </p>
    </section>
  );
}

const ResidentalSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section ref={ref} className="pt-[12.5rem] mobile:pt-[3.75rem] bg-white">
      <TitleContent content="RESIDENTIAL PROPETY DEVELOPMENTS" />
      <article className="mobile:px-5 font-normal mobile:pt-8 mobile:pb-7 pb-14 mobile:text-sm laptop:text-lg desktop:text-lg pt-[3.75rem] laptop:px-8 desktop:px-[8.875rem]">
        <p className="leading-loose">{investData[1].contents_2}</p>
      </article>
      <CarouselOpacity slides={SLIDES} options={OPTIONS} />
    </section>
  );
});

function NZSection() {
  return (
    <section className="h-[200vh] bg-white mobile:pt-[7.5rem] pt-[12.5rem]">
      <TitleContent content="NZ LEADING RESIDENTIAL PROPERTY DEVELOPERS" />
      <article className="mobile:pt-[1.875rem] pt-[3.75rem] mobile:px-5 laptop:px-7 desktop:px-[8.875rem]">
        <p className="leading-loose mobile:text-sm text-lg">
          Single, Multi and Hi-end apartments NZ leading developers, they are
          carefully selected and screened by K&C Capital Management to maximise
          our investor’s security and returns.
        </p>
      </article>
    </section>
  );
}

function SubLogoSection() {
  const [window] = useInnerWidthState();
  return (
    <aside className="bg-kc-article_bg flex mobile:flex-col mobile:gap-3.5 items-center mobile:py-7 py-[5.625rem] gap-[6.25rem] justify-center">
      <img
        width={window.width > 1023 ? 207 : 120}
        src="/assets/img/investments/sub_logo.png"
        alt="K&C Sub Logo"
      />
      <img
        width={window.width > 1023 ? 207 : 120}
        src="/assets/img/investments/sub_logo.png"
        alt="K&C Sub Logo"
      />
      <img
        width={window.width > 1023 ? 207 : 120}
        src="/assets/img/investments/sub_logo.png"
        alt="K&C Sub Logo"
      />
    </aside>
  );
}
export default function InvestmentsPage() {
  const { element, onMoveToElement } = useMoveScroll();
  const secondElement = useRef<HTMLElement>(null);
  const ResidentalSectionElement = useRef<HTMLElement>(null);
  const MoveToElement = () => {
    secondElement.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const MoveToElementSecond = () => {
    ResidentalSectionElement.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
      <Header />
      <InvestmentIntroduceSection />
      <InvestmentsTopSlide
        onclick={onMoveToElement}
        onclick_2={MoveToElementSecond}
        onclick_3={MoveToElement}
      />
      <ResidentalSection ref={ResidentalSectionElement} />
      {/* <NZSection /> */}
      {/* <SubLogoSection /> */}

      <FirstSection ref={element} />
      <SecondSection ref={secondElement} />
      <MoveScroll />
      <Footer />
    </>
  );
}

ResidentalSection.displayName = 'ResidentalSection';
