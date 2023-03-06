import TitleStyle from '@/components/TitleContent/TitleContent.module.css';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

interface TitleContent {
  content?: string;
}
export function TitleContent({ content = 'INVESTMENTS' }: TitleContent) {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log(document.body.style.minWidth);
    if (document.body.clientWidth < 1280) {
      console.log(h2Ref.current?.style.width);
      h2Ref.current?.textContent?.match('OTHER SERVICES')
        ? (h2Ref.current.innerText = 'OTHER SERVICE')
        : '';
    }
  }, []);
  return (
    <h2 ref={h2Ref} className={clsx(TitleStyle.underlineBase)}>
      {content}
    </h2>
  );
}
