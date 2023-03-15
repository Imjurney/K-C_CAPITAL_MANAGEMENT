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

  return (
    <section className="text-center text-white flex flex-col items-center relative mobile:h-[15rem] laptop:h-[45rem] desktop:h-[45rem]">
      <img
        className="brightness-50 absolute -z-20 object-cover bg-center mobile:h-[15rem] laptop:h-[45rem] desktop:h-[45rem]"
        src={`/assets/img/${home['home'][0].image_url1}`}
      />
      <h1
        ref={h1Ref}
        className="mobile:text-2xl laptop:text-[5rem]  desktop:text-[5rem] justify-self-center mobile:mt-[5.75rem] laptop:mt-[17.8125rem] desktop:mt-[17.8125rem] mobile:font-medium laptop:font-medium desktop:font-bold"
      >
        Grow your investment
      </h1>
      <p
        ref={pRef}
        className="mobile:text-xl laptop:text-[2.5rem] desktop:text-[2.5rem]"
      >
        start your journey with us
      </p>
    </section>
  );
}
