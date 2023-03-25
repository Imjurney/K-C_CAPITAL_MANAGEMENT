import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import {
  CalcuIconDefault,
  GrowDefault,
  PassPortDefault,
  ReportDefault,
} from '@/data/icon/Icons';
import otherservice from '@/data/other_service.json';
import style from '@/pages/OtherServices/OtherServicePage.module.css';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const Directions = {
  Right: style.speech_bubble__right,
  Left: style.speech_bubble__left,
};

export default function OtherServicesPage() {
  return (
    <>
      <Header description="this page is otherservices page" />
      <section className="h-screen mobile:pt-[3.75rem] mobile:pb-10 ">
        <TitleContent content="OTHER SERVICES WE PROVIDE TO OUR INVESTORS" />
        <main className="mobile:mt-16">
          <GridItems />
        </main>
      </section>

      <Footer />
    </>
  );
}

const Icons = [
  {
    type: 'Calcu',
    element: <CalcuIconDefault />,
  },
  {
    type: 'PassPort',
    element: <PassPortDefault />,
  },
  {
    type: 'Report',
    element: <ReportDefault />,
  },
  {
    type: 'Grow',
    element: <GrowDefault />,
  },
];
interface OtherServiceProps {
  direction?: 'Left' | 'Right';
  // icontype?: 'Calcu' | 'PassPort' | 'Report' | 'Grow';
}

function GridItems({ direction = 'Right' }: OtherServiceProps) {
  const [number, setNumber] = useState(0);
  const ulRef = useRef<HTMLUListElement>(null);
  const { data } = useQuery(['Service_data'], () =>
    Promise.resolve(otherservice)
  );

  return (
    <>
      <ul ref={ulRef} className={style.grid__wrapper}>
        {data?.map((item, index) => {
          const findIcon = Icons.find((index) => index.type === item.icontype);

          return (
            <>
              <li id="grid__1">
                <figure className="flex flex-col gap-3 items-center justify-around">
                  <div className={style.round}>{findIcon?.element}</div>
                  <figcaption
                    className={
                      number === 0 ? style.figcation__active : style.figcation
                    }
                  >
                    {item.subject}
                  </figcaption>
                </figure>
              </li>
              <p
                role="listitem"
                id="decription"
                className={Directions[direction]}
              >
                <strong className={style.strong}>Tax and Returns</strong>
                Providing local Accounting and taxation service through our
                affiliated chartered accountant, giving you the clear picture
                and hassle-free professional expertise in accounting.
              </p>
            </>
          );
        })}
      </ul>
    </>
  );
}
