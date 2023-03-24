import AboutUsStyle from '@/pages/AboutUs/AboutUsPage.module.css';
import { aside_animation } from '@/utils/basic_animation';
import clsx from 'clsx';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function AboutusBanner() {
  const figureRef = useRef(null);
  const pRef = useRef(null);
  const pRef_second = useRef(null);
  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        aside_animation(pRef, figureRef);
        aside_animation(pRef_second, figureRef);
      });
    }, figureRef);
    return () => cxt.revert();
  }, []);

  return (
    <figure ref={figureRef} className={clsx('relative', AboutUsStyle.figure)}>
      <img
        className="object-center w-full laptop:h-[45rem] desktop:h-[45rem] object-cover"
        src="/public/assets/img/aboutus/top_bg.png"
        alt=""
      />
      <figcaption className={AboutUsStyle.figcaption}>
        <p ref={pRef}> K&C CAPITAL MANAGEMENT Helps</p>
        <div ref={pRef_second} id="paragragh_wrapper">
          <p>you make a successful New Zealand real</p>
          <p>estate investment.</p>
        </div>
      </figcaption>
    </figure>
  );
}
