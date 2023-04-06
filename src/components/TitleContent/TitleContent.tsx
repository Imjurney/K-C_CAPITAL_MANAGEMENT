import TitleStyle from '@/components/TitleContent/TitleContent.module.css';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';

export interface TitleContent {
  content?: string;
  color?: 'Default' | 'White';
}

const Colors = {
  Default: TitleStyle.underlineBase,
  White: TitleStyle.underlineBase__white,
};
export function TitleContent({
  content = 'INVESTMENTS',
  color = 'Default',
}: TitleContent) {
  const h2Ref = useRef<HTMLHeadingElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleReduceWords = useCallback(
    debounce(() => {
      if (h2Ref.current?.textContent?.match('OTHER SERVICES')) {
        if (window.innerWidth >= 981) {
          h2Ref.current.textContent =
            'OTHER SERVICES WE PROVIDE TO OUR INVESTORS';
        } else {
          h2Ref.current.textContent = 'OTHER SERVICES';
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    if (h2Ref.current?.textContent?.match('OTHER SERVICES'))
      window.addEventListener('resize', handleReduceWords);
    return () => window.removeEventListener('resize', handleReduceWords);
  }, []);
  return (
    <>
      <h2 ref={h2Ref} className={clsx(Colors[color])}>
        {content}
      </h2>
    </>
  );
}
