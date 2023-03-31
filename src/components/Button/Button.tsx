import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  layOutDesign: 'Form' | 'Normal' | 'More';
  color?: 'Red' | 'White';
  children?: ReactNode;
  className?: string;
}

const ResPonsiveLayout = {
  Form: [
    'text-base font-normal self-center',
    'mobile:px-5 mobile:py-2',
    // 'laptop:px-8 laptop:py-2.5',
    'desktop:px-8 desktop:py-2.5',
  ],
  Normal: [
    'mobile:px-3.5 mobile:py-2 mobile:text-sm mobile:font-normal',
    // 'laptop:px-10 laptop:py-5 laptop:font-medium laptop:text-base',
    'desktop:px-10 desktop:py-5 desktop:font-medium desktop:text-base',
  ],
  More: ['px-5 py-2'],
};

const colors = {
  Red: 'rounded-full bg-kc-red text-white',
  White: 'rounded-full bg-white text-black',
};
export function Button({
  type = 'button',
  children,
  layOutDesign,
  color = 'Red',
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(className, colors[color], ResPonsiveLayout[layOutDesign])}
      type={type}
    >
      {children}
    </button>
  );
}
