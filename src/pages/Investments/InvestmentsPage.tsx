import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import SecondSection from '@/components/SecondSection/SecondSection';

export default function InvestmentsPage() {
  return (
    <>
      <Header />
      <section className="h-[200vh] bg-emerald-400">
        <TitleContent content="INVESTMENTS" />
        <TitleContent content="RESIDENTIAL PROPETY DEVELOPMENTS" />
        <TitleContent content="NZ LEADING RESIDENTIAL PROPERTY DEVELOPERS" />
      </section>
      <section className="h-[200vh] bg-emerald-600">
        <TitleContent content="SECURED REINVESTMENT" />
      </section>
      <SecondSection />
      <Footer />
    </>
  );
}
