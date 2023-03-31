import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { WorkerCard } from '@/components/WorkerCard/WorkerCard';

export default function TestimonialPage() {
  return (
    <>
      <Header description="this page is testimonial page" />
      <section className="desktop:relative mobile:pt-[3.75rem] pt-[7.5rem] bg-kc-bg_lightgray">
        <div
          className="after:content-[''] 
        after:block after:w-full desktop:after:h-[394px] after:bg-kc-article_bg
        after:absolute after:bottom-0 mobile:hidden"
        ></div>
        <TitleContent content="TESTIMONIALS" />
        <WorkerCard />
      </section>
      <Footer />
    </>
  );
}
