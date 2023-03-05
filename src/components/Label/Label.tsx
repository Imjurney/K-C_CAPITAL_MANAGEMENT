import LabelStyle from './Label.module.css';
import clsx from 'clsx';
interface LabelProps {
  jobTitle?: string;
  textWeight?: 'normal' | 'bold';
}

const textWeightType = {
  normal: LabelStyle.normal,
  bold: LabelStyle.bold,
};
//  mobile:w-[6.5625rem] laptop:max-desktop:w-[7.875rem] laptop:max-desktop:bg-slate-300

// const sizes = {
//   sm: 'p-4',
//   md: 'p-8',
// };
export function Label({ jobTitle, textWeight = 'normal' }: LabelProps) {
  return (
    <figcaption
      className={clsx(
        textWeightType[textWeight],
        'mobile:w-[6.5625rem] laptop:w-[7.875rem] desktop:bg-slate-300',
        'p-[0.625rem] bg-kc-red text-white'
      )}
    >
      {jobTitle}
    </figcaption>
  );
}
