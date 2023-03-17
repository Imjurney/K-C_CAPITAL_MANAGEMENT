import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { MdApartment as Apart } from 'react-icons/md';
import style from '@/components/Carousel/Carousel.module.css';
import { IconContext } from 'react-icons';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import { Link } from 'react-router-dom';
type PropType = {
  options?: EmblaOptionsType;
  slides?: ReactNode[];
};

type CarouselWideSlideCardType = {
  icon?: ReactNode;
};

interface CarouselWideSlideCardProps {
  icon?: ReactNode;
  subject?: string;
  description?: string;
}

function CarouselWideSlideCard({
  subject = ' investment company',
  description = 'We invest in companies developing real estate, especially in residential properties where the securities provided are safe and sound. We carefully select the companies we invest through ourextensive research and analysis of the companies’ performance, credibility, and potential to grow.',
}: CarouselWideSlideCardProps) {
  const [window] = useInnerWidthState();
  return (
    <dl className={style.carouselWide__card__wrapper} key={1}>
      <dt className={style.carouselWide__card__dt}>
        <figure className={style.carouselWide__card__icon}>
          <IconContext.Provider
            value={{
              size: window.width >= 1024 ? 48 : 24,
            }}
          >
            <Apart color="white" />
          </IconContext.Provider>
        </figure>
        <figcaption className={style.carouselWide__card__figcaption}>
          {subject}
        </figcaption>
      </dt>
      <dd className="self-center">
        <p className={style.carouselWide__card__p}>{description}</p>
      </dd>
      <div className={style.carouselWide__card__more__button}>
        <Link to={'/Contact'}>
          <Button
            className={style.button__outline}
            color="White"
            type={'button'}
            layOutDesign={'Normal'}
          >
            ReadMore
          </Button>
        </Link>
      </div>
    </dl>
  );
}
export function CarouselWide(props: PropType) {
  const { options, slides } = props; // props로 가져온 옵션과 슬라이드 리스트
  const [emblaRef, embla] = useEmblaCarousel(options); // 슬라이더 구현에 필요한 요소들을 useEmblaCarousel 에서 가져온다.
  const [selectedIndex, setSelectedindex] = useState(0); // 현재 보여지는 인덱스를 설정
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  useEmblaCarousel.globalOptions = { loop: true };
  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedindex(embla.selectedScrollSnap());
    // selectedScrollSnap:  선택한 스냅 Point의 인덱스를 가져온다.
  }, [embla, setSelectedindex]);
  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className={style.carouselWide__container}>
      <div className="overflow-hidden rounded-md" ref={emblaRef}>
        <div className="flex flex-col flex-wrap h-[20.625rem] flex-none">
          {[
            <CarouselWideSlideCard key={1} />,
            <CarouselWideSlideCard key={2} />,
            <CarouselWideSlideCard key={3} />,
          ].map((slide, index) => (
            <div className="relative mr-4" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-8 ml-4 pt-[3.75rem] mobile:hidden">
        <button
          className={style.carouselWide__card__button}
          onClick={scrollPrev}
        >
          <HiOutlineArrowLeft size={'32'} />
        </button>
        <button
          onClick={scrollNext}
          className={style.carouselWide__card__button}
        >
          <HiOutlineArrowRight size={'32'} strokeWidth={0.1} />
        </button>
      </div>
    </div>
  );
}
