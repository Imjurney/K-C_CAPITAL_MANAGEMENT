import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/Button/Button';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { MdApartment as Apart } from 'react-icons/md';
import style from '@/components/Carousel/Carousel.module.css';
type PropType = {
  options?: EmblaOptionsType;
  slides?: ReactNode[];
};

function CarouselWideSlideCard() {
  return (
    <dl className={style.carouselWide__card__wrapper} key={1}>
      <dt className={style.carouselWide__card__dt}>
        <figure className={style.carouselWide__card__icon}>
          <Apart color="white" size={48} className="m-0" />
        </figure>
        <figcaption className={style.carouselWide__card__figcaption}>
          investment company
        </figcaption>
      </dt>
      <dd>
        <p className={style.carouselWide__card__p}>
          {
            'We invest in companies developing real estate, especially in residential properties where the securities provided are safe and sound. We carefully select the companies we invest through ourextensive research and analysis of the companies’ performance, credibility, and potential to grow.'
          }
        </p>
      </dd>
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
    <div className="laptop:w-[32rem] desktop:w-[37rem] bg-slate-200 rounded-md">
      <div className="overflow-hidden relative rounded-md" ref={emblaRef}>
        <div className="flex flex-col flex-wrap h-[240px] flex-none">
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
      <div className="flex items-center justify-center">
        <Button
          className="border-2 border-black self-center"
          color="White"
          type={'button'}
          layOutDesign={'Normal'}
        >
          ReadMore
        </Button>
      </div>
      <div className="flex gap-8 ml-4 pt-[3.75rem]">
        <button onClick={scrollPrev}>
          <HiOutlineArrowLeft size={32} />
        </button>
        <button onClick={scrollNext}>
          <HiOutlineArrowRight size={32} strokeWidth={0.1} />
        </button>
      </div>
    </div>
  );
}
