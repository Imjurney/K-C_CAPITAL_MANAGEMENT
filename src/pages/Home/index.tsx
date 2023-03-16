import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { TopBanner } from '@/components/TopBanner/TopBanner';

export default function HomePage() {
  return (
    <div>
      <Header />
      <TopBanner />
      <WhatWedoBanner />
      <Footer />
    </div>
  );
}

function SubBanner() {
  return (
    <>
      <div className="item">
        {/* <img src="/assets/img/sub_banner.jpg" className="w-[1200px]" /> */}

        <p className="text-white flex-col justify-center flex">
          Helping you make a successful New Zealand real estate investment, your
          partner K&C CAPITAL MANAGEMENT.
        </p>
        <Button type={'button'} layOutDesign={'Normal'}>
          Read more
        </Button>
      </div>
    </>
  );
}

function WhatWedoBanner() {
  return (
    <>
      <section className="relative">
        <div className="bg-red-200 desktop:pt-32 desktop:pb-[360px]">
          <TitleContent content="What we do" />
        </div>
        <SubBanner />

        <div className="bg-black h-[600px]"></div>
      </section>
      <section className="h-[100vh] bg-teal-400"></section>
      <section className="h-[100vh] bg-blue-500"></section>
    </>
  );
}
