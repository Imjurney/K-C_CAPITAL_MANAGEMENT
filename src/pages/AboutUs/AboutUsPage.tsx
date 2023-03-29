import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import AboutUsStyle from '@/pages/AboutUs/AboutUsPage.module.css';
import { ReactNode } from 'react';
import { CareerSection } from '@/components/CareerSection/CareerSection';
import { AboutusBanner } from '@/components/AboutusBanner/AboutusBanner';
import { AboutusArticle } from '@/components/AboutusArticle/AboutusArticle';
import MoveScroll from '@/components/MoveScroll/MoveScroll';
import MaxWidthWrapperLayout from '@/components/Layout/MaxWidthWrapperLayout';

interface AboutusProps {
  children?: ReactNode;
}

export function Container({ children }: AboutusProps) {
  return <main className="bg-black">{children}</main>;
}

function TopSection({ children }: AboutusProps) {
  return <section className={AboutUsStyle.section__top}>{children}</section>;
}

function BottomSection({ children }: AboutusProps) {
  return (
    <section className="pt-14 flex flex-col gap-7 mobile:pb-10 laptop:pt-[29.5625rem] desktop:pt-[23.5625rem] bg-white">
      {children}
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <Header description="this is aboutus Page" />
      <Container>
        <MaxWidthWrapperLayout>
          <TopSection>
            <TitleContent content="ABOUT US" />
            <AboutusBanner />
            <AboutusArticle />
          </TopSection>
          <BottomSection>
            <TitleContent content="THE DIRECTORS OF COMPANY" />
            <CareerSection />
          </BottomSection>
          <MoveScroll />
        </MaxWidthWrapperLayout>
      </Container>
      <Footer />
    </>
  );
}
