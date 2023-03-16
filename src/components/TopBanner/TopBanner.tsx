import home from '@/data/image.json';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
export function TopBanner() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h1Ref.current, { y: -10, opacity: 0, duration: 1 });
    tl.from(pRef.current, { opacity: 0, stagger: 0.1 });
  }, []);
  // mobile:h-[15rem] laptop:h-[45rem] desktop:h-[45rem]
  //  mobile:mt-[5.75rem] laptop:mt-[17.8125rem] desktop:mt-[17.8125rem]
  return (
    <section className="relative text-white">
      <img
        className="brightness-50 -z-50 w-full"
        src={`/assets/img/${home['home'][0].image_url1}`}
      />
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          ref={h1Ref}
          className="leading-none mobile:text-2xl inline-block laptop:text-[5rem] desktop:text-[5rem] justify-self-center mobile:font-medium laptop:font-medium desktop:font-bold"
        >
          Grow&nbsp;your&nbsp;investment
        </h1>
        <cite
          ref={pRef}
          className="-leading-8 mobile:text-xl laptop:text-[2.5rem] desktop:text-[2.5rem] not-italic"
        >
          start&nbsp;your&nbsp;journey&nbsp;with us
        </cite>
      </div>
    </section>
  );
}
