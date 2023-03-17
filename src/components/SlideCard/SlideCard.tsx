import { MdApartment as Apart } from 'react-icons/md';
import SlideCardStyle from '@/components/SlideCard/SlideCard.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/all';
export function SlideCard() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(ref.current, {
      duration: 1,
      css: {
        backgroundColor: '#D3D3D3',
      },
    });
    tl.reverse();
  }, []);
  return (
    <figure ref={ref} className={SlideCardStyle.card_wrapper}>
      <div className={SlideCardStyle.icon_wrapper}>
        <Apart color="#E7020F" size={48} className="m-0" />
      </div>
      <figcaption className={SlideCardStyle.figcaption}>
        <span>investment</span>
        <span>company</span>
      </figcaption>
    </figure>
  );
}
