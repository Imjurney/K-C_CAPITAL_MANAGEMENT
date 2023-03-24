import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import AboutUsStyle from '@/pages/AboutUs/AboutUsPage.module.css';
import { ReactNode } from 'react';
import { CareerSection } from '@/components/CareerSection/CareerSection';
import { AboutusBanner } from '@/components/AboutusBanner/AboutusBanner';
import { AboutusArticle } from '@/components/AboutusArticle/AboutusArticle';

interface AboutusProps {
  children?: ReactNode;
}

function TopSection({ children }: AboutusProps) {
  return <section className={AboutUsStyle.section__top}>{children}</section>;
}

function BottomSection({ children }: AboutusProps) {
  return (
    <section className="pt-14 flex flex-col gap-7 mobile:mb-10 bg-white">
      {children}
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <Header description="this is aboutus Page" />
      <TopSection>
        <TitleContent content="ABOUT US" />
        <AboutusBanner />
        <AboutusArticle />
      </TopSection>
      <BottomSection>
        <TitleContent content="THE DIRECTORS OF COMPANY" />
        <CareerSection />
      </BottomSection>
      <Footer />
    </>
  );
}
