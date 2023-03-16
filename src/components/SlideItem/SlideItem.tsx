import clsx from 'clsx';
import { Button } from '@/components/Button/Button';
import HomeStyle from '@/pages/Home/Home.module.css';
type SlideitemProps = {
  className?: string;
};

interface SlideItemDescroption {
  order?: string;
  description?: string;
}

export function SlideItemDescription({
  order = 'First',
  description = 'K&C CAPITAL is a safe company',
}: SlideItemDescroption) {
  return (
    <div className={HomeStyle.slide__Description}>
      <span>{order}</span>
      <p className={HomeStyle.slide}>{description}</p>
      <Button
        color="White"
        type={'button'}
        layOutDesign={'More'}
        className={HomeStyle.slide__Description__button}
      >
        more
      </Button>
    </div>
  );
}

export function SlideImage({ className }: SlideitemProps) {
  return (
    <img
      className={clsx(HomeStyle.slide__imgs, className)}
      src="/assets/img/home/slide/slide_1.jpeg"
      alt=""
    />
  );
}
export function SlideItem() {
  return (
    <>
      <SlideImage />
      <SlideItemDescription />
    </>
  );
}
