import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {
  LeftWorkerCardButton,
  RightWorkerCardButton,
} from './WorkerCardButton';
export function WorkerCard() {
  return (
    <div className="bg-gray-200 pb-30 p-10 pb-24">
      <p className="pt-20 pb-20">
        experience with K&C CAPITAL MANAGEMENT This is a testimonials letter
        from customers who grow capital with us.
      </p>
      <WorkerCardSlide />
    </div>
  );
}

function WorkerCardSlide() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={3}
      gutter={30}
      leftChevron={<LeftWorkerCardButton />}
      rightChevron={<RightWorkerCardButton />}
      outsideChevron
      chevronWidth={chevronWidth}
    >
      <WorkerCardItem />
      <WorkerCardItem />
      <WorkerCardItem />
      <WorkerCardItem />
      <WorkerCardItem />
    </ItemsCarousel>
  );
}

function WorkerCardItem() {
  return (
    <div className="w-[18.375rem] h-[25.4375rem] shadow-lg rounded-[0.625rem]  bg-white flex flex-col py-7">
      <div className="w-20 h-20 mb-5 bg-red-400 self-center"></div>
      <p className="text-center"> Maria J. Shuffler</p>
      <p className="text-center"> 40s / Programmer</p>
      <p className="px-7 line-clamp-[10] mt-7 text-ellipsis overflow-hidden text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget
        nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.
        Volutpat odio facilisis mauris sit amet massa. Quis hendrerit dolor
        magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit
        amet massa.
      </p>
    </div>
  );
}
