import home from '@/data/image.json';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MaxWidthWrapperLayout from '@/components/Layout/MaxWidthWrapperLayout';
export function TopBanner() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h1Ref.current, { y: -10, opacity: 0, duration: 1 });
    tl.from(pRef.current, { opacity: 0, stagger: 0.1 });
  }, []);

  return (
    <section className="relative text-white bg-black">
      <MaxWidthWrapperLayout>
        <img
          className="brightness-50 -z-50 w-full"
          src={`/assets/img/${home['home'][0].image_url1}`}
          alt="K&C Capital Mangagement introduce Picture"
        />
        <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2
            ref={h1Ref}
            className="leading-none mobile:text-2xl block  desktop:text-[5rem] justify-self-center mobile:font-medium desktop:font-bold"
          >
            Grow&nbsp;your&nbsp;investment
          </h2>
          <cite
            ref={pRef}
            className="-leading-8 mobile:text-xl desktop:text-[2.5rem] not-italic"
          >
            start&nbsp;your&nbsp;journey&nbsp;with us
          </cite>
        </div>
      </MaxWidthWrapperLayout>
    </section>
  );
}
