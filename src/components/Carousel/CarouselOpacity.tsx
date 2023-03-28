import imageByIndex from '@/components/Carousel/imageByindex';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';
import { flushSync } from 'react-dom';
import style from '@/components/Carousel/Carousel.module.css';
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function CarouselOpacity({ ...props }: PropType) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0.5, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll());
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);
  return (
    <div className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((index) => (
            <div
              className={style.embla__slide}
              key={`slide__${index}`}
              style={{
                ...(tweenValues.length && {
                  opacity: tweenValues[index],
                }),
              }}
            >
              <img
                className={style.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
