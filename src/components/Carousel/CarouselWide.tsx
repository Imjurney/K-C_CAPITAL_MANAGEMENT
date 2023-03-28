import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { Button } from '@/components/Button/Button';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { MdApartment as Apart } from 'react-icons/md';
import style from '@/components/Carousel/Carousel.module.css';
import { IconContext } from 'react-icons';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import { Link, useNavigate } from 'react-router-dom';
import { CUSTOM_ICONS } from '@/data/icon/icon';
import { Circle } from '@/components/Circle/Circle';
import { useLocation } from 'react-router-dom';
type PropType = {
  options?: EmblaOptionsType;
  slides?: ReactNode[];
};

interface CarouselWideSlideCardProps {
  subject?: string;
  subject2?: string;
  description?: string;
  icon: {
    element?: Element[] | JSX.Element;
  };
  path: string;
  scroll: number;
}

function CarouselWideSlideCard({
  path,
  icon = {
    element: <Apart key={'Apart'} color="white" />,
  },
  subject = 'investment',
  subject2 = 'company',
  description,
  scroll,
}: CarouselWideSlideCardProps) {
  const [windowWidth] = useInnerWidthState();

  return (
    <>
      <dl className={style.carouselWide__card__wrapper}>
        <dt className={style.carouselWide__card__dt}>
          <figure className={style.carouselWide__card__icon}>
            <IconContext.Provider
              value={{
                color: 'white',
                size: windowWidth.width >= 1024 ? 48 : 24,
              }}
            >
              {icon.element}
            </IconContext.Provider>
          </figure>
          <figcaption className={style.carouselWide__card__figcaption}>
            {subject}&nbsp;{subject2}
          </figcaption>
        </dt>
        <dd className="self-center">
          <p className={style.carouselWide__card__p}>{description}</p>
        </dd>
        <div className={style.carouselWide__card__more__button}>
          <Link to={path}>
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
    </>
  );
}

function CarouselWideSlideCardGroup() {
  return CUSTOM_ICONS.map((item, index) => {
    return (
      <CarouselWideSlideCard
        key={index}
        subject={item.name}
        subject2={item.name2}
        description={item.discription}
        icon={{
          element: item.icon_name[0],
        }}
        path={item.path}
        scroll={item.scroll}
      />
    );
  });
}

export function CarouselWide(props: PropType) {
  const { options } = props; // props로 가져온 옵션과 슬라이드 리스트
  const [emblaRef, embla] = useEmblaCarousel(options); // 슬라이더 구현에 필요한 요소들을 useEmblaCarousel 에서 가져온다.
  const carouselRef = useRef<HTMLDivElement>(null);

  useEmblaCarousel.globalOptions = { loop: true };
  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <>
      <Circle embla={embla} />
      <div className={style.carouselWide__container}>
        <div className="overflow-hidden rounded-md" ref={emblaRef}>
          <div className="flex flex-col flex-wrap h-[20.625rem] flex-none">
            {CarouselWideSlideCardGroup().map((slide, index) => (
              <div
                id={index.toString()}
                ref={carouselRef}
                className="relative mr-4"
                key={index}
              >
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
    </>
  );
}
