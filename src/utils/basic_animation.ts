import { MutableRefObject } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
export function basic_animation(
  ref_1: MutableRefObject<null>,
  ref_2: MutableRefObject<null>
) {
  // const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ref_2.current,
        start: 'top center',
        end: 'bottom bottom',
        toggleActions: 'restart none none none',
        markers: true,
        // pin: true,
      },
    })
    .from(ref_1.current, {
      y: 40,
      duration: 3,
      ease: 'power3.out',
      opacity: 0,
      delay: 1,
    });
}

export function aside_animation(
  ref_1: MutableRefObject<null>,
  ref_2: MutableRefObject<null>
) {
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ref_2.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none none',
        markers: true,
      },
    })
    .from(ref_1.current, {
      x: -40,
      duration: 2,
      ease: 'power3.out',
      opacity: 0,
    });
}
