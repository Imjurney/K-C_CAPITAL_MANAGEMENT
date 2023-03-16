import HomeStyle from '@/pages/Home/Home.module.css';
import { clsx } from 'clsx';
import {
  SlideImage,
  SlideItemDescription,
} from '@/components/SlideItem/SlideItem';

import HomeContents from '@/data/home.json';
import { useQuery } from '@tanstack/react-query';

export function GridBanner() {
  const { data } = useQuery(['HomeGrid'], () => Promise.resolve(HomeContents));
  console.log(data);
  return (
    <div className={HomeStyle.slide__grid__wrapper}>
      {data &&
        data[0].contents_2.description.map((item, index) => {
          return (
            <section
              role="banner"
              key={`GridBanner__${index}`}
              className={clsx('relative', item.position)}
            >
              <SlideImage className={clsx(HomeStyle.slide__grid__items)} />
              <SlideItemDescription
                order={item.order}
                description={item.contents}
              />
            </section>
          );
        })}
    </div>
  );
}
