import { gsap, Power4 } from 'gsap';

export function navigation_animation(
  targetNode: string,
  toggle: boolean | undefined
) {
  const tweens = gsap.to(targetNode, {
    translateX: -1000,
    duration: 2,
    ease: Power4.easeOut,
    opacity: 0.9,
    delay: 0.2,
  });
  if (toggle) {
    tweens.reverse();
    gsap.to(targetNode, {
      translateX: 0,
      duration: 3,
      ease: Power4.easeOut,
      opacity: 0.9,
    });
  }
}
