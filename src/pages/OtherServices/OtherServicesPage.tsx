import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import MaxWidthWrapperLayout from '@/components/Layout/MaxWidthWrapperLayout';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import {
  CalcuIconDefault,
  GrowDefault,
  PassPortDefault,
  ReportDefault,
} from '@/data/icon/Icons';
import otherservice from '@/data/other_service.json';
import style from '@/pages/OtherServices/OtherServicePage.module.css';
import { useInnerWidthState } from '@/utils/useInnerWidthState';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { memo, ReactNode, SetStateAction, useState } from 'react';

interface GridProps {
  data:
    | {
        id: number;
        icontype: string;
        subject: string;
        contents_Direction: string;
        contents_strong: string;
        contents: string;
      }[]
    | undefined;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  toggle: boolean;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
}

interface GridSectionWrapperProps {
  children?: ReactNode;
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

const Directions = [
  { type: 'Right', css: style.speech_bubble__right },
  { type: 'Left', css: style.speech_bubble__left },
  { type: 'Left_Middle', css: style.speech_bubble__left__middle },
  { type: 'Right_Middle', css: style.speech_bubble__right__middle },
];

function GridSectionWrapper({ children }: GridSectionWrapperProps) {
  return (
    <>
      <h3 className="desktop:hidden text-center my-5 text-kc-article_gray">
        click the content below
        <p className="animate-bounce mt-2 text-kc-red">&#8595;</p>
      </h3>
      <ul className={style.grid__wrapper}>{children}</ul>
    </>
  );
}

const FirstGridSection = memo(
  ({ data, number, setNumber, toggle, setToggle }: GridProps) => {
    return (
      <>
        {data
          ?.filter((item) => item.id <= 2)
          .map((item, index) => {
            const findIcon = Icons.find(
              (iconIndex) => iconIndex.type === item.icontype
            );

            return (
              <>
                <li
                  onClick={() => {
                    setNumber(item.id);
                    setToggle((prev) => !prev);
                  }}
                  id="grid__1"
                  className={
                    number === item.id && !toggle ? style.li__active : style.li
                  }
                >
                  <figure id={index.toString()} className={style.figure_icon}>
                    <div className={style.round}>{findIcon?.element}</div>
                    <figcaption>{item.subject}</figcaption>
                  </figure>
                </li>
              </>
            );
          })}
        {data
          ?.filter((item) => item.id <= 2 && number === item.id)
          .map((item, index) => {
            const findDirection = Directions.find(
              (direction) => direction.type === item.contents_Direction
            );
            return (
              <>
                {!toggle && (
                  <div
                    key={`bubble__contents_${index}`}
                    role="listitem"
                    id={`decription_${index}`}
                    className={findDirection?.css}
                  >
                    <strong className={style.strong}>
                      {item.contents_strong}
                    </strong>
                    {item.contents.split(',').map((item, contents_index) => {
                      return (
                        <p
                          className={style.p_contents}
                          key={`other_service_${contents_index}`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
      </>
    );
  }
);

const SecondGridSection = memo(
  ({ data, number, setNumber, toggle, setToggle }: GridProps) => {
    return (
      <>
        {data
          ?.filter((item) => item.id === 3 || item.id === 4)
          .map((item, index) => {
            const findIcon = Icons.find(
              (iconIndex) => iconIndex.type === item.icontype
            );

            return (
              <>
                <li
                  onClick={() => {
                    setNumber(item.id);
                    setToggle((prev) => !prev);
                  }}
                  id="grid__1"
                  className={
                    number === item.id && !toggle ? style.li__active : style.li
                  }
                >
                  <figure className="flex flex-col gap-2 items-center justify-around pb-2 px-2">
                    <div className={style.round}>{findIcon?.element}</div>
                    <figcaption>{item.subject}</figcaption>
                  </figure>
                </li>
              </>
            );
          })}
        {data
          ?.filter((item) => item.id > 2 && number === item.id)
          .map((item, index) => {
            const findDirection = Directions.find(
              (direction) => direction.type === item.contents_Direction
            );
            return (
              <>
                {!toggle && (
                  <div
                    key={`bubble__${index}`}
                    role="listitem"
                    id={`decription_${index}`}
                    className={findDirection?.css}
                  >
                    <strong className={style.strong}>
                      {item.contents_strong}
                    </strong>
                    {item.contents.split(',').map((item, contents_index) => {
                      return (
                        <p
                          className={style.p_contents}
                          key={`other_service_${contents_index}`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
      </>
    );
  }
);

function GridItems() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [window] = useInnerWidthState();
  const { data } = useQuery(['Service_data'], () =>
    Promise.resolve(otherservice)
  );
  return (
    <GridSectionWrapper>
      {window.width < 1000 ? (
        <>
          <FirstGridSection
            data={data}
            number={number}
            setNumber={setNumber}
            toggle={toggle}
            setToggle={setToggle}
          />
          <SecondGridSection
            data={data}
            number={number}
            setNumber={setNumber}
            toggle={toggle}
            setToggle={setToggle}
          />
        </>
      ) : (
        <section className={style.img__wrapper}>
          {data?.map((item, index) => {
            return (
              <>
                <figure
                  onClick={() => setNumber(item.id)}
                  key={`other_service_image_${index}`}
                  className={clsx(
                    item.id === number
                      ? style.img__figure__active
                      : style.img__figure
                  )}
                >
                  <img
                    loading="lazy"
                    className={clsx(
                      item.id === number ? style.img__active : style.img
                    )}
                    src={`/assets/img/other/${item.path}`}
                    alt={`image about "${item.subject}"`}
                  />
                  <figcaption
                    id={`figcaption_${item.id}`}
                    className={clsx(
                      item.id === number
                        ? style.img__figcaption__active
                        : style.img__figcaption
                    )}
                  >
                    <span id={item.id.toString()}>{item.subject}</span>
                  </figcaption>
                </figure>
              </>
            );
          })}
          <MaxWidthWrapperLayout>
            <section className={style.speech_bubble_wrapper}>
              {data
                ?.filter((bubble) => bubble.id === number)
                .map((item, index) => {
                  const findDirection = Directions.find(
                    (direction) => direction.type === item.contents_Direction2
                  );
                  return (
                    <div
                      key={`bubble__${index}`}
                      role="listitem"
                      id={`decription_${index}`}
                      className={clsx(findDirection?.css, ' desktop:mt-14')}
                    >
                      <strong className={style.strong}>
                        {item.contents_strong}
                      </strong>
                      {item.contents.split(',').map((item, contents_index) => {
                        return (
                          <p
                            className={style.p_contents}
                            key={`other_service_${contents_index}`}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
            </section>
          </MaxWidthWrapperLayout>
        </section>
      )}
    </GridSectionWrapper>
  );
}
// mobile:mt-16 mobile:pb-10 bg-white laptop:mt-[5.125rem] desktop:mt-[3.75rem] pb-[3.875rem]
export default function OtherServicesPage() {
  return (
    <>
      <Header description="this page is otherservices page" />
      <section className="bg-black mobile:bg-white mobile:pb-10  mobile:flex mobile:flex-col mobile:items-center flex flex-col justify-center items-center">
        <main className="bg-white pt-[7.5rem]">
          <TitleContent content="OTHER SERVICES WE PROVIDE TO OUR INVESTORS" />
          <GridItems />
        </main>
      </section>
      <Footer />
    </>
  );
}

FirstGridSection.displayName = 'FirstGridSection';
SecondGridSection.displayName = 'SecondGridSection';
