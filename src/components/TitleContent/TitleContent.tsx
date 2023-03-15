import TitleStyle from '@/components/TitleContent/TitleContent.module.css';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

export interface TitleContent {
  content?: string;
}
export function TitleContent({ content = 'INVESTMENTS' }: TitleContent) {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleReduceWords = useCallback(
    debounce(() => {
      if (h2Ref.current?.textContent?.match('OTHER SERVICES')) {
        if (document.body.getBoundingClientRect().width <= 720) {
          h2Ref.current.textContent = 'OTHER SERVICES';
        } else {
          h2Ref.current.textContent =
            'OTHER SERVICES WE PROVIDE TO OUR INVESTORS';
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleReduceWords);
    return () => window.removeEventListener('resize', handleReduceWords);
  }, []);
  return (
    <>
      <h2 ref={h2Ref} className={clsx(TitleStyle.underlineBase)}>
        {content}
      </h2>
    </>
  );
}
