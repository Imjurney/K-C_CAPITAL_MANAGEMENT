import TitleStyle from '@/components/TitleContent/TitleContent.module.css';
import clsx from 'clsx';

import { useEffect, useRef } from 'react';

interface TitleContent {
  content?: string;
}
export function TitleContent({ content = 'INVESTMENTS' }: TitleContent) {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (h2Ref.current?.textContent?.match('OTHER SERVICES')) {
        if (document.body.getBoundingClientRect().width <= 720) {
          h2Ref.current.textContent = 'OTHER SERVICES';
        } else {
          h2Ref.current.textContent =
            'OTHER SERVICES WE PROVIDE TO OUR INVESTORS';
        }
      }
    });
  }, []);
  return (
    <h2 ref={h2Ref} className={clsx(TitleStyle.underlineBase)}>
      {content}
    </h2>
  );
}
