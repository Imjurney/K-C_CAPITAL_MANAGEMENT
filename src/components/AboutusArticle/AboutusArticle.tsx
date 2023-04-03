import { useInnerWidthState } from '@/utils/useInnerWidthState';
import clsx from 'clsx';
import style from '@/components/AboutusArticle/AboutusArticle.module.css';
import { useState } from 'react';
import { FiMoreHorizontal as More, FiChevronUp as Fold } from 'react-icons/fi';
import article from '@/data/about_us_article.json';
import { useQuery } from '@tanstack/react-query';
export function AboutusArticle() {
  const [toggle, setToggle] = useState(true);
  const [width] = useInnerWidthState();
  const { data } = useQuery(
    ['Article_aboutus'],
    () => Promise.resolve(article),
    {
      staleTime: 100000,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <section
      className={clsx(
        'relative',
        width.width < 981 && toggle
          ? 'mobile:h-[33rem] mobile:pb-[3.75rem]'
          : 'mobile:h-[48rem] mobile:pb-[3.75rem]',
        width.width > 981 && toggle && 'mobile:h-[15em] mobile:pb-[3.75rem]',
        width.width > 981 && !toggle && 'mobile:h-[21em] mobile:pb-[3.75rem]'
      )} // ---> 720 size대가 어색해서 임의로 넣음.
    >
      <article
        className={clsx(
          'shadow-contents_shadow desktop:leading-9',
          style.article,
          [
            width.width < 1000 ? '-top-20' : ' -top-5',
            toggle ? 'mobile:translate-y-20' : 'mobile:translate-y-20',
          ]
        )}
      >
        <p className="mobile:pb-3 desktop:pb-10">
          <strong className="mobile:text-xl text-3xl desktop:font-normal">
            {`${data && data[0].article.article_strong}`}&nbsp;
          </strong>
          {data && data[0].article.article_1}
        </p>
        <p className="mobile:pb-3 desktop:pb-10 ">
          {data && data[0].article.article_2}
        </p>
        <p
          className={clsx('desktop:pb-10', [
            toggle ? 'mobile:hidden' : 'mobile:pb-3',
          ])}
        >
          {data && data[0].article.article_3}
        </p>
        <p className={toggle ? 'mobile:hidden' : 'mobile:pb-3'}>
          {data && data[0].article.article_4}
        </p>
        {width.width < 1000 && (
          <div className="flex justify-center py-3">
            <button
              aria-label="article toggle Button"
              type="button"
              aria-expanded={toggle ? 'false' : 'true'}
              onClick={() => setToggle((prev) => !prev)}
            >
              <h3 className="sr-only">article toggle Button</h3>
              {toggle ? (
                <More color="#848484" size={24} />
              ) : (
                <Fold size={25} color="#E7020F" />
              )}
            </button>
          </div>
        )}
      </article>
    </section>
  );
}
