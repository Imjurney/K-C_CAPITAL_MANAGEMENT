import { ReactNode } from 'react';
import layout from '@/components/Layout/Layout.module.css';
export interface LayoutProp {
  children: ReactNode;
}

export function ContactLayout({ children }: LayoutProp) {
  return (
    <section className={layout.contact}>
      <div className={layout.background}></div>
      <div className={layout.wrapper}>{children}</div>
    </section>
  );
}
