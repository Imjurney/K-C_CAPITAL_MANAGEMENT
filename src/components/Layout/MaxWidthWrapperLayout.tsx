import clsx from 'clsx';
import { ReactNode } from 'react';

export interface LayoutProp {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthWrapperLayout({
  children,
  className,
}: LayoutProp) {
  return (
    <div className={clsx('desktop:max-w-dx mx-auto', className)}>
      {children}
    </div>
  );
}
