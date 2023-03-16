import { MutableRefObject } from 'react';
import { gsap } from 'gsap/all';
export function basic_animation(
  ref_1: MutableRefObject<null>,
  ref_2: MutableRefObject<null>
) {
  gsap.from(ref_1.current, {
    y: -20,
    duration: 2,
    ease: 'power3.out',
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: ref_1.current,
      markers: true,
      start: 'top center',
    },
  });
  gsap.from(ref_2.current, {
    y: 20,
    duration: 2,
    ease: 'power3.out',
    opacity: 0,
    delay: 1,
    stagger: 2,
    scrollTrigger: {
      trigger: ref_2.current,
      markers: true,
      start: 'top center',
    },
  });
}
