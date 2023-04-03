import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { useState, useCallback, useEffect, ReactNode } from 'react';

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};
export function Carousel(props: PropType) {
  const { options, slides } = props; // props로 가져온 옵션과 슬라이드 리스트
  const [emblaRef, embla] = useEmblaCarousel(options); // 슬라이더 구현에 필요한 요소들을 useEmblaCarousel 에서 가져온다.
  const [selectedIndex, setSelectedindex] = useState(0); // 현재 보여지는 인덱스를 설정
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // 스크롤 스냅 Point 를 설정할 때 사용할 state

  // 현재 선택된 슬라이더의 순서(인덱스)를 저장을 위한 함수
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedindex(embla.selectedScrollSnap());
    // selectedScrollSnap:  선택한 스냅 Point의 인덱스를 가져온다.
  }, [embla, setSelectedindex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <div className="relative w-full rounded-md">
      <div
        className="overflow-hidden relative w-[21rem] mx-auto m-0 h-[23.75rem] rounded-md"
        ref={emblaRef}
      >
        <div className="flex flex-col flex-wrap h-[23.75rem] ml-4 flex-none">
          {slides.map((slide, index) => (
            <div className="relative mr-4" key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className="absolute right-2 bottom-2 bg-kc-footer_lightgray opacity-80 rounded-full">
          <div className="flex justify-evenly items-center text-xs w-9 font-semibold">
            <span className="text-kc-contents_dark">{selectedIndex + 1}</span>
            <div className="w-[2.05px] h-[2.05px] rounded-full bg-kc-footer_gray" />
            <span className="text-kc-footer_gray">{slides.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
