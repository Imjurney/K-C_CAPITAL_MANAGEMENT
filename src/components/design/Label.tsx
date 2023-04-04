import clsx from 'clsx';
import style from '@/components/design/design.module.css';

interface LabelProps {
  Color?: 'Red' | 'White' | 'Gray';
  subject?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
}

const Colors = {
  Red: style.button__red,
  White: style.button__white,
  Gray: style.button__gray,
};

export default function Label({
  Color = 'Red',
  subject,
  description1,
  description2,
  description3,
  description4,
}: LabelProps) {
  return (
    <div className={style.button__wrapper}>
      <span className={clsx(style.button, Colors[Color])}>{subject}</span>
      <div className={style.description__wrapper}>
        <span>{description1}</span>
        <span>{description2}</span>
        <span>{description3}</span>
        <span>{description4}</span>
      </div>
    </div>
  );
}
