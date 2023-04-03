import SlideCardStyle from '@/components/SlideCard/SlideCard.module.css';
import { VariationIcon } from '@/data/icon/icon';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface SlideCardProps {
  name?: string;
  name2?: string;
  icon?: JSX.Element;
  className?: string;
  onclick?: () => void;
}

export const SlideCard = forwardRef<HTMLHtmlElement, SlideCardProps>(
  (
    {
      name = 'investment',
      name2 = 'company',
      icon = VariationIcon[0],
      className,
      onclick,
    },
    ref
  ) => {
    return (
      <figure
        onClick={onclick}
        ref={ref}
        className={clsx(SlideCardStyle.card_wrapper, className)}
      >
        <div className={SlideCardStyle.icon_wrapper}>{icon}</div>
        <figcaption className={SlideCardStyle.figcaption}>
          <span>{name}</span>
          <span>{name2}</span>
        </figcaption>
      </figure>
    );
  }
);

SlideCard.displayName = 'SlideCard';
