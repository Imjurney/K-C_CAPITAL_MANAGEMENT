import TitleStyle from '@/components/TitleContent/TitleContent.module.css';
import type { TitleContent } from '@components/TitleContent/TitleContent';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { useRef, useCallback, useEffect } from 'react';

interface SubTitleContentProps extends TitleContent {
  subContent?: string;
}
export function SubTitleContent({
  content = 'Experience with K&C CAPITAL MANAGEMENT',
  subContent = 'This is a testimonials letter from customers who grow capital with us.',
}: SubTitleContentProps) {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleReduceWords = useCallback(
    debounce(() => {
      if (pRef.current)
        if (document.body.getBoundingClientRect().width <= 720) {
          pRef.current.style.display = 'none';
        } else {
          pRef.current.style.display = 'block';
        }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleReduceWords);
    return () => window.removeEventListener('resize', handleReduceWords);
  }, []);

  return (
    <div className="pt-[6.25rem] bg-kc-bg_lightgray desktop:pb-20 laptop:pb-[5.625rem] mobile:pt-[3.75rem] mobile:pb-[1.875rem]">
      <h2 ref={h2Ref} className={clsx(TitleStyle.underlineBase_sub)}>
        {content}
        <p ref={pRef} className={TitleStyle.p}>
          {subContent}
        </p>
      </h2>
    </div>
  );
}
