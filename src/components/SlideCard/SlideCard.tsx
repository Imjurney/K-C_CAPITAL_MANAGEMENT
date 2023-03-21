import SlideCardStyle from '@/components/SlideCard/SlideCard.module.css';

import clsx from 'clsx';

interface SlideCardProps {
  name?: string;
  name2?: string;
  icon?: JSX.Element;
  className?: string;
}

export function SlideCard({
  name = 'investment',
  name2 = 'company',
  icon,
  className,
}: SlideCardProps) {
  return (
    <figure className={clsx(SlideCardStyle.card_wrapper, className)}>
      <div className={SlideCardStyle.icon_wrapper}>{icon}</div>
      <figcaption className={SlideCardStyle.figcaption}>
        <span>{name}</span>
        <span>{name2}</span>
      </figcaption>
    </figure>
  );
}
