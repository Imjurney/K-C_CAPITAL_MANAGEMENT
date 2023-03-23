import HomeStyle from '@/pages/Home/Home.module.css';
import { clsx } from 'clsx';
import {
  SlideImage,
  SlideItemDescription,
} from '@/components/SlideItem/SlideItem';

import HomeContents from '@/data/home.json';
import { useQuery } from '@tanstack/react-query';

export function GridBanner() {
  const { data } = useQuery(['HomeGrid'], () => Promise.resolve(HomeContents), {
    staleTime: 10,
  });

  return (
    <div className={clsx(HomeStyle.slide__grid__wrapper)}>
      {data &&
        data[0].contents_2.description.map((item, index) => {
          return (
            <div role={`banner_${index + 1}`} key={`GridBanner__${index}`}>
              <SlideImage
                imageName={item.image_name}
                alt={item.contents}
                className={clsx(HomeStyle.slide__grid__items)}
                key={`GridBanner__${index}`}
              />

              <SlideItemDescription
                order={item.order}
                description={item.contents}
              />
            </div>
          );
        })}
    </div>
  );
}
