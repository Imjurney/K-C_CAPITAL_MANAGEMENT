import { ReactNode, useCallback, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {
  LeftWorkerCardButton,
  RightWorkerCardButton,
} from './WorkerCardButton';
import testimonialData from '@/data/testimonials.json';
import style from '@/components/WorkerCard/WorkerCard.module.css';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
export function WorkerCard() {
  const [window] = useInnerWidthState();
  return (
    <div className="z-40 bg-kc-bg_lightgray desktop:p-10 pb-30 pb-24 mobile:pt-7 desktop:pt-[9.0625rem]">
      {window.width > 981 ? (
        <WorkerCardItem />
      ) : (
        <MobileWorkerCard slides={[]} />
      )}
    </div>
  );
}

const AvatarType = [
  {
    name: 'Woman',
    css: style.img_w,
  },
  {
    name: 'Man_v',
    css: style.img_v,
  },
  {
    name: 'Man_Glasses',
    css: style.img_glasses,
  },
];

function WorkerCardItem() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  const { data } = useQuery(
    ['WorkerData'],
    () => Promise.resolve(testimonialData),
    {
      staleTime: 100000,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={3}
      gutter={10}
      leftChevron={<LeftWorkerCardButton />}
      rightChevron={<RightWorkerCardButton />}
      outsideChevron
      chevronWidth={chevronWidth}
    >
      {data?.map((item, index) => {
        const findType = AvatarType.find((types) => types.name === item.type);
        return (
          <div
            key={`worker_${index}`}
            className={clsx(style.slide__wrapper, 'shadow-lg')}
          >
            <div
              className={clsx(
                'mb-5 self-center',
                style.image_wrapper,
                findType?.css
              )}
            ></div>
            <p className="text-center">{item.name}</p>
            <p className="text-center text-kc-article_gray">
              {item.age}&nbsp;/&nbsp;{item.Job_title}
            </p>
            <p className="px-7 line-clamp-[9] mt-7 text-sm text-kc-article_gray">
              {item.article}
            </p>
          </div>
        );
      })}
    </ItemsCarousel>
  );
}

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

function MobileWorkerCard({ ...props }: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <>
      <div className={style.embla__mobile}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex h-auto">
            <MobileWorkerItem />
            <MobileWorkerItem />
            {/* <MobileWorkerItem /> */}
          </div>
        </div>
      </div>
      {/* <div className="w-8 h-8">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
}

function MobileWorkerItem() {
  const { data } = useQuery(
    ['WorkerData'],
    () => Promise.resolve(testimonialData),
    {
      staleTime: 100000,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <div className="flex flex-col gap-5">
      {data
        ?.filter((_, index) => index <= 2)
        .map((item, index) => {
          const findType = AvatarType.find((types) => types.name === item.type);
          return (
            <div
              key={`worker_${index}`}
              className={clsx(style.slide__wrapper_mobile, 'rounded-[1.25rem]')}
            >
              <div className="flex gap-5">
                <div
                  className={clsx(
                    style.image_wrapper,
                    findType?.css,
                    'ml-5 mt-5'
                  )}
                ></div>
                <p className="flex flex-col mt-4">
                  <span>{item.name}</span>
                  <span className="text-kc-article_gray">
                    {item.age}&nbsp;/&nbsp;{item.Job_title}
                  </span>
                </p>
              </div>
              <p className="px-7 line-clamp-[7] mt-4 text-sm text-kc-article_gray">
                {item.article}
              </p>
            </div>
          );
        })}
    </div>
  );
}

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

export const DotButton: React.FC<DotButtonPropType> = ({
  ...props
}: DotButtonPropType) => {
  const { selected, onClick } = props;

  return (
    <button className={'w-4 h-4'} type="button" onClick={onClick}></button>
  );
};
