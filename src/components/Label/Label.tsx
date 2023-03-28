import LabelStyle from '@/components/Label/Label.module.css';
import clsx from 'clsx';
interface LabelProps {
  jobTitle?: string;
  name?: string;
  anotherJobTitle?: string;
  labelTextWeight?: 'normal' | 'bold';
  nameTextWeight?: 'normal' | 'bold';
  id?: string;
}

const TextWeightType = {
  normal: LabelStyle.normal,
  bold: LabelStyle.bold,
};

const responsiveLabel: string[] = [
  `mobile:text-xs`,
  'laptop:text-sm',
  'desktop:text-sm',
];

const responsiveName: string[] = [
  'mobile:text-base',
  'laptop:text-3xl',
  'desktop:text-3xl',
];
export function Label({
  jobTitle,
  anotherJobTitle,
  labelTextWeight = 'normal',
  nameTextWeight = 'normal',
  name,
  id,
}: LabelProps) {
  return (
    <figcaption id={id} className={clsx(LabelStyle.wrapper, responsiveLabel)}>
      <span
        id={`${id}_span`}
        className={clsx(TextWeightType[nameTextWeight], responsiveName)}
      >
        {name}
      </span>
      <span
        className={clsx(LabelStyle.default, TextWeightType[labelTextWeight])}
      >
        {jobTitle}&nbsp;&#47;&nbsp;{anotherJobTitle}
      </span>
    </figcaption>
  );
}
