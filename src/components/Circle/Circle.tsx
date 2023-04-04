import { SlideCard } from '@/components/SlideCard/SlideCard';
import LogoImage from '@/assets/Logo_white.svg';
import { VariationIcon } from '@/data/icon/icon';
import { useRef, useState } from 'react';
import clsx from 'clsx';
// import { EmblaCarouselType } from 'embla-carousel-react';
import { CarouselWideSlideCardGroup } from '@/components/Carousel/CarouselWide';

function BackgroundCircleDesign() {
  return (
    <div className="fix desktop:-translate-x-[27rem] py-7 mobile:hidden">
      <div className="bg-white w-[57.125rem] h-[57.125rem] rounded-full flex justify-center items-center">
        <div className="bg-white w-[28.625rem] h-[28.625rem] rounded-full -left-[117px] outline outline-kc-red outline-[5.75rem] flex items-center justify-center">
          <img
            src={LogoImage}
            width={200}
            className="desktop:ml-40"
            alt="K&C Capital Management Logo"
          />
        </div>
      </div>
    </div>
  );
}

export function Circle() {
  const [selectedIndex, setSelectedindex] = useState(0);

  const slideCardRef = useRef(null);
  const slideCardRefs2 = useRef(null);
  const slideCardRefs3 = useRef(null);

  return (
    <>
      <BackgroundCircleDesign />
      <SlideCard
        onclick={() => setSelectedindex(0)}
        ref={slideCardRef}
        name="investment"
        name2="company"
        icon={VariationIcon[0]}
        className={clsx(
          'fix desktop:-translate-y-[560%] desktop:translate-x-[75%] cursor-pointer',
          selectedIndex === 0
            ? 'scale-125 duration-300 ease-in-out'
            : 'duration-300 ease-in-out'
        )}
      />
      <SlideCard
        onclick={() => setSelectedindex(1)}
        ref={slideCardRefs2}
        name="investment"
        name2="Strategy"
        icon={VariationIcon[1]}
        className={clsx([
          'fix desktop:-translate-y-[360%] desktop:translate-x-[65%] cursor-pointer',
          selectedIndex === 1
            ? 'scale-125 duration-300 ease-in-out'
            : 'duration-300 ease-in-out',
        ])}
      />
      <SlideCard
        onclick={() => setSelectedindex(2)}
        ref={slideCardRefs3}
        name="Secured"
        name2="Reinvestment"
        icon={VariationIcon[2]}
        className={clsx(
          'fix desktop:-translate-y-[155%] desktop:-translate-x-[145%] cursor-pointer',
          selectedIndex === 2
            ? 'scale-125 duration-300 ease-in-out'
            : 'duration-300 ease-in-out'
        )}
      />
      {
        <div className="absolute top-1/2 right-4">
          {CarouselWideSlideCardGroup()
            .filter((slide, index) => index === selectedIndex)
            .map((slide, index) => (
              <div id={`home_circle_slider_${index}`} key={index}>
                {<p>{slide}</p>}
              </div>
            ))}
        </div>
      }
    </>
  );
}

/* ------------------------------슬라이드-------------------------------------------- */
// interface emblaProps {
//   embla: EmblaCarouselType | undefined;
// }
// interface emblaProps {
//   embla: EmblaCarouselType | undefined;
// }
// export function Circle({ embla }: emblaProps) {
//   const [selectedIndex, setSelectedindex] = useState(0);
//
//   const slideCardRef = useRef(null);
//   const slideCardRefs2 = useRef(null);
//   const slideCardRefs3 = useRef(null);
//
//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setSelectedindex(embla.selectedScrollSnap());
//   }, [embla, setSelectedindex]);
//
//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     embla.on('select', onSelect);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [embla, setSelectedindex]);
//
//   return (
//     <>
//       <BackgroundCircleDesign />
//       <SlideCard
//         ref={slideCardRef}
//         name="investment"
//         name2="company"
//         icon={VariationIcon[0]}
//         className={clsx(
//           'fix desktop:-translate-y-[560%] desktop:translate-x-[80%]',
//           selectedIndex === 0
//             ? 'scale-125 duration-300 ease-in-out'
//             : 'duration-300 ease-in-out'
//         )}
//       />
//       <SlideCard
//         ref={slideCardRefs2}
//         name="investment"
//         name2="Strategy"
//         icon={VariationIcon[1]}
//         className={clsx([
//           'fix desktop:-translate-y-[360%] desktop:translate-x-[115%]',
//           selectedIndex === 1
//             ? 'scale-125 duration-300 ease-in-out'
//             : 'duration-300 ease-in-out',
//         ])}
//       />
//       <SlideCard
//         ref={slideCardRefs3}
//         name="Secured"
//         name2="Reinvestment"
//         icon={VariationIcon[2]}
//         className={clsx(
//           'fix desktop:-translate-y-[155%] desktop:-translate-x-[110%]',
//           selectedIndex === 2
//             ? 'scale-125 duration-300 ease-in-out'
//             : 'duration-300 ease-in-out'
//         )}
//       />
//     </>
//   );
// }
