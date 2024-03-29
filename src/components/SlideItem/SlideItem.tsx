import clsx from 'clsx';
// import { Button } from '@/components/Button/Button';
import HomeStyle from '@/pages/Home/Home.module.css';

interface SlideItemDescroption {
  order?: string;
  description?: string;
}
interface SlideitemProps extends SlideItemDescroption {
  className?: string;
  imageName?: string;
  alt?: string;
}

export function SlideItemDescription({
  order = 'First',
  description = 'K&C CAPITAL is a safe company',
}: SlideItemDescroption) {
  return (
    <div className={HomeStyle.slide__Description}>
      <span>{order}</span>
      <p className={HomeStyle.slide}>{description}</p>
      {/* <Button
        color="White"
        type={'button'}
        layOutDesign={'More'}
        className={HomeStyle.slide__Description__button}
      >
        more
      </Button> */}
    </div>
  );
}

export function SlideImage({ className, imageName, alt }: SlideitemProps) {
  return (
    <img
      className={clsx(HomeStyle.slide__imgs, className)}
      src={`/assets/img/home/slide/${imageName}`}
      alt={`this picture is about "${alt}"`}
    />
  );
}

export function SlideItem({
  imageName,
  alt,
  order,
  description,
}: SlideitemProps) {
  return (
    <>
      <SlideImage imageName={imageName} alt={alt} />
      <SlideItemDescription order={order} description={description} />
    </>
  );
}
