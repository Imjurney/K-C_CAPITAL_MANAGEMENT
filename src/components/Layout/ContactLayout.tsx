import { ReactNode } from 'react';
import layout from '@/components/Layout/Layout.module.css';
import MaxWidthWrapperLayout from '@/components/Layout/MaxWidthWrapperLayout';
export interface LayoutProp {
  children: ReactNode;
}

export function ContactLayout({ children }: LayoutProp) {
  return (
    <section className={layout.contact}>
      <MaxWidthWrapperLayout>
        <main className={layout.max__wrapper}>
          <div className={layout.wrapper}>{children}</div>
        </main>
      </MaxWidthWrapperLayout>
    </section>
  );
}
