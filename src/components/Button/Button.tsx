import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  layOutDesign: 'Form' | 'Normal';
  children?: ReactNode;
}

const ResPonsiveLayout = {
  Form: [
    'text-base font-normal',
    'mobile:px-5 mobile:py-2',
    'laptop:px-8 laptop:py-2.5',
    'desktop:px-8 desktop:py-2.5',
  ],
  Normal: [
    'mobile:px-3.5 mobile:py-2 mobile:text-sm mobile:font-normal',
    'laptop:px-10 laptop:py-5 laptop:font-medium laptop:text-base',
    'desktop:px-10 desktop:py-5 desktop:font-medium desktop:text-base',
  ],
};

export function Button({
  type = 'button',
  children,
  layOutDesign,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full bg-kc-red text-white',
        ResPonsiveLayout[layOutDesign]
      )}
      type={type}
    >
      {children}
    </button>
  );
}
