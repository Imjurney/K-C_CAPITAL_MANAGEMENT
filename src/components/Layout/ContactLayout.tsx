import { ReactNode } from 'react';

export interface LayoutProp {
  children: ReactNode;
}

export function ContactLayout({ children }: LayoutProp) {
  return (
    <section className="laptop:px-[4.625rem] flex flex-col items-center justify-center">
      <div className="bg-kc-bg_lightgray w-full pb-11">{children}</div>
    </section>
  );
}
