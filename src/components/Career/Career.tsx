import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface CareerProps {
  careerfrom1: number;
  careerto1: number;
  detail1: string;
  careerfrom2: number;
  careerto2: string;
  detail2: string;
}
export function Career({
  careerfrom1 = 2010,
  careerto1 = 2014,
  detail1 = ' Quantity Surveyor of Design Plus Build Ltd',
  careerfrom2 = 2015,
  careerto2 = 'present',
  detail2 = 'Director of GNS Interior Systems Ltd',
}: CareerProps) {
  const parentsRef = useRef(null);
  const presentRef = useRef(null);
  const lineRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: parentsRef.current,
            start: 'top center',
            end: 'buttom center',
            toggleActions: 'restart none none none',
          },
        })
        .to(lineRef.current, {
          yPercent: -10,
          duration: 2,
          ease: 'power3.out',
          opacity: 1,
          css: { height: 74 },
        })
        .from(presentRef.current, {
          yPercent: -10,
          duration: 1,
          ease: 'power3.out',
          opacity: 0,
          delay: -0.7,
        });
    }, '');
    return () => ctx.revert();
  }, []);

  return (
    <div ref={parentsRef} className="flex">
      <div className="inline-flex flex-col">
        <div className="w-4 h-4 rounded-full bg-kc-contact_border"></div>
        <div
          ref={lineRef}
          className="w-0 border self-center border-kc-contact_border"
        ></div>
        <div className="w-4 h-4 rounded-full bg-kc-contact_border"></div>
      </div>
      <div className="ml-3.5 flex flex-col mobile:gap-10 gap-8">
        <div className="flex flex-col">
          <span className="text-kc-contact_gray mobile:font-normal font-bold text-xl">
            {careerfrom1}&nbsp;-&nbsp;{careerto1}
          </span>
          <span className="mobile:text-sm mobile:font-bold text-kc-contact_gray text-base">
            {detail1}
          </span>
        </div>
        <div ref={presentRef} className="flex flex-col">
          <span className="text-kc-contact_gray mobile:font-normal mobie:text-base text-xl font-bold">
            {careerfrom2}&nbsp;-&nbsp;{careerto2}
          </span>
          <span className="mobile:text-sm mobile:font-bold text-kc-content_darkgray text-base">
            {detail2}
          </span>
        </div>
      </div>
    </div>
  );
}
